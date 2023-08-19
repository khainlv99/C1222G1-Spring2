package com.example.gymapi.repository;

import com.example.gymapi.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IOrderRepository extends JpaRepository<Order, Integer> {
    // You can add custom query methods if needed
}
