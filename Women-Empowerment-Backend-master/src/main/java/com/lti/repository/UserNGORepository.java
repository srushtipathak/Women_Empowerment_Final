package com.lti.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lti.model.UserNGO;

public interface UserNGORepository extends JpaRepository<UserNGO, Integer> {
	public List<UserNGO> findByPrimaryKey_User_UserId(int userId);
	public void deleteByPrimaryKey_User_UserId(int userId);
}
