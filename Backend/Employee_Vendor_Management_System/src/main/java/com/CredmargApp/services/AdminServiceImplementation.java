package com.CredmargApp.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.CredmargApp.Entities.Admin;
import com.CredmargApp.exceptions.AdminException;
import com.CredmargApp.repositories.AdminRepository;

@Service
public class AdminServiceImplementation implements AdminService{
	
	@Autowired
	private AdminRepository adminRepository;

	

	@Override
	public Admin saveAdmin(Admin admin) {
		
		return adminRepository.save(admin);
	}



	@Override
	public Admin findAdminById(Long Id) throws AdminException {
		
		Optional<Admin> user = adminRepository.findById(Id);
		if (user.isPresent()) {
			return user.get();
		}
		throw new AdminException("User not found");
	}

}
