package com.CredmargApp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.CredmargApp.Entities.EmailLogs;
import com.CredmargApp.Entities.Vendor;
import com.CredmargApp.services.VendorService;

@RestController
@RequestMapping("/vendor")
@CrossOrigin(origins = "http://localhost:3000")
public class VendorController {
	
	@Autowired
	private VendorService vendorService;
	
	
	@PostMapping("/create")
	public Vendor createVendor(@RequestBody Vendor vendor) {
		return vendorService.saveVendor(vendor);
		
	}
	
	@GetMapping("/fetch")
	public List<Vendor>findAllVendors(){
		return vendorService.getVendors();
	}
	
	@PostMapping("/email")
	public ResponseEntity<String> sendEmailToVendors(@RequestBody List<Vendor> vendors,@RequestParam Long Id) {
        vendorService.sendEmailToVendors(vendors, Id);
		return new ResponseEntity("email sent", HttpStatus.ACCEPTED);
    }
	@GetMapping("/getemails")
	public List<EmailLogs>getEmails(){
		return vendorService.getEmails();
	}
	

}
