package com.stockproj.stockbackend.model;


import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import com.stockproj.stockbackend.model.Stock;



import java.time.LocalDateTime;

@Entity
public class Portfolio {


    @Getter
    @Setter
    @Column(nullable = false)
    private Integer quantity;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // Primary key



    @ManyToOne
    @JoinColumn(name = "stock_id", nullable = false)
    private Stock stock;

    @Column(nullable = false)
    private LocalDateTime dateAdded;

    public String getName() {
        return stock != null ? stock.getName() : null;
    }

    public void setName(String name) {
        if (stock == null) {
            stock = new Stock();
        }
        stock.setName(name);
    }
    public Stock getStock() {
        return stock;
    }


    public void setStock(Stock stock) {

        this.stock = stock;
    }
}

