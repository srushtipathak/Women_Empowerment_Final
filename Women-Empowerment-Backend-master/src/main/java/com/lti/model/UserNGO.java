package com.lti.model;

import java.util.Date;

import javax.persistence.AssociationOverride;
import javax.persistence.AssociationOverrides;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

@Entity
@Table(name = "UserNGO")
@AssociationOverrides({ @AssociationOverride(name = "primaryKey.user", joinColumns = @JoinColumn(name = "userId")),
		@AssociationOverride(name = "primaryKey.ngo", joinColumns = @JoinColumn(name = "ngoId")) })
public class UserNGO {

	@EmbeddedId
	private UserNGOId primaryKey;
	// Additional Fields
	private boolean status;
	@Temporal(TemporalType.DATE)
	@Column(name = "AppliedDate")
	private Date appliedAt;

	public UserNGO() {

	}

	public UserNGOId getPrimaryKey() {
		return primaryKey;
	}

	public void setPrimaryKey(UserNGOId primaryKey) {
		this.primaryKey = primaryKey;
	}

	@Transient
	public User getUser() {
		return getPrimaryKey().getUser();
	}

	public void setUser(User user) {
		getPrimaryKey().setUser(user);
	}

	@Transient
	public NGO getNgo() {
		return getPrimaryKey().getNgo();
	}

	public void setNgo(NGO ngo) {
		getPrimaryKey().setNgo(ngo);
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public Date getAppliedAt() {
		return appliedAt;
	}

	public void setAppliedAt(Date appliedAt) {
		this.appliedAt = appliedAt;
	}

}
