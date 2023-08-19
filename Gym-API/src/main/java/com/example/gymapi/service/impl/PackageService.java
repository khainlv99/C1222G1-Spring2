package com.example.gymapi.service.impl;

import com.example.gymapi.model.PackageEntity;
import com.example.gymapi.repository.IPackageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PackageService {

    @Autowired
    private IPackageRepository packageRepository;

    public List<PackageEntity> getAllPackages() {
        return packageRepository.findAll();
    }
}
