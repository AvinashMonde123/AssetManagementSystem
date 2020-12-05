package com.quinnox.assetmanagement.dao;

import java.util.List;

//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.stereotype.Repository;

import com.quinnox.assetmanagement.entity.Reports;

//@Repository
public interface ReportDAO {

	public boolean addReport(Reports reports);

//	@Query("SUM(totalprice) FROM Reports")
	public List<Reports> getReport();

}
