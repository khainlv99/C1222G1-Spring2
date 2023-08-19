package com.example.gymapi.model;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "packages")
public class PackageEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String description;
    private BigDecimal price;

    public PackageEntity() {
    }

    public PackageEntity(int id) {
        this.id = id;
    }

    public PackageEntity(int id, String name, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    public PackageEntity(int id, String name, String description, BigDecimal price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
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

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
    // Constructors, getters, and setters
}
