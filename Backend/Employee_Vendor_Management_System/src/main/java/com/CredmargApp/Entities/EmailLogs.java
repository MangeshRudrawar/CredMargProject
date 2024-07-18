package com.CredmargApp.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class EmailLogs {
	
	@Id
	@GeneratedValue
	private long id;
	private String receiver;
    private String subject;
    private String body;
    
    public EmailLogs() {
		// TODO Auto-generated constructor stub
	}

	public EmailLogs(String receiver, String subject, String body) {
		super();
		this.receiver = receiver;
		this.subject = subject;
		this.body = body;
	}


	public String getReceiver() {
		return receiver;
	}

	public void setReceiver(String receiver) {
		this.receiver = receiver;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	@Override
	public String toString() {
		return "EmailLogs [id=" + id + ", receiver=" + receiver + ", subject=" + subject + ", body=" + body + "]";
	}
    
    

}
