package com.quinnox.assetmanagement.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.quinnox.assetmanagement.entity.UserRegister;

@Repository
public interface LoginDAO extends JpaRepository<UserRegister, Integer>{

	@Query(value = "SELECT U FROM UserRegister U where U.email=?1 AND U.password=?2")
	public UserRegister userLogin(String email, String password);
	
}
