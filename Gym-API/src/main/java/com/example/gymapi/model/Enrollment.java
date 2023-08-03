package com.example.gymapi.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "enrollments")
public class Enrollment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "CustomerID")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "ClassID")
    private Classs gymClasss;

    private Date enrollmentDate;

    // Constructors, getters, and setters
}


