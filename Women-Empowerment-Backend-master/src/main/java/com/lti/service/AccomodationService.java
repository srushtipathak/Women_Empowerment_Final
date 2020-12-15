package com.lti.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.model.AccomodationUser;
import com.lti.repository.AccomodationRepository;

@Service
@Transactional
public class AccomodationService {

	@Autowired
	private AccomodationRepository accRepository;

	public AccomodationUser saveUser(AccomodationUser accouser) {
		return accRepository.save(accouser);
	}

	public AccomodationUser getAccomodationById(int userHostelId) {
		return accRepository.findById(userHostelId).get();
	}
	
	public AccomodationUser getAccomodationByUserId(int userId) {
		return accRepository.findByUser_UserId(userId);
	}
}
