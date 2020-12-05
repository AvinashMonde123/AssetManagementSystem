package com.quinnox.assetmanagement.controller;

//import lombok.Data;

//@Data
public class ResponseData {

	private String message;
	
	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}

	private Object data;
	
}
