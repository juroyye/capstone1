package com.stockproj.stockbackend;

import org.springframework.web.client.RestTemplate;

public class TestStockSearch {
    public static void main(String[] args) {
        RestTemplate restTemplate = new RestTemplate();
        String finnhubBaseUrl = "https://finnhub.io/api/v1";
        String finnhubApiKey = "ctivuchr01qgfbsvlrggctivuchr01qgfbsvlrh0";

        String query = "netflix"; // Simulate user input here
        String url = String.format("%s/search?q=%s&token=%s", finnhubBaseUrl, query, finnhubApiKey);

        try {
            String result = restTemplate.getForObject(url, String.class);
            System.out.println("Response from Finnhub:");
            System.out.println(result);
        } catch (Exception e) {
            System.out.println("Error occurred:");
            e.printStackTrace();
        }
    }
}
