package com.example.gymapi.service;

import com.example.gymapi.model.Customer;

import java.util.List;
import java.util.Optional;

public interface ICustomerService {
    Optional<Customer> findById(Integer customerId);
}
