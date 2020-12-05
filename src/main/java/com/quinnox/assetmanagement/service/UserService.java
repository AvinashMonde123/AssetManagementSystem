package com.quinnox.assetmanagement.service;

import java.util.List;

import com.quinnox.assetmanagement.entity.UserRegister;

public interface UserService {

	public boolean register(UserRegister userRegister);

	public List<UserRegister> getDetail();

	public boolean updateDetails(UserRegister userRegister);
	
}
