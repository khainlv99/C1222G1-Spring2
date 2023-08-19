package com.example.gymapi.model;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
public class ShoppingCart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer cartId;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "package_id")
    private PackageEntity packageEntity;

    private Integer quantity;
    private BigDecimal price;


    public ShoppingCart() {
    }

    public ShoppingCart(Integer cartId, Customer customer, PackageEntity packageEntity, Integer quantity, BigDecimal price) {
        this.cartId = cartId;
        this.customer = customer;
        this.packageEntity = packageEntity;
        this.quantity = quantity;
        this.price = price;
    }

    public Integer getCartId() {
        return cartId;
    }

    public void setCartId(Integer cartId) {
        this.cartId = cartId;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public PackageEntity getPackageEntity() {
        return packageEntity;
    }

    public void setPackageEntity(PackageEntity packageEntity) {
        this.packageEntity = packageEntity;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

}
