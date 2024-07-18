package com.CredmargApp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.CredmargApp.Entities.EmailLogs;
import com.CredmargApp.Entities.Vendor;
import com.CredmargApp.repositories.AdminRepository;
import com.CredmargApp.repositories.EmailLogsRepository;
import com.CredmargApp.repositories.VendorRepository;

@Service
public class VendorServiceImplementation implements VendorService {
	
	@Autowired
	private VendorRepository vendorRepository;
	
	@Autowired
	private AdminRepository adminRepository;
	
	@Autowired
    private EmailLogsRepository emailLogsRepository;

	@Override
	public Vendor saveVendor(Vendor vendor) {
		
		return vendorRepository.save(vendor);
	}

	@Override
	public List<Vendor> getVendors() {
		
		return vendorRepository.findAll();
	}


	@Override
	public void sendEmailToVendors(List<Vendor> vendors, Long Id) {
		
		adminRepository.findById(Id).orElseThrow(() -> new RuntimeException("Invalid Id"));
		
		// if admin is found then send email for each vendor provided
		vendors.forEach(vendor -> {
            String message = String.format("Sending payments to vendor %s at upi %s", vendor.getName(), vendor.getUpi_Id());
            mockEmail(vendor.getEmail(), "Payment Notification", message);
            
            EmailLogs emailLog = new EmailLogs(vendor.getEmail(), "Payment Notification", message);
            emailLogsRepository.save(emailLog);
        });
    }

    private void mockEmail(String to, String subject, String body) {
    	System.out.println("--------------------------------------------");
        System.out.println("To: " + to);
        System.out.println("Subject: " + subject);
        System.out.println("Body: " + body);
        
    }

	@Override
	public List<EmailLogs> getEmails() {
	
		return emailLogsRepository.findAll();
	}
		

}
