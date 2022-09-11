package com.fiu.repository;

import com.fiu.models.EmployeeDetails;
import org.springframework.data.repository.CrudRepository;

public interface EmployerRepository extends CrudRepository<EmployeeDetails, Integer> {
}
