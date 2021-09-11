package com.springreact.dsvendas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springreact.dsvendas.dto.SellerDTO;
import com.springreact.dsvendas.service.SellerService;

@RestController
@RequestMapping(value = "/Sellers")
public class SellerController {
	
	@Autowired
	private SellerService service;

	
	@GetMapping
	public ResponseEntity<List<SellerDTO>> FindAll(){
		List<SellerDTO> list = service.findAll();
		return ResponseEntity.ok(list);
	}
	
	
}
