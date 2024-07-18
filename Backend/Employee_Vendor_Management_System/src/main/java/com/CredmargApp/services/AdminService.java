package com.CredmargApp.services;


import com.CredmargApp.Entities.Admin;
import com.CredmargApp.exceptions.AdminException;

public interface AdminService {
	
	public Admin saveAdmin(Admin admin);
	public Admin findAdminById(Long Id)throws AdminException;

}
