package com.example.gymapi.model;

import javax.persistence.*;
import javax.persistence.criteria.Order;
import java.math.BigDecimal;
import java.time.LocalDateTime;

public class PaypalPayment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;

    private BigDecimal amount;
    private LocalDateTime paymentDate;

    public PaypalPayment() {
    }

    public PaypalPayment(Integer id, Customer customer, Order order, BigDecimal amount, LocalDateTime paymentDate) {
        this.id = id;
        this.customer = customer;
        this.order = order;
        this.amount = amount;
        this.paymentDate = paymentDate;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public LocalDateTime getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(LocalDateTime paymentDate) {
        this.paymentDate = paymentDate;
    }
}
