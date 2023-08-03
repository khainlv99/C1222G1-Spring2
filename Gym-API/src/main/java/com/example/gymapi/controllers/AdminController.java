package com.example.gymapi.controllers;

import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = { "http://example.com", "http://localhost:8080" }, allowCredentials = "true")
@RequestMapping("/api/test")
public class AdminController {

    @GetMapping("/hello")
    public ResponseEntity<?> hello (String a ){
        a = "hello khai";
        System.out.println(a);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
