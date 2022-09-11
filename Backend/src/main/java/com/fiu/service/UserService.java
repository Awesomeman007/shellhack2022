package com.fiu.service;

import com.fiu.models.UserDetails;
import com.fiu.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public String saveUser(UserDetails userDetails) {
        userRepository.save(userDetails);
        return "User added successfully.";
    }

}
