package com.lti.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lti.model.TrainingSector;

public interface TrainingSectorRepository extends JpaRepository<TrainingSector, Integer> {
	public TrainingSector findBySectorName(String sectorName);
}