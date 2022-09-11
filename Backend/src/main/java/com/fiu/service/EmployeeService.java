package com.fiu.service;

import com.fiu.models.EmployeeDetails;
import com.fiu.repository.EmployerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
    @Autowired
    private EmployerRepository employerRepository;

    public String saveEmployee(EmployeeDetails employeeDetails) {
        employerRepository.save(employeeDetails);
        return "Successful.";
    }
}
