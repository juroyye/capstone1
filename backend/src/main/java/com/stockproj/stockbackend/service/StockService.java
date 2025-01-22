package com.stockproj.stockbackend.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;


@Service
public class StockService {

    private final RestTemplate restTemplate;

    @Value("${finnhub.api.url}") // Base URL for the Finnhub API
    public String finnhubBaseUrl;

    @Value("${finnhub.api.key}") // API key for authentication
    public String finnhubApiKey;

    // Constructor injection for RestTemplate
    public StockService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }


    public String searchStock(String query) {
        try {
            String encodedQuery = URLEncoder.encode(query, StandardCharsets.UTF_8);
            String url = String.format("%s/search?q=%s&token=%s", finnhubBaseUrl, encodedQuery, finnhubApiKey);

            return restTemplate.getForObject(url, String.class);
        } catch (Exception e) {

            throw new RuntimeException("Failed to fetch stock data: " + e.getMessage());
        }
    }
}


//https://finnhub.io/api/v1/search?q=amazon&exchange=US&token=ctivuchr01qgfbsvlrggctivuchr01qgfbsvlrh0



