package com.example.gymapi.controllers;

import com.example.gymapi.model.PackageEntity;
import com.example.gymapi.service.impl.PackageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = { "http://example.com", "http://localhost:8080" }, allowCredentials = "true")
public class PackageController {

    @Autowired
    private PackageService packageService;

    @GetMapping("packages")
    public List<PackageEntity> getAllPackages() {
        return packageService.getAllPackages();
    }
}