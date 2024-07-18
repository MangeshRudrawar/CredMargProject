package com.CredmargApp.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Vendor {
	@Id
	private String email;
	private String name;
	private String upi_Id;
	
	public Vendor() {
		// TODO Auto-generated constructor stub
	}

	public Vendor(String email, String name, String upi_Id) {
		super();
		this.email = email;
		this.name = name;
		this.upi_Id = upi_Id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUpi_Id() {
		return upi_Id;
	}

	public void setUpi_Id(String upi_Id) {
		this.upi_Id = upi_Id;
	}

	@Override
	public String toString() {
		return "Vendor [email=" + email + ", name=" + name + ", upi_Id=" + upi_Id + "]";
	}
	
	
	

}
