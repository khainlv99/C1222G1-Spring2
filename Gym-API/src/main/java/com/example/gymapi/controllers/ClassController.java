package com.example.gymapi.controllers;

import com.example.gymapi.model.Classs;
import com.example.gymapi.service.IClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/auth/")
@CrossOrigin(origins = { "http://example.com", "http://localhost:8080" }, allowCredentials = "true")
public class ClassController {
    @Autowired
    private IClassService service;

    @GetMapping("/class")
    public List<Classs> findAll(){
        return service.findAll();
    }
    @GetMapping("/class/{name}")
    public ResponseEntity<List<Classs>> getClassByName(@PathVariable("name") String name) {
        List<Classs> classDetail = service.findByNameContaining(name);
        if (!classDetail.isEmpty()) {
            return ResponseEntity.ok(classDetail);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

