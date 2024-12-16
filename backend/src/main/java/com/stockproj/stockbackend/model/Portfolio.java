package com.stockproj.stockbackend.model;

import jakarta.persistence.*;
import lombok.Data;
import org.apache.catalina.User;
import org.springframework.data.annotation.Id;
import java.time.LocalDateTime;

@Entity
@Data
public class Portfolio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "stock_id", nullable = false)
    private Stock stock;

    @Column(nullable = false)
    private LocalDateTime dateAdded;

}
