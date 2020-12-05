package com.quinnox.assetmanagement.dao;

import java.util.List;

import com.quinnox.assetmanagement.entity.Assets;
import com.quinnox.assetmanagement.entity.UserAssets;

public interface AssetDAO {

	public List<UserAssets> getUserAssets();
	
	public List<Assets> getAssets();

	public boolean addAsset(UserAssets userAsset);
	
	public boolean deleteAsset(int id);
	
	public boolean updateAsset(Assets assets);
	
//	public boolean deleteUserAsset(int userId);
	
	public boolean addAdminAsset(Assets assets);
	
}

