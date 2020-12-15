package com.lti.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lti.model.NGO;
import com.lti.model.User;
import com.lti.model.UserNGO;
import com.lti.model.UserNGOId;
import com.lti.service.NGOService;
import com.lti.service.UserNGOService;
import com.lti.service.UserService;

@RestController
@RequestMapping("/userngo")
@CrossOrigin("http://localhost:4200")
public class UserNGOController {

	@Autowired
	private UserNGOService userNGOService;
	@Autowired
	private UserService userService;
	@Autowired
	private NGOService ngoService;

	@PostMapping("/registerUser")
	public UserNGO registerUser(@RequestBody UserNGO user) {
		NGO n = ngoService.getNgoById(user.getPrimaryKey().getNgo().getNgoId());
		User u = userService.getUserByUserId(user.getPrimaryKey().getUser().getUserId());
		UserNGOId uid = new UserNGOId(u, n);
		System.out.println(u);
		System.out.println(n);
		UserNGO user1 = new UserNGO();
		user1.setAppliedAt(new Date());
		user1.setStatus(user.isStatus());
		user1.setPrimaryKey(uid);
		UserNGO temp = userNGOService.registerUser(user1);
		temp.setUser(u);
		temp.setNgo(n);
		return temp;
	}

	@GetMapping("/getTrainees")
	public List<UserNGO> getAllAppliedUser() {
		return userNGOService.getAllAppliedUser();
	}

	@DeleteMapping("/deleteUser")
	public void deleteUser(@RequestBody UserNGO duser) {
		userNGOService.delete(duser);
	}

	@PutMapping("/updateUser")
	public UserNGO updateUser(@RequestBody UserNGO newuser) {
		System.out.println(newuser.getPrimaryKey().getUser().getUserId());
		return userNGOService.updateUserNgo(newuser);
	}

	@GetMapping("/trainee/{userId}")
	public UserNGO getTrainee(@PathVariable int userId) {
		return userNGOService.getTrainee(userId).get(0);
	}

	@DeleteMapping("/deleteUser/{userId}")
	public void deleteByPrimaryKey_User_UserId(@PathVariable("userId") int userId) {
		userNGOService.deleteByPrimaryKey_User_UserId(userId);
	}

}
