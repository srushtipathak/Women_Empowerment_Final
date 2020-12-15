package com.lti.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lti.model.Hostel;

public interface HostelRepository extends JpaRepository<Hostel, Integer> {
}