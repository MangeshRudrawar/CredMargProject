package com.CredmargApp.services;

import java.util.List;

import com.CredmargApp.Entities.EmailLogs;
import com.CredmargApp.Entities.Vendor;

public interface VendorService {
	
	public Vendor saveVendor(Vendor vendor);
	
	public List<Vendor>getVendors();
	
	public void sendEmailToVendors(List<Vendor>vendors,Long Id);
	
	public List<EmailLogs>getEmails();

}
