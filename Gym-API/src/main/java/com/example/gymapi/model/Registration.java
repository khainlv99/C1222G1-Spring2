package com.example.gymapi.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "registrations")
public class Registration {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "CustomerID")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "PackageID")
    private PackageEntity gymPackageEntity;

    private Date registrationDate;

    // Constructors, getters, and setters
}

