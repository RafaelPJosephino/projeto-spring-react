package com.springreact.dsvendas.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springreact.dsvendas.dto.SaleDTO;
import com.springreact.dsvendas.service.SaleService;

@RestController
@RequestMapping(value = "/Sales")
public class SaleController {
	
	@Autowired
	private SaleService service;

	
	@GetMapping
	public ResponseEntity<Page<SaleDTO>> FindAll(Pageable pageable){
		Page<SaleDTO> list = service.findAll(pageable);
		return ResponseEntity.ok(list);
	}
	
	
}
