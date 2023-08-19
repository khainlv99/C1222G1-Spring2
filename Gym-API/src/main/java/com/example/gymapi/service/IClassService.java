package com.example.gymapi.service;

import com.example.gymapi.model.Classs;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface IClassService {
    List<Classs> findAll();
    List<Classs> findByNameContaining(@Param("name") String name);
}
