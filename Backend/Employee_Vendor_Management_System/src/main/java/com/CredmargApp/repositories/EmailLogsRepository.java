package com.CredmargApp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.CredmargApp.Entities.EmailLogs;

public interface EmailLogsRepository extends JpaRepository<EmailLogs,Long>{

}
