package com.lti.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.model.UserNGO;
import com.lti.repository.UserNGORepository;

@Service
@Transactional
public class UserNGOService {

	@Autowired
	private UserNGORepository userNgoRepository;

	// retrieve all records
	public List<UserNGO> getAllAppliedUser() {
		List<UserNGO> users = userNgoRepository.findAll();
		return users;
	}

	// insert a record
	public UserNGO registerUser(UserNGO user) {
		return userNgoRepository.save(user);
	}

	// delete a record
	public void delete(UserNGO newuser) {
		userNgoRepository.delete(newuser);
	}

	// update record
	public UserNGO updateUserNgo(UserNGO newuser) {
		return userNgoRepository.save(newuser);
	}

	public List<UserNGO> getTrainee(int userId) {
		return userNgoRepository.findByPrimaryKey_User_UserId(userId);
	}

	// delete by user id
	public void deleteByPrimaryKey_User_UserId(int userId) {
		userNgoRepository.deleteByPrimaryKey_User_UserId(userId);
	}

}
