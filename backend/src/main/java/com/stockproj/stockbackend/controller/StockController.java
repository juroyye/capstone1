
package com.stockproj.stockbackend.controller;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stockproj.stockbackend.service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/stocks")
public class StockController {

    private final StockService stockService;
    private final RestTemplate restTemplate;

    @Value("${finnhub.api.key}")
    private String finnhubApiKey;


    @Autowired
    public StockController(StockService stockService, RestTemplate restTemplate) {
        this.stockService = stockService;
        this.restTemplate = restTemplate;
    }


    @GetMapping("/search")
    public ResponseEntity<String> searchStock(@RequestParam String query) {
        try {
            String encodedQuery = URLEncoder.encode(query, StandardCharsets.UTF_8);
            String result = stockService.searchStock(encodedQuery);
            return ResponseEntity.ok(result);
        } catch (Exception e) {

            return ResponseEntity.status(500).body("Error fetching stock data: " + e.getMessage());
        }
    }



    @GetMapping("/data")
    public ResponseEntity<?> getStockData(@RequestParam String symbol) {
        try {
            String encodedSymbol = URLEncoder.encode(symbol, StandardCharsets.UTF_8);
            String url = String.format("https://finnhub.io/api/v1/quote?symbol=%s&token=%s", encodedSymbol, finnhubApiKey);

            ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);

            System.out.println("Received symbol: " + url);


            return ResponseEntity.ok(response.getBody());
        } catch (Exception e) {

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error fetching stock data: " + e.getMessage());
        }
    }
}


