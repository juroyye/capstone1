package com.stockproj.stockbackend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Data
public class Portfolio {

    // Sets the quantity for this Portfolio entry
    // Retrieves the quantity for this Portfolio entry
    @Setter
    @Getter
    @Column(nullable = false)
    private Integer quantity;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // Primary key

    @ManyToOne
    @JoinColumn(name = "stock_id", nullable = false)
    private Stock stock; // Foreign key reference to Stock entity

    @Column(nullable = false)
    private LocalDateTime dateAdded;

    public String getName() {
        return stock != null ? stock.getName() : null; // Retrieves the name from the associated Stock entity
    }

    public void setName(String name) {
        if (stock != null) {
            stock.setName(name); // Sets the name in the associated Stock entity
        }
    }

}

