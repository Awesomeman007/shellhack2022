package com.fiu.repository;

import com.fiu.models.AdminDetails;
import org.springframework.data.repository.CrudRepository;

public interface AdminRepository extends CrudRepository<AdminDetails, Integer> {
}
