package com.fiu.service;

import com.fiu.models.UserDetails;
import com.fiu.models.WorkerDetails;
import com.fiu.repository.WorkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WorkerService {
    @Autowired
    private WorkerRepository workerRepository;

    public String saveWorker(WorkerDetails workerDetails) {
        workerRepository.save(workerDetails);
        return "Worker added successfully.";
    }
}
