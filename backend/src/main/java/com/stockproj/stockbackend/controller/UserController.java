package com.stockproj.stockbackend.controller;

import com.stockproj.stockbackend.model.Portfolio;
import com.stockproj.stockbackend.model.Stock;
import com.stockproj.stockbackend.model.User;
import com.stockproj.stockbackend.model.LoginRequest;
import com.stockproj.stockbackend.repository.PortfolioRepository;
import com.stockproj.stockbackend.repository.StockRepository;
import com.stockproj.stockbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;


@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private PortfolioRepository portfolioRepository;


    @Autowired
    private UserRepository userRepository;

    @Autowired
    private StockRepository stockRepository;



    @PostMapping("/signup")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        // Check if username or email already exists
        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            return ResponseEntity.badRequest().body("Username already exists");
        }
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("Email already exists");
        }
        userRepository.save(user);

        return ResponseEntity.ok("User registered successfully");

        }


    @PostMapping("/addStock")
    public ResponseEntity<String> addStockToPortfolio(@RequestParam Long userId, @RequestParam Long stockId) {

        Optional<User> optionalUser = userRepository.findById(userId);
        if (!optionalUser.isPresent()) {
            return ResponseEntity.badRequest().body("User not found");
        }
        User user = optionalUser.get();


        Optional<Stock> optionalStock = stockRepository.findById(stockId);
        if (!optionalStock.isPresent()) {
            return ResponseEntity.badRequest().body("Stock not found");
        }
        Stock stock = optionalStock.get();

        // Add stock to portfolio
        Portfolio portfolio = new Portfolio();
        portfolio.setUser(user);
        portfolio.setStock(stock);
        portfolio.setQuantity(1); // Example quantity
        portfolio.setDateAdded(LocalDateTime.now());

        portfolioRepository.save(portfolio);

        return ResponseEntity.ok("Stock added to portfolio successfully");
    }


    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody LoginRequest loginRequest) {
        Optional<User> userOptional = userRepository.findByUsername(loginRequest.getUsername());
        if (userOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not found");
        }

        User user = userOptional.get();

        if (!user.getPassword().equals(loginRequest.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }

//        User existingUser = userService.findByEmailAndPassword(user.getEmail(), user.getPassword());
//        if (existingUser != null) {
//            Map<String, Object> response = new HashMap<>();
//            response.put("message", "Login successful");
//            response.put("userId", existingUser.getId());
//            return ResponseEntity.ok(response);
//        }
//        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);

        return ResponseEntity.ok("Login successful");
    }

}


