package com.stockproj.stockbackend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;



import java.time.LocalDateTime;

@Entity
@Data
public class Stock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id; // Primary key

    @NotBlank(message = "Symbol cannot be blank")
    @Column(nullable = false, unique = true)
    private String symbol;

    @NotBlank(message = "Name cannot be blank")
    @Column(nullable = false)
    private String name;

    @NotNull(message = "Price cannot be null")
    @Column(nullable = false)
    private Double price;

    @Column(nullable = false)
    private LocalDateTime lastUpdated = LocalDateTime.now();
}

