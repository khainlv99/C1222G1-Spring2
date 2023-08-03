package com.example.gymapi.service.impl;
import com.example.gymapi.model.Classs;
import com.example.gymapi.repository.IClassRepository;
import com.example.gymapi.service.IClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ClasssService implements IClassService {
    @Autowired
    private IClassRepository classRepository;


    @Override
    public List<Classs> findAll() {
        return classRepository.findAll();
    }

}
