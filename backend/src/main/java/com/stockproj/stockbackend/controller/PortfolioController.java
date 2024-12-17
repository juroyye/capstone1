package com.stockproj.stockbackend.controller;

import com.stockproj.stockbackend.model.Portfolio;
import com.stockproj.stockbackend.repository.PortfolioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/portfolio")
public class PortfolioController {

    @Autowired
    private PortfolioRepository portfolioRepository;

    // GET: Retrieve all portfolio entries
    @GetMapping
    public List<Portfolio> getAllPortfolios() {
        return portfolioRepository.findAll();
    }

    // POST: Add a new portfolio entry
    @PostMapping
    public Portfolio addPortfolio(@RequestBody Portfolio portfolio) {
        return portfolioRepository.save(portfolio);
    }

    // DELETE: Delete a portfolio entry by ID
    @DeleteMapping("/{id}")
    public String deletePortfolio(@PathVariable Long id) {
        portfolioRepository.deleteById(id);
        return "Portfolio entry deleted successfully!";
    }
}
