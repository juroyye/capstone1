package com.stockproj.stockbackend.repository;

import com.stockproj.stockbackend.model.Portfolio;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PortfolioRepository extends JpaRepository<Portfolio, Long> {
}
