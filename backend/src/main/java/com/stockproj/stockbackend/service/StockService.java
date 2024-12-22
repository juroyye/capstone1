package com.stockproj.stockbackend.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;


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

    /**
     * Fetches stock information based on the user's query.
     *
     * @param query The stock symbol or search term.
     * @return A JSON response containing stock data from Finnhub API.
     */
    public String searchStock(String query) {
        try {
            // Build the dynamic URL with query parameters
            String url = String.format("%s/search?q=%s&token=%s", finnhubBaseUrl, query, finnhubApiKey);
            // Make an API call and return the result as a String
            return restTemplate.getForObject(url, String.class);
        } catch (Exception e) {
            // Handle exceptions and provide a meaningful message
            throw new RuntimeException("Failed to fetch stock data: " + e.getMessage());
        }
    }
}


//https://finnhub.io/api/v1/search?q=amazon&exchange=US&token=ctivuchr01qgfbsvlrggctivuchr01qgfbsvlrh0



