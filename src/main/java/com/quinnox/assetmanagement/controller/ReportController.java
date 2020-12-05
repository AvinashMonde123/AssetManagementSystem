package com.quinnox.assetmanagement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.quinnox.assetmanagement.entity.Reports;
import com.quinnox.assetmanagement.service.ReportServiceImpl;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class ReportController {

	@Autowired
	ReportServiceImpl service;

	@PostMapping("/report")
	public ResponseData addReport(@RequestBody Reports reports) {
		service.addReport(reports);
		ResponseData response = new ResponseData();
		response.setMessage("Values added to report");
//		response.setData();
		return response;
	}
	
	
	@GetMapping("/report")
	public ResponseData getReport() {
//		service.addReport(reports);
		ResponseData response = new ResponseData();
		response.setMessage("Report generated successfully");
		response.setData(service.getReport());
		return response;
	}

}
