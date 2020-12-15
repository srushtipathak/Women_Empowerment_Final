package com.lti.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lti.model.User;
import com.lti.service.UserService;

@RestController
@RequestMapping("/step")
@CrossOrigin("http://localhost:4200")
public class STEPController {

	@Autowired
	private UserService userService;

	@PostMapping("/userRegister")
	public User registerUser(@RequestBody User user) {
		String tempEmail = user.getUserEmailId();
		if (tempEmail != null && !"".equals(tempEmail)) {
			User tempUser = userService.getUserByEmail(tempEmail);
			if (tempUser != null)
				throw new RuntimeException("User Already Exist");
		}
		return userService.saveUser(user);
	}

	@PostMapping("/userLogin")
	public User loginUser(@RequestBody User user) {
		String emailId = user.getUserEmailId();
		String password = user.getUserPassword();
		User tempUser = null;
		if (emailId != null && password != null) {
			tempUser = userService.getUserByEmailAndPassword(emailId, password);
		}
		if (tempUser == null)
			throw new RuntimeException("Bad Credentials");
		return tempUser;
	}

	@PostMapping("/userUpdate")
	public User updateUser(@RequestBody User user) {
		int userId = user.getUserId();
		User userData = userService.getUserByUserId(userId);
		userData.setFamily(user.getFamily());
		userData.setUserAadhar(user.getUserAadhar());
		return userService.updateUser(userData);
	}

	@GetMapping("/getUser/{userId}")
	public User getUser(@PathVariable int userId) {
		User temp = userService.getUserByUserId(userId);
		temp.setSectors(null);
		return temp;
	}
}
