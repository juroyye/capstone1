package com.stockproj.stockbackend.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data

public class User {

    @Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    // Default Constructor
    public User() {
    }

}
