package com.stockproj.stockbackend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Data
public class Portfolio {

    // New methods
    // Returns the quantity for this Portfolio entry
    // Sets the quantity for this Portfolio entry
    // Retrieves the quantity for this Portfolio entry

    @Setter
    @Column(nullable = false)
    private Integer quantity;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // Primary key

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
    // New methods
    public Integer getQuantity() {
        return this.quantity; // Returns the quantity for this Portfolio entry
    }

    public Stock getStock() {
        return this.stock; // Returns the associated Stock entity
    }

}

