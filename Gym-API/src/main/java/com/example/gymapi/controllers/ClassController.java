package com.example.gymapi.controllers;

import com.example.gymapi.model.Classs;
import com.example.gymapi.service.IClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/admin/")
@CrossOrigin(origins = { "http://example.com", "http://localhost:8080" }, allowCredentials = "true")
public class ClassController {
    @Autowired
    private IClassService service;

    @GetMapping("/class")
    public List<Classs> findAll(){
        return service.findAll();
    }
}

