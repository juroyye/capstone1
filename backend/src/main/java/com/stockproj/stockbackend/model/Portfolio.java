package com.stockproj.stockbackend.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Data
public class Portfolio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // Primary key

    @ManyToOne
    @JoinColumn(name = "stock_id", nullable = false)
    private Stock stock; // Foreign key reference to Stock entity

    @Column(nullable = false)
    private LocalDateTime dateAdded;
}

