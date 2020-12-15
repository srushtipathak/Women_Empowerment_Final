package com.lti.controller;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.lti.model.NGO;
import com.lti.model.TrainingSector;
import com.lti.service.NGOService;
import com.lti.service.TrainingSectorService;

@RestController
@RequestMapping("/ngo")
@CrossOrigin("http://localhost:4200")
public class NGOController {
	@Autowired
	private NGOService ngoService;

	@Autowired
	private TrainingSectorService trainingService;

	@PostMapping("/registerNgo")
	public NGO registerNGO(@RequestBody NGO ngo) {
		TrainingSector ts = trainingService.getTrainingSectorById(ngo.getSector().getSectorId());
		NGO ngo1 = new NGO();
		ngo1.setEndDate(ngo.getEndDate());
		ngo1.setNgoAddress(ngo.getNgoAddress());
		ngo1.setNgoContactNumber(ngo.getNgoContactNumber());
		ngo1.setNgoDescription(ngo.getNgoDescription());
		ngo1.setNgoEmailId(ngo.getNgoEmailId());
		ngo1.setNgoName(ngo.getNgoName());
		ngo1.setNgoPassword(ngo.getNgoPassword());
		ngo1.setSector(ts);
		ngo1.setStartDate(ngo.getStartDate());
		ngo1.setStatus(ngo.isStatus());
		ngo1.setTrainingSeats(ngo.getTrainingSeats());
		return ngoService.registerNGO(ngo1);
	}

	@PostMapping("/getNgo")
	public NGO getNgoByNgoId(@RequestBody NGO ngo) throws Exception {
		int ngoId = ngo.getNgoId();
		NGO tempNGO = null;
		tempNGO = ngoService.getNgoById(ngoId);
		if (tempNGO == null)
			throw new Exception("Bad Credentials");
		return tempNGO;
	}

	@GetMapping("/getNGO/{sectorName}")
	public List<NGO> getNGOBySector(@PathVariable("sectorName") String sectorName) {
		TrainingSector sector = trainingService.getTrainingSectorByName(sectorName);
		return ngoService.getNgoBySectorId(sector.getSectorId());
	}

	// get all ngos
	@GetMapping("/listNgo")
	public List<NGO> getAllNgo() {
		return ngoService.getAllNgo();
	}

	// delete ngo by id
	@DeleteMapping("/deleteNgo/{ngoId}")
	public void deleteById(@PathVariable("ngoId") int ngoId) {
		ngoService.deleteById(ngoId);
	}

	@PutMapping("/updateNgo")
	public NGO updateNgo(@RequestBody NGO ngo) {
		return ngoService.updateNgo(ngo);
	}

	@GetMapping("/approvedNgo")
	public List<NGO> getApprovedNgo() {
		return ngoService.getApprovedNgo();
	}

	@GetMapping("/ngologin")
	public NGO login(@RequestParam(value = "ngoEmailId") String ngoEmailId,
			@RequestParam(value = "ngoPassword") String ngoPassword) {
		return ngoService.login(ngoEmailId, ngoPassword);
	}

}
