package com.fiu.controller;

import com.fiu.models.WorkerDetails;
import com.fiu.service.WorkerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class WorkerController {

    @Autowired
    private WorkerService workerService;

    @PostMapping("/addWorker")
    public String addWorker(@RequestBody WorkerDetails workerDetails) {
        return workerService.saveWorker(workerDetails);
    }
}
