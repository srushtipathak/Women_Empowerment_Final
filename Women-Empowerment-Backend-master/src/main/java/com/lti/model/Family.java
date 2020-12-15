package com.lti.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Embeddable
public class Family {

	@Column(nullable = true)
	private String fatherName;
	@Column(nullable = true)
	private String fatherPhoneNumber;
	@Column(nullable = true)
	@Temporal(TemporalType.DATE)
	private Date fatherDOB;
	@Column(nullable = true)
	private String fatherOccupation;
	@Column(nullable = true)
	private int fatherSalary;
	@Column(nullable = true)
	private String motherName;
	@Column(nullable = true)
	private String motherPhoneNumber;
	@Column(nullable = true)
	@Temporal(TemporalType.DATE)
	private Date motherDOB;
	@Column(nullable = true)
	private String motherOccupation;
	@Column(nullable = true)
	private int motherSalary;

	public Family() {

	}

	public String getFatherName() {
		return fatherName;
	}

	public void setFatherName(String fatherName) {
		this.fatherName = fatherName;
	}

	public String getFatherPhoneNumber() {
		return fatherPhoneNumber;
	}

	public void setFatherPhoneNumber(String fatherPhoneNumber) {
		this.fatherPhoneNumber = fatherPhoneNumber;
	}

	public Date getFatherDOB() {
		return fatherDOB;
	}

	public void setFatherDOB(Date fatherDOB) {
		this.fatherDOB = fatherDOB;
	}

	public String getFatherOccupation() {
		return fatherOccupation;
	}

	public void setFatherOccupation(String fatherOccupation) {
		this.fatherOccupation = fatherOccupation;
	}

	public int getFatherSalary() {
		return fatherSalary;
	}

	public void setFatherSalary(int fatherSalary) {
		this.fatherSalary = fatherSalary;
	}

	public String getMotherName() {
		return motherName;
	}

	public void setMotherName(String motherName) {
		this.motherName = motherName;
	}

	public String getMotherPhoneNumber() {
		return motherPhoneNumber;
	}

	public void setMotherPhoneNumber(String motherPhoneNumber) {
		this.motherPhoneNumber = motherPhoneNumber;
	}

	public Date getMotherDOB() {
		return motherDOB;
	}

	public void setMotherDOB(Date motherDOB) {
		this.motherDOB = motherDOB;
	}

	public String getMotherOccupation() {
		return motherOccupation;
	}

	public void setMotherOccupation(String motherOccupation) {
		this.motherOccupation = motherOccupation;
	}

	public int getMotherSalary() {
		return motherSalary;
	}

	public void setMotherSalary(int motherSalary) {
		this.motherSalary = motherSalary;
	}

}
