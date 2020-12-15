package com.lti.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lti.model.AccomodationUser;
import com.lti.model.Hostel;
import com.lti.model.User;
import com.lti.service.AccomodationService;
import com.lti.service.HostelService;
import com.lti.service.UserService;

@RestController
@RequestMapping("/accomodation")
@CrossOrigin("http://localhost:4200")
public class AccomodationController {

	@Autowired
	public AccomodationService accoService;

	@Autowired
	public UserService userService;

	@Autowired
	public HostelService hostelService;

	@PostMapping("/registerUser")
	public User registerUser(@RequestBody User user) throws Exception {
		return userService.saveUser(user);
	}

	@PostMapping("/registerHostel")
	public Hostel registerHostel(@RequestBody Hostel hostel) throws Exception {
		return hostelService.saveUser(hostel);
	}

	@PostMapping("/registerAccomodation")
	public AccomodationUser registerAccomodation(@RequestBody AccomodationUser ac) throws Exception {

		// AccomodationUser ac = new AccomodationUser();
		Hostel h = hostelService.getHostelById(ac.getHostel().getHostelId());
		User u = userService.getUserByUserId(ac.getUser().getUserId());

		AccomodationUser ac1 = new AccomodationUser();
		ac1.setUser(u);
		ac1.setHostel(h);
		ac1.setQuota(ac.getQuota());
		ac1.setJobType(ac.getJobType());
		return accoService.saveUser(ac1);
	}

	@GetMapping("/getAccomodationDetails/{userHostelId}")
	public AccomodationUser getAccomodationDetails(@PathVariable int userHostelId) throws Exception {

		AccomodationUser tempAcco = null;
		tempAcco = accoService.getAccomodationById(userHostelId);
		if (tempAcco == null)
			throw new Exception("Bad Credentials");
		return tempAcco;
	}
	
	@GetMapping("/getAccomodationDetailsByUserId/{userId}")
	public AccomodationUser getAccomodationDetailsByUserId(@PathVariable int userId) throws Exception {
		AccomodationUser tempAcco = accoService.getAccomodationByUserId(userId);
		if (tempAcco == null)
			throw new Exception("Bad Credentials");
		return tempAcco;
	}

}
