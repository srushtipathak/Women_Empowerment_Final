package com.lti.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lti.model.SukanyaAccount;
import com.lti.model.User;
import com.lti.service.SukanyaAccountService;
import com.lti.service.UserService;

@RestController
@RequestMapping("/sukanyaAccount")
@CrossOrigin("http://localhost:4200")
public class SukanyaAccountController {
	@Autowired
	private SukanyaAccountService sukanyaAccService;
	
	@Autowired
	private UserService userService;

	@PostMapping("/insertAccount")
	public SukanyaAccount insertAccountDetails(@RequestBody SukanyaAccount account) {
		User user = userService.getUserByUserId(account.getUser().getUserId());
		SukanyaAccount sukanyaAccount = new SukanyaAccount();
		sukanyaAccount.setAccountNumber(account.getAccountNumber());
		sukanyaAccount.setAccountType(account.getAccountType());
		sukanyaAccount.setBalance(account.getBalance());
		sukanyaAccount.setRegistrationDate(new Date());
		sukanyaAccount.setUser(user);
		return sukanyaAccService.insertAccountDetails(sukanyaAccount);
	}

	@GetMapping("/getAccount/{userId}")
	public SukanyaAccount getSukanyaAccountByUser_UserId(@PathVariable int userId) throws Exception {
		SukanyaAccount account = sukanyaAccService.getSukanyaAccountByUser_UserId(userId);
		if (account == null)
			throw new Exception("Bad Credentials");
		return account;

	}
}
