package com.CredmargApp.services;

import java.util.List;

import com.CredmargApp.Entities.Employee;

public interface EmployeeService {
	Employee saveEmployee(Employee employee);
	
	List<Employee>getEmployees();

}
