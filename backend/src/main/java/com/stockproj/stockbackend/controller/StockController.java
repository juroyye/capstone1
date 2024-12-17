package com.stockproj.stockbackend.controller;

import com.stockproj.stockbackend.model.Stock;
import com.stockproj.stockbackend.repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/stocks")
public class StockController {

    @Autowired
    private StockRepository stockRepository;

    // GET: Retrieve all stocks
    @GetMapping
    public List<Stock> getAllStocks() {
        return stockRepository.findAll();
    }

    // POST: Add a new stock
    @PostMapping
    public Stock addStock(@RequestBody Stock stock) {
        return stockRepository.save(stock);
    }

    // DELETE: Delete a stock by ID
    @DeleteMapping("/{id}")
    public String deleteStock(@PathVariable Long id) {
        stockRepository.deleteById(id);
        return "Stock deleted successfully!";
    }
}
