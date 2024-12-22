package com.stockproj.stockbackend;

import com.stockproj.stockbackend.StockbackendApplication;
import com.stockproj.stockbackend.service.StockService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(classes = StockbackendApplication.class) // Specify the main application class
public class StockServiceTest {

    @Autowired
    private StockService stockService;

    @Test
    public void testSearchStock() {
        // Arrange
        String query = "meta";
        // Act
        String result = stockService.searchStock(query);

        // Assert
        assertNotNull(result);
        System.out.println("Result: " + result);
    }
}

