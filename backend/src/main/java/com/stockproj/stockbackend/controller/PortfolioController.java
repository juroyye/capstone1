package com.stockproj.stockbackend.controller;

import com.stockproj.stockbackend.model.Portfolio;
import com.stockproj.stockbackend.model.Stock;
import com.stockproj.stockbackend.model.User;
import com.stockproj.stockbackend.repository.PortfolioRepository;
import com.stockproj.stockbackend.repository.StockRepository;
import com.stockproj.stockbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;


import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/portfolios")
public class PortfolioController {

    @Autowired
    private PortfolioRepository portfolioRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private StockRepository stockRepository;



    @GetMapping
    public List<Portfolio> getAllPortfolios() {
        return portfolioRepository.findAll();
    }


    @GetMapping("/{id}")
    public ResponseEntity<Portfolio> getPortfolioById(@PathVariable Long id) {
        return portfolioRepository.findById(id)
                .map(portfolio -> ResponseEntity.ok().body(portfolio))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/user/{userId}")
    public ResponseEntity<List<Portfolio>> getUserStocks(@PathVariable Long userId) {
        Optional<User> user = userRepository.findById(userId);
        if (user.isPresent()) {
            return ResponseEntity.badRequest().body(null);
        }

        List<Portfolio> portfolios = portfolioRepository.findByUserId(userId);
        return ResponseEntity.ok(portfolios);
    }

    @PostMapping("/addStock")
    public ResponseEntity<Map<String, Object>> addStockToPortfolio(@RequestParam Long userId, @RequestParam String stockSymbol) {

        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isEmpty()) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("error", "User not found");
            return ResponseEntity.badRequest().body(errorResponse);
        }

        Optional<Stock> stockOptional = stockRepository.findBySymbol(stockSymbol);
        if (stockOptional.isEmpty()) {
            Stock newStock = new Stock();
            newStock.setSymbol(stockSymbol);
            newStock.setName(null); // Name can be null
            newStock.setPrice(0.0); // Example default price
            newStock.setLastUpdated(LocalDateTime.now());
            stockRepository.save(newStock);
            stockOptional = Optional.of(newStock);
        }

        Portfolio portfolio = new Portfolio();
        portfolio.setUser(userOptional.get());
        portfolio.setStock(stockOptional.get());
        portfolio.setQuantity(1);
        portfolio.setDateAdded(LocalDateTime.now());
        portfolioRepository.save(portfolio);

        Map<String, Object> successResponse = new HashMap<>();
        successResponse.put("message", "Stock added successfully");
        successResponse.put("userId", userId);
        successResponse.put("stockSymbol", stockSymbol);
        return ResponseEntity.ok(successResponse);
    }
    


    @PostMapping
    public Portfolio createPortfolio(@RequestBody Portfolio portfolio) {
        return portfolioRepository.save(portfolio);
    }


    @PutMapping("/{id}")
    public ResponseEntity<Portfolio> updatePortfolio(@PathVariable Long id, @RequestBody Portfolio portfolioDetails) {
        return portfolioRepository.findById(id).map(portfolio -> {
            portfolio.setName(portfolioDetails.getName());
            portfolio.setStock(portfolioDetails.getStock());
            portfolio.setQuantity(portfolioDetails.getQuantity());
            Portfolio updatedPortfolio = portfolioRepository.save(portfolio);
            return ResponseEntity.ok(updatedPortfolio);
        }).orElse(ResponseEntity.notFound().build());
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePortfolio(@PathVariable Long id) {
        return portfolioRepository.findById(id).map(portfolio -> {
            portfolioRepository.delete(portfolio);
            return ResponseEntity.ok().build();
        }).orElse(ResponseEntity.notFound().build());
    }
}
