package com.lti.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.model.NGO;
import com.lti.repository.NGORepository;

@Service
@Transactional
public class NGOService {

	@Autowired
	private NGORepository ngoRepository;

	// insert a record
	public NGO registerNGO(NGO ngo) {
		return ngoRepository.save(ngo);
	}

	public NGO getNgoById(int ngoId) {
		return ngoRepository.findById(ngoId).get();
	}

	// retrieve all records
	public List<NGO> getAllNgo() {
		List<NGO> ngos = ngoRepository.findAll();
		return ngos;
	}

	// delete a record
	public void deleteById(int ngoId) {
		ngoRepository.deleteById(ngoId);
	}

	public NGO updateNgo(NGO newngo) {
//		NGO ngodb = ngoRepository.findById(newngo.getNgoId()).get();
//		if (ngodb!=null) {
//			ngodb.setEndDate(newngo.getEndDate());
//			ngodb.setNgoAddress(newngo.getNgoAddress());
//			ngodb.setNgoContactNumber(newngo.getNgoContactNumber());
//			ngodb.setNgoDescription(newngo.getNgoDescription());
//			ngodb.setNgoEmailId(newngo.getNgoEmailId());
//			ngodb.setNgoName(newngo.getNgoName());
//			ngodb.setNgoPassword(newngo.getNgoPassword());
//			ngodb.setSector(newngo.getSector());
//			ngodb.setStartDate(newngo.getStartDate());
//			ngodb.setStatus(newngo.isStatus());
//			ngodb.setTrainingSeats(newngo.getTrainingSeats());
//			return ngodb;
//		} else {
//			throw new RecordNotFoundException("Record not found with id : " + newngo.getNgoId());
//		}
		return ngoRepository.save(newngo);
	}

	public List<NGO> getNgoBySectorId(int sectorId) {
		return ngoRepository.findBySector_SectorId(sectorId);
	}

	public List<NGO> getApprovedNgo() {
		return ngoRepository.findByStatus(true);
	}

	public NGO login(String email, String password) {
		return ngoRepository.findByNgoEmailIdAndNgoPassword(email, password);
	}
}
