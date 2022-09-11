package com.fiu.repository;

import com.fiu.models.WorkerDetails;
import org.springframework.data.repository.CrudRepository;

public interface WorkerRepository extends CrudRepository<WorkerDetails, Integer> {
}
