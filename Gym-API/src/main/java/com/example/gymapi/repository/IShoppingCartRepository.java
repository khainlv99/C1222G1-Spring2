package com.example.gymapi.repository;

import com.example.gymapi.model.ShoppingCart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IShoppingCartRepository extends JpaRepository<ShoppingCart, Integer> {
    List<ShoppingCart> findByCustomerId(int customerId);
    void deleteByCustomerId(int customerId);
}
