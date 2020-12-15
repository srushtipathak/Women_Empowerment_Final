package com.lti.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lti.model.TrainingSector;
import com.lti.service.TrainingSectorService;

@RestController
@RequestMapping("/step")
@CrossOrigin("http://localhost:4200")
public class TrainingSectorController {
	
	@Autowired
	private TrainingSectorService trainingSectorService;
	
	@PostMapping("/registerTrainingSector")
	public TrainingSector registerTrainingSector(@RequestBody TrainingSector sector) {
		return trainingSectorService.registerTrainingSector(sector);	
	}
}
