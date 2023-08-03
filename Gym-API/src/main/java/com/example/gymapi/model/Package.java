package com.example.gymapi.model;

import javax.persistence.*;

@Entity
@Table(name = "packages")
public class Package {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String description;

    // Constructors, getters, and setters
}
