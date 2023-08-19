package com.example.gymapi.repository;

import com.example.gymapi.model.Customer;
import com.example.gymapi.model.OrderHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IOrderHistoryRepository extends JpaRepository<OrderHistory, Long> {
    List<OrderHistory> findByCustomer(Customer customer);
}
