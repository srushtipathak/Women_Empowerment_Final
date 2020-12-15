package com.lti.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class SukanyaAccount {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int accountId;

	@Column(name = "AccountType")
	private String accountType;
	@Column(name = "AccountNumber")
	private String accountNumber;
	@Column(name = "Balance")
	private double balance;
	@Column(name = "Registration_date")
	@Temporal(TemporalType.DATE)
	private Date registrationDate;
	@OneToOne
	private User user;

	public SukanyaAccount() {
		super();
	}

	public int getAccountId() {
		return accountId;
	}

	public void setAccountId(int accountId) {
		this.accountId = accountId;
	}

	public String getAccountType() {
		return accountType;
	}

	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}

	public String getAccountNumber() {
		return accountNumber;
	}

	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}

	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}

	public Date getRegistrationDate() {
		return registrationDate;
	}

	public void setRegistrationDate(Date registrationDate) {
		this.registrationDate = registrationDate;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "SukanyaAccount [AccountId=" + accountId + ", accountType=" + accountType + ", accountNumber="
				+ accountNumber + ", balance=" + balance + ", registrationDate=" + registrationDate + ", user=" + user
				+ "]";
	}

	public SukanyaAccount(int accountId, String accountType, String accountNumber, double balance,
			Date registrationDate, User user) {
		this.accountId = accountId;
		this.accountType = accountType;
		this.accountNumber = accountNumber;
		this.balance = balance;
		this.registrationDate = registrationDate;
		this.user = user;
	}

}
