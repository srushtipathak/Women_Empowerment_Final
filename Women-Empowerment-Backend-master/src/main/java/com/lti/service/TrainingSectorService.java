package com.lti.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.model.TrainingSector;
import com.lti.repository.TrainingSectorRepository;

@Service
@Transactional
public class TrainingSectorService {

	@Autowired
	private TrainingSectorRepository trainingSectorRepository;

	public TrainingSector registerTrainingSector(TrainingSector sector) {
		return trainingSectorRepository.save(sector);
	}

	public TrainingSector getTrainingSectorById(int id) {
		return trainingSectorRepository.findById(id).get();
	}
	
	public TrainingSector getTrainingSectorByName(String sectorName) {
		return trainingSectorRepository.findBySectorName(sectorName);
	}
}