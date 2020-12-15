package com.lti.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class NGO {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int ngoId;
	private String ngoDescription;
	private String ngoName;
	private String ngoContactNumber;
	private Address ngoAddress;
	private String ngoEmailId;
	private String ngoPassword;
	@Temporal(TemporalType.DATE)
	private Date startDate;
	@Temporal(TemporalType.DATE)
	private Date endDate;
	private boolean status;
	private int trainingSeats;

	@OneToMany(mappedBy = "primaryKey.ngo", cascade = CascadeType.ALL)
	private List<UserNGO> users = new ArrayList<UserNGO>();

	@ManyToOne(cascade = CascadeType.ALL)
	private TrainingSector sector = new TrainingSector();

	public NGO() {

	}

	public void setUsers(List<UserNGO> users) {
		this.users = users;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public int getNgoId() {
		return ngoId;
	}

	public void setNgoId(int ngoId) {
		this.ngoId = ngoId;
	}

	public String getNgoDescription() {
		return ngoDescription;
	}

	public void setNgoDescription(String ngoDescription) {
		this.ngoDescription = ngoDescription;
	}

	public String getNgoName() {
		return ngoName;
	}

	public void setNgoName(String ngoName) {
		this.ngoName = ngoName;
	}

	public String getNgoContactNumber() {
		return ngoContactNumber;
	}

	public void setNgoContactNumber(String ngoContactNumber) {
		this.ngoContactNumber = ngoContactNumber;
	}

	public Address getNgoAddress() {
		return ngoAddress;
	}

	public void setNgoAddress(Address ngoAddress) {
		this.ngoAddress = ngoAddress;
	}

	public String getNgoEmailId() {
		return ngoEmailId;
	}

	public void setNgoEmailId(String ngoEmailId) {
		this.ngoEmailId = ngoEmailId;
	}

	public String getNgoPassword() {
		return ngoPassword;
	}

	public void setNgoPassword(String ngoPassword) {
		this.ngoPassword = ngoPassword;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public int getTrainingSeats() {
		return trainingSeats;
	}

	public void setTrainingSeats(int trainingSeats) {
		this.trainingSeats = trainingSeats;
	}

	public TrainingSector getSector() {
		return sector;
	}

	public void setSector(TrainingSector sector) {
		this.sector = sector;
	}

	public NGO(int ngoId, String ngoDescription, String ngoName, String ngoContactNumber, Address ngoAddress,
			String ngoEmailId, String ngoPassword, Date startDate, Date endDate, boolean status, int trainingSeats,
			List<UserNGO> users, TrainingSector sector) {
		this.ngoId = ngoId;
		this.ngoDescription = ngoDescription;
		this.ngoName = ngoName;
		this.ngoContactNumber = ngoContactNumber;
		this.ngoAddress = ngoAddress;
		this.ngoEmailId = ngoEmailId;
		this.ngoPassword = ngoPassword;
		this.startDate = startDate;
		this.endDate = endDate;
		this.status = status;
		this.trainingSeats = trainingSeats;
		this.users = users;
		this.sector = sector;
	}

	@Override
	public String toString() {
		return "NGO [ngoId=" + ngoId + ", ngoDescription=" + ngoDescription + ", ngoName=" + ngoName
				+ ", ngoContactNumber=" + ngoContactNumber + ", ngoAddress=" + ngoAddress + ", ngoEmailId=" + ngoEmailId
				+ ", ngoPassword=" + ngoPassword + ", startDate=" + startDate + ", endDate=" + endDate + ", status="
				+ status + ", trainingSeats=" + trainingSeats + ", sector=" + sector + "]";
	}

}
