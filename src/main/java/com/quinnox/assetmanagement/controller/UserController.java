package com.quinnox.assetmanagement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.quinnox.assetmanagement.entity.UserRegister;
import com.quinnox.assetmanagement.service.UserService;

@CrossOrigin(origins = "*",allowedHeaders = "*")
@RestController
public class UserController {

	@Autowired
	UserService service;

	@PostMapping("/register")
	public ResponseData register(@RequestBody UserRegister userRegister) {
		userRegister.setType("customer");
		System.out.println(userRegister);
		service.register(userRegister);
		ResponseData response = new ResponseData();
		response.setMessage("Register successfully");
		return response;

	}

	@GetMapping("/detail")
	public ResponseData getDetail() {

		ResponseData response = new ResponseData();
		response.setMessage("User details dispalyed");
		response.setData(service.getDetail());
		return response;

	}

	@PutMapping("/update")
	public ResponseData updateDetails(@RequestBody UserRegister userRegister) {
		userRegister.setType("customer");
		service.updateDetails(userRegister);
		ResponseData response = new ResponseData();
		response.setMessage("User details updated");
		response.setData(service.updateDetails(userRegister));
		return response;

	}

}
