package com.lti.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.model.User;
import com.lti.repository.UserRepository;

@Service
@Transactional
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public User saveUser(User user) {
		return userRepository.save(user);
	}

	public User getUserByUserId(int userId) {
		return userRepository.findById(userId).get();
	}

	public User getUserByEmail(String emailId) {
		return userRepository.findByUserEmailId(emailId);
	}

	public User getUserByEmailAndPassword(String emailId, String password) {
		return userRepository.findByUserEmailIdAndUserPassword(emailId, password);
	}

	public User updateUser(User user) {
		return userRepository.save(user);
	}
}
