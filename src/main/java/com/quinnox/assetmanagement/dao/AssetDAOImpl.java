package com.quinnox.assetmanagement.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.quinnox.assetmanagement.entity.Assets;
import com.quinnox.assetmanagement.entity.UserAssets;

@Repository
public class AssetDAOImpl implements AssetDAO {

	@Autowired
	EntityManager entityManager;

	@Override
	@Transactional
	public boolean addAsset(UserAssets userAssets) {
		UserAssets useAssets1 = new UserAssets();
		BeanUtils.copyProperties(userAssets, useAssets1);
		entityManager.persist(useAssets1);
		return true;
	}

	@Override
	@Transactional
	public List<Assets> getAssets() {
		TypedQuery<Assets> asset = entityManager.createQuery("FROM Assets", Assets.class);
		return asset.getResultList();
	}

	@Override
	@Transactional
	public List<UserAssets> getUserAssets() {
		TypedQuery<UserAssets> asset = entityManager.createQuery("FROM UserAssets", UserAssets.class);
		return asset.getResultList();
	}

	@Override
	@Transactional
	public boolean deleteAsset(int id) {
		Assets asset = entityManager.find(Assets.class, id);
		entityManager.remove(asset);
		return true;
	}

	@Override
	@Transactional
	public boolean updateAsset(Assets assets) {
		Assets assets1 = entityManager.find(Assets.class, assets.getId());
		BeanUtils.copyProperties(assets, assets1);
		return true;
	}

	@Override
	@Transactional
	public boolean addAdminAsset(Assets assets) {
		Assets assets2= new Assets();
		BeanUtils.copyProperties(assets, assets2);
		entityManager.persist(assets2);
		return true;
	}

//	@Override
//	@Transactional
//	public boolean deleteUserAsset(int userId) {
//		UserAssets assets = entityManager.find(Assets.class, userId);
//		entityManager.remove(assets);
//		return true;
//	}

}
