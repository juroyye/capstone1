package com.stockproj.stockbackend.model;


import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import com.stockproj.stockbackend.model.Stock;



import java.time.LocalDateTime;

@Entity
public class Portfolio {

    // New methods
    // Returns the quantity for this Portfolio entry
    // Sets the quantity for this Portfolio entry
    // Retrieves the quantity for this Portfolio entry

    // New methods
    // Returns the quantity for this Portfolio entry
    @Getter
    @Setter
    @Column(nullable = false)
    private Integer quantity;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // Primary key

    // Returns the associated Stock entity

    // Returns the associated Stock entity

    @ManyToOne
    @JoinColumn(name = "stock_id", nullable = false)
    private Stock stock; // Foreign key reference to Stock entity

    @Column(nullable = false)
    private LocalDateTime dateAdded;

    public String getName() {
        return stock != null ? stock.getName() : null; // Retrieves the name from the associated Stock entity
    }

    public void setName(String name) {
        if (stock == null) {
            stock = new Stock(); // Ensure stock is initialized
        }
        stock.setName(name); // Sets the name in the associated Stock entity
    }
    public Stock getStock() {
        return stock;
    }


    public void setStock(Stock stock) {

        this.stock = stock;
    }
}

