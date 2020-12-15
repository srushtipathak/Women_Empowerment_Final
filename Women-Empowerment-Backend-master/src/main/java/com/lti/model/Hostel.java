package com.lti.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name = "hostel")
public class Hostel {

	@Id
	private int hostelId;
	private String hostelName;
	private int seats;

	@OneToMany(mappedBy = "hostel", cascade = CascadeType.ALL)
	private List<AccomodationUser> accUsers = new ArrayList<>();

	public Hostel() {
	}

	public Hostel(int hostelId, String hostelName, int seats, List<AccomodationUser> accUsers) {
		this.hostelId = hostelId;
		this.hostelName = hostelName;
		this.seats = seats;
		this.accUsers = accUsers;
	}

	public int getHostelId() {
		return hostelId;
	}

	public void setHostelId(int hostelId) {
		this.hostelId = hostelId;
	}

	public String getHostelName() {
		return hostelName;
	}

	public void setHostelName(String hostelName) {
		this.hostelName = hostelName;
	}

	public int getSeats() {
		return seats;
	}

	public void setSeats(int seats) {
		this.seats = seats;
	}

//	@Transient
//	public List<AccomodationUser> getAccUsers() {
//		return accUsers;
//	}

	@Transient
	public void setAccUsers(List<AccomodationUser> accUsers) {
		this.accUsers = accUsers;
	}

	@Override
	public String toString() {
		return "Hostel [hostelId=" + hostelId + ", hostelName=" + hostelName + ", seats=" + seats + ", accUsers="
				+ accUsers + "]";
	}

}