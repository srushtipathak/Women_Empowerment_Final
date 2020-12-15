package com.lti.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lti.model.AccomodationUser;

public interface AccomodationRepository extends JpaRepository<AccomodationUser, Integer>{
	public AccomodationUser findByUser_UserId(int userId);
}
