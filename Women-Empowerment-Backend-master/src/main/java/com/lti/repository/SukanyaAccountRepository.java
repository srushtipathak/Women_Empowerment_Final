package com.lti.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lti.model.SukanyaAccount;

public interface SukanyaAccountRepository extends JpaRepository<SukanyaAccount, Integer> {
	public SukanyaAccount findByUser_UserId(int userId);
}
