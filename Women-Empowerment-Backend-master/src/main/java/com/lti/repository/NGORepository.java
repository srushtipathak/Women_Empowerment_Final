package com.lti.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lti.model.NGO;

public interface NGORepository extends JpaRepository<NGO, Integer> {
	public List<NGO> findBySector_SectorId(int sectorId);
	public List<NGO> findByStatus(boolean status);
//	@Query("SELECT n FROM NGO n WHERE n.ngoEmailId = ?1 and n.ngoPassword = ?2")
	public NGO findByNgoEmailIdAndNgoPassword(String ngoEmailId, String ngoPassword);
}
