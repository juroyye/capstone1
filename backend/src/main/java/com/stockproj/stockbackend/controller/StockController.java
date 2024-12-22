//package com.stockproj.stockbackend.controller;
//
//import com.stockproj.stockbackend.model.Stock;
//import com.stockproj.stockbackend.repository.StockRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/stocks")
//public class StockController {
//
//
//    @Autowired
//    private StockRepository stockRepository;
//
//    // GET: Retrieve all stocks
//    @GetMapping
//    public List<Stock> getAllStocks() {
//        return stockRepository.findAll();
//    }
//
//    // POST: Add a new stock
//    @PostMapping
//    public Stock addStock(@RequestBody Stock stock) {
//        return stockRepository.save(stock);
//    }
//
//    // DELETE: Delete a stock by ID
//    @DeleteMapping("/{id}")
//    public String deleteStock(@PathVariable Long id) {
//        stockRepository.deleteById(id);
//        return "Stock deleted successfully!";
//    }
//}

package com.stockproj.stockbackend.controller;

import com.stockproj.stockbackend.service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/stocks") // Base path for the API
public class StockController {

    private final StockService stockService;

    // Constructor injection of StockService
    @Autowired
    public StockController(StockService stockService) {
        this.stockService = stockService;
    }

    /**
     * Endpoint to search for stock information based on user query.
     *
     * @param query The stock symbol or search term provided by the user.
     * @return A JSON response with stock data from the StockService.
     */
    @GetMapping("/search")
    public ResponseEntity<String> searchStock(@RequestParam String query) {
        try {
            // Call the StockService to fetch stock data
            String result = stockService.searchStock(query);
            return ResponseEntity.ok(result); // Return the result as a 200 OK response
        } catch (Exception e) {
            // Return a 500 Internal Server Error with the exception message
            return ResponseEntity.status(500).body("Error fetching stock data: " + e.getMessage());
        }
    }
}

