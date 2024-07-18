package com.CredmargApp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.CredmargApp.Entities.Admin;
import com.CredmargApp.services.AdminService;


@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

	@Autowired
	private AdminService adminService;
	
	@PostMapping("/create")
	public Admin createAdmin(@RequestBody Admin admin) {
		return adminService.saveAdmin(admin);
	}
}
