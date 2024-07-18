package com.CredmargApp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.CredmargApp.Entities.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, String>{
	

}
