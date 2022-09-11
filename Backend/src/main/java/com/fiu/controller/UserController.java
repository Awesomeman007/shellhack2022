package com.fiu.controller;

import com.fiu.models.UserDetails;
import com.fiu.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/hello")
    public String sayHello(@RequestParam(value = "myName", defaultValue = "Srimant!!") String name) {
        return String.format("Hello %s!", name);
    }

    @PostMapping("/addUser")
    public String addUser(@RequestBody UserDetails userDetails) {
        return userService.saveUser(userDetails);
    }

}
