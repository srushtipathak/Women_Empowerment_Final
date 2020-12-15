package com.lti.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.model.SukanyaAccount;
import com.lti.repository.SukanyaAccountRepository;

@Service
@Transactional
public class SukanyaAccountService {

	@Autowired
	private SukanyaAccountRepository sukanyaAccountRepository;

	public SukanyaAccount insertAccountDetails(SukanyaAccount account) {
		return sukanyaAccountRepository.save(account);
	}

	public SukanyaAccount getSukanyaAccountByUser_UserId(int userId) {
		return sukanyaAccountRepository.findByUser_UserId(userId);
	}

}
