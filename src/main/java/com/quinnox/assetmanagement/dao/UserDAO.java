package com.quinnox.assetmanagement.dao;

import java.util.List;

import com.quinnox.assetmanagement.entity.UserRegister;

public interface UserDAO{

	public boolean register(UserRegister userRegister);

	public List<UserRegister> getDetail();

	public boolean updateDetails(UserRegister userRegister);
	
}
