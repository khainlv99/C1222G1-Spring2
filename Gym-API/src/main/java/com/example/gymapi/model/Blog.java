package com.example.gymapi.model;


import javax.persistence.*;

@Entity
@Table(name = "Blogs")
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String title;
    private String content;


    // Constructors, getters, and setters
}


