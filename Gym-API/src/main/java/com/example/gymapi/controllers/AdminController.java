package com.example.gymapi.controllers;

import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = { "http://example.com", "http://localhost:8080" }, allowCredentials = "true")
@RequestMapping("/api/admin")
public class AdminController {

    @GetMapping()
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> hello() {
        System.out.println("hello khai");
        return new ResponseEntity<>(HttpStatus.OK);
    }
}