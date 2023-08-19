package com.example.gymapi.service.impl;

import com.example.gymapi.model.Customer;
import com.example.gymapi.model.OrderHistory;
import com.example.gymapi.repository.IOrderHistoryRepository;
import com.example.gymapi.service.IClassService;
import com.example.gymapi.service.ICustomerService;
import com.example.gymapi.service.IOderHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderHistoryService implements IOderHistoryService {
    private final IOrderHistoryRepository orderHistoryRepository;

    @Autowired
    public OrderHistoryService(IOrderHistoryRepository orderHistoryRepository) {
        this.orderHistoryRepository = orderHistoryRepository;
    }
    @Autowired
    ICustomerService iCustomerService;

    public List<OrderHistory> getOrderHistoryByCustomerId(Integer customerId) {
        // Assuming you have a CustomerRepository to retrieve Customer by id
        Customer customer = iCustomerService.findById(customerId).orElse(null);
        if (customer != null) {
            return orderHistoryRepository.findByCustomer(customer);
        }
        return null;
    }
}
