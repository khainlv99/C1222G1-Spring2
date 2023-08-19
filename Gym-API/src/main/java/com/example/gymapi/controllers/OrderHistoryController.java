package com.example.gymapi.controllers;

import com.example.gymapi.model.OrderHistory;
import com.example.gymapi.service.impl.OrderHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/auth")
public class OrderHistoryController {
    private final OrderHistoryService orderHistoryService;

    @Autowired
    public OrderHistoryController(OrderHistoryService orderHistoryService) {
        this.orderHistoryService = orderHistoryService;
    }

    @GetMapping("/order/{customerId}")
    public ResponseEntity<List<OrderHistory>> getOrderHistoryByCustomerId(@PathVariable Integer customerId) {
        List<OrderHistory> orderHistory = orderHistoryService.getOrderHistoryByCustomerId(customerId);
        if (!orderHistory.isEmpty()) {
            return ResponseEntity.ok(orderHistory);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
