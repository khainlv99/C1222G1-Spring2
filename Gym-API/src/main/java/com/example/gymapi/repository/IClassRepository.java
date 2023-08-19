package com.example.gymapi.repository;

import com.example.gymapi.model.Classs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface IClassRepository extends JpaRepository<Classs, Integer> {
    @Query(value = "SELECT * FROM classes c WHERE c.name like CONCAT('%', :name, '%')",nativeQuery = true)
    List<Classs> findByNameContaining(@Param("name") String name);
}
