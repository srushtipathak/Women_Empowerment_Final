package com.lti.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name = "accomodation_user")
public class AccomodationUser {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int userHostelId;

	@ManyToOne
	@JoinColumn(name = "userId")
	private User user;

	@ManyToOne
	@JoinColumn(name = "hostelId")
	private Hostel hostel;

	private String quota;
	private String jobType;

	public AccomodationUser() {
	}

	public int getUserHostelId() {
		return userHostelId;
	}

	public void setUserHostelId(int userHostelId) {
		this.userHostelId = userHostelId;
	}

	@Transient
	public User getUser() {
		return user;
	}

	@Transient
	public void setUser(User user) {
		this.user = user;
	}

	@Transient
	public Hostel getHostel() {
		return hostel;
	}

	@Transient
	public void setHostel(Hostel hostel) {
		this.hostel = hostel;
	}

	public String getQuota() {
		return quota;
	}

	public void setQuota(String quota) {
		this.quota = quota;
	}

	public String getJobType() {
		return jobType;
	}

	public void setJobType(String jobType) {
		this.jobType = jobType;
	}

	@Override
	public String toString() {
		return "AccomodationUser [userHostelId=" + userHostelId + ", user=" + user + ", hostel=" + hostel + ", quota="
				+ quota + ", jobType=" + jobType + "]";
	}

	public AccomodationUser(int userHostelId, User user, Hostel hostel, String quota, String jobType) {
		this.userHostelId = userHostelId;
		this.user = user;
		this.hostel = hostel;
		this.quota = quota;
		this.jobType = jobType;
	}

}