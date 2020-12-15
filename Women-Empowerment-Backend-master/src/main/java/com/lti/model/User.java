package com.lti.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "Users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int userId;
	private Name userName;
	private String userEmailId;
	private String userPassword;
	private String userContactNumber;
	@Temporal(TemporalType.DATE)
	private Date userDOB;
	private Address userAddress;
	@Column(nullable = true)
	private long userAadhar;
	// Father's Details
	private Family family;
	// Courses
	@OneToMany(mappedBy = "primaryKey.user", cascade = CascadeType.ALL)
	private List<UserNGO> sectors = new ArrayList<UserNGO>();

	public User() {
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public Name getUserName() {
		return userName;
	}

	public void setUserName(Name userName) {
		this.userName = userName;
	}

	public String getUserEmailId() {
		return userEmailId;
	}

	public void setUserEmailId(String userEmailId) {
		this.userEmailId = userEmailId;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public String getUserContactNumber() {
		return userContactNumber;
	}

	public void setUserContactNumber(String userContactNumber) {
		this.userContactNumber = userContactNumber;
	}

	public Date getUserDOB() {
		return userDOB;
	}

	public void setUserDOB(Date userDOB) {
		this.userDOB = userDOB;
	}

	public Address getUserAddress() {
		return userAddress;
	}

	public void setUserAddress(Address userAddress) {
		this.userAddress = userAddress;
	}

	public long getUserAadhar() {
		return userAadhar;
	}

	public void setUserAadhar(long userAadhar) {
		this.userAadhar = userAadhar;
	}

	public Family getFamily() {
		return family;
	}

	public void setFamily(Family family) {
		this.family = family;
	}

	public void setSectors(List<UserNGO> sectors) {
		this.sectors = sectors;
	}

	public void addUserSector(UserNGO userSector) {
		this.sectors.add(userSector);
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", userName=" + userName + ", userEmailId=" + userEmailId + ", userPassword="
				+ userPassword + ", userContactNumber=" + userContactNumber + ", userDOB=" + userDOB + ", userAddress="
				+ userAddress + ", userAadhar=" + userAadhar + ", family=" + family + ", sectors=" + sectors;
	}
}
