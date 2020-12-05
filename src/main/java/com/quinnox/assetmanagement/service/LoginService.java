package com.quinnox.assetmanagement.service;

import com.quinnox.assetmanagement.entity.UserRegister;

public interface LoginService {

	public UserRegister userLogin(String email, String password);

}
