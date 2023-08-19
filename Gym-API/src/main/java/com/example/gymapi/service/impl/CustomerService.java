package com.example.gymapi.service.impl;

import com.example.gymapi.model.Customer;
import com.example.gymapi.repository.ICustomerRepository;
import com.example.gymapi.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomerService implements ICustomerService {
    @Autowired
    ICustomerRepository customerRepository;
    @Override
    public Optional<Customer> findById(Integer customerId) {
        return customerRepository.findById(customerId);
    }
}
