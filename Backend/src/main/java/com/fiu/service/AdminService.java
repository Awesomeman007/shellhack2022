package com.fiu.service;

import com.fiu.models.AdminDetails;
import com.fiu.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;

    public String addAdmin(AdminDetails adminDetails) {
        adminRepository.save(adminDetails);
        return "Successful.";
    }
}
