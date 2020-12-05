package com.quinnox.assetmanagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quinnox.assetmanagement.dao.ReportDAO;
import com.quinnox.assetmanagement.entity.Reports;

@Service
public class ReportServiceImpl implements ReportService{

	@Autowired
	ReportDAO dao;
	
	@Override
	public boolean addReport(Reports reports) {
		return dao.addReport(reports);
	}

	@Override
	public List<Reports> getReport() {
		return dao.getReport();
	}

}
