package com.example.gymapi.model;

import javax.persistence.*;
import javax.xml.soap.Name;

@Entity
@Table(name = "customers")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "customer_id")
    private int id;

    private String name;

    @Column(unique = true)
    private String email;

    @ManyToOne
    @JoinColumn(name = "UserID")
    private User user;

    public Customer() {
    }

    public Customer(int id, String name, String email, User user) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.user = user;
    }
    public Customer(Integer customerId) {
        this.id= (customerId != null) ? customerId : -1;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}

