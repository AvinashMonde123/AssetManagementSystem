package com.quinnox.assetmanagement.service;

import java.util.List;

import com.quinnox.assetmanagement.entity.Assets;
import com.quinnox.assetmanagement.entity.UserAssets;

public interface AssetService {
	
	public List<UserAssets> getUserAssets();
	
	public List<Assets> getAssets();

	public boolean addAsset(UserAssets userAsset);
	
	public boolean deleteAsset(int id);
	
	public boolean updateAsset(Assets assets);
	
//	public boolean deleteUserAsset(int userId);
	
	public boolean addAdminAsset(Assets assets);
	
}
