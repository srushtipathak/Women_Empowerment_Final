package com.lti.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.model.Hostel;
import com.lti.repository.HostelRepository;

@Service
@Transactional
public class HostelService {

	@Autowired
	private HostelRepository hostelRepository;

	public Hostel saveUser(Hostel hostel) {
		return hostelRepository.save(hostel);
	}

	public Hostel getHostelById(int hostelId) {
		return hostelRepository.findById(hostelId).get();
	}

}
