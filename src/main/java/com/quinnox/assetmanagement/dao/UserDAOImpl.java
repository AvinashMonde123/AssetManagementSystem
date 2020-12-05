package com.quinnox.assetmanagement.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.quinnox.assetmanagement.entity.UserRegister;

@Repository
public class UserDAOImpl implements UserDAO {

	@Autowired
	EntityManager entityManager;

	@Override
	@Transactional
	public boolean register(UserRegister userRegister) {
		UserRegister userRegister2 = new UserRegister();
		BeanUtils.copyProperties(userRegister, userRegister2);
		entityManager.persist(userRegister2);
		return true;
	}

	@Override
	@Transactional
	public List<UserRegister> getDetail() {
		TypedQuery<UserRegister> user = entityManager.createQuery("FROM UserRegister", UserRegister.class);
		return user.getResultList();
	}

	@Override
	@Transactional
	public boolean updateDetails(UserRegister userRegister) {
		UserRegister userRegister2 = entityManager.find(UserRegister.class, userRegister.getId());	
		BeanUtils.copyProperties(userRegister, userRegister2);
		return true;
	}

}
