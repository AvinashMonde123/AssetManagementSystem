package com.quinnox.assetmanagement.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quinnox.assetmanagement.dao.LoginDAO;
import com.quinnox.assetmanagement.entity.UserRegister;

@Service
public class LoginServiceImpl implements LoginService {

	@Autowired
	LoginDAO dao;
	
	@Override
	public UserRegister userLogin(String email, String password) {
		return dao.userLogin(email, password);
	}

}
