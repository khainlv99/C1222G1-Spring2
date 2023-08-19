package com.example.gymapi.repository;


import com.example.gymapi.model.PackageEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IPackageRepository extends JpaRepository<PackageEntity, Integer> {
}
