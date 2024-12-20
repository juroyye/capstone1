package com.stockproj.stockbackend.controller;

import com.stockproj.stockbackend.model.Portfolio;
import com.stockproj.stockbackend.repository.PortfolioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;



import java.util.List;

@RestController
@RequestMapping("/api/portfolios")
public class PortfolioController {

    @Autowired
    private PortfolioRepository portfolioRepository;

    // GET: Retrieve all portfolios
    @GetMapping
    public List<Portfolio> getAllPortfolios() {
        return portfolioRepository.findAll();
    }

    // GET: Retrieve a specific portfolio by ID
    @GetMapping("/{id}")
    public ResponseEntity<Portfolio> getPortfolioById(@PathVariable Long id) {
        return portfolioRepository.findById(id)
                .map(portfolio -> ResponseEntity.ok().body(portfolio))
                .orElse(ResponseEntity.notFound().build());
    }

    // POST: Create a new portfolio
    @PostMapping
    public Portfolio createPortfolio(@RequestBody Portfolio portfolio) {
        return portfolioRepository.save(portfolio);
    }

    // PUT: Update an existing portfolio
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

    // DELETE: Remove a portfolio by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePortfolio(@PathVariable Long id) {
        return portfolioRepository.findById(id).map(portfolio -> {
            portfolioRepository.delete(portfolio);
            return ResponseEntity.ok().build();
        }).orElse(ResponseEntity.notFound().build());
    }
}
