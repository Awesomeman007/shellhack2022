package com.fiu.controller;

import com.fiu.models.EmployeeDetails;
import com.fiu.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class EmployeeControler {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/addEmployee")
    public String addEmployee(@RequestBody EmployeeDetails employeeDetails) {
        return employeeService.saveEmployee(employeeDetails);
    }
}
