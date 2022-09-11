package com.fiu.controller;

import com.fiu.models.AdminDetails;
import com.fiu.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class AdminController {
    @Autowired
    private AdminService adminService;

    @PostMapping("/addAdmin")
    public String addAdmin(@RequestBody AdminDetails adminDetails) {
        return adminService.addAdmin(adminDetails);
    }

}
