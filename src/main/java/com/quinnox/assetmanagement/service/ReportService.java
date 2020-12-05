package com.quinnox.assetmanagement.service;

import java.util.List;

import com.quinnox.assetmanagement.entity.Reports;

public interface ReportService {

	public boolean addReport(Reports reports);
	
	public List<Reports> getReport();
	
}
