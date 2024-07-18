package com.CredmargApp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.CredmargApp.Entities.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long>{
	
	//create a method to find admin by role update admin entity and add role 
	

}
