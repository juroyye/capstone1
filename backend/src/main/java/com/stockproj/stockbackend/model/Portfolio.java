package com.stockproj.stockbackend.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import com.stockproj.stockbackend.model.Stock;

@Entity
public class Portfolio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "stock_id", nullable = true)
    private Stock stock;

    @Column(nullable = false)
    private int quantity;

    @Column(nullable = false)
    private LocalDateTime dateAdded;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Stock getStock() {
        return stock;
    }

    public void setStock(Stock stock) {
        this.stock = stock;
    }

    public LocalDateTime getDateAdded() {
        return dateAdded;
    }

    public void setDateAdded(LocalDateTime dateAdded) {
        this.dateAdded = dateAdded;
    }


    public String getName() {
        return stock != null ? stock.getName() : null;
    }

    public void setName(String name) {
        if (stock == null) {
            stock = new Stock();
        }
        stock.setName(name);
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
        if (user != null && !user.getPortfolios().contains(this)) {
            user.getPortfolios().add(this);
        }
    }

}

