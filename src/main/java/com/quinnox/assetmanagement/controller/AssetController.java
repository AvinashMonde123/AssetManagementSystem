package com.quinnox.assetmanagement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.quinnox.assetmanagement.entity.Assets;
import com.quinnox.assetmanagement.entity.UserAssets;
import com.quinnox.assetmanagement.service.AssetService;

@CrossOrigin(origins = "*",allowedHeaders = "*")
@RestController
public class AssetController {
	
	@Autowired
	AssetService service;

	@GetMapping("/assets")
	public ResponseData getAssets() {
		ResponseData response = new ResponseData();
		response.setMessage("Assets displayed successfully");
		response.setData(service.getAssets());
		return response;
	}
	
	@PostMapping("/asset")
	public ResponseData addAsset(@RequestBody UserAssets userAssets) {
		service.addAsset(userAssets);
		ResponseData response = new ResponseData();
		response.setMessage("Asset added successfully");
		return response;
	}
	
	@GetMapping("/userassets")
	public ResponseData getUserAssets() {
		ResponseData response = new ResponseData();
		response.setMessage("User Assets displayed successfully");
		response.setData(service.getUserAssets());
		return response;
	}

	@DeleteMapping("/delete")
	public ResponseData deleteAsset(int id) {
		service.deleteAsset(id);
		ResponseData response = new ResponseData();
		response.setMessage("deleted asset successfully");
		return response;
	}
	
	@PutMapping("/updating")
	public ResponseData updateAsset(@RequestBody Assets assets) {
		service.updateAsset(assets);
		ResponseData response = new ResponseData();
		response.setMessage(" asset updated successfully");
		return response;
	}
	
//	@DeleteMapping("/deleteuserasset")
//	public ResponseData deleteUserAsset(int userId) {
//		service.deleteUserAsset(userId);
//		ResponseData response = new ResponseData();
//		response.setMessage("delete asset successfully");
//		return response;
//	}
	
	
	@PostMapping("/adminAsset")
	public ResponseData addAdminAsset(@RequestBody Assets assets) {
		service.addAdminAsset(assets);
		ResponseData response = new ResponseData();
		response.setMessage("Admin Asset added successfully");
		return response;
	}
	
}
