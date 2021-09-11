package com.springreact.dsvendas.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springreact.dsvendas.dto.SellerDTO;
import com.springreact.dsvendas.entities.Seller;
import com.springreact.dsvendas.repositories.SellerRepository;

@Service
public class SellerService {
	
	@Autowired
	private SellerRepository repository;
	
	public List<SellerDTO> findAll(){
		List<Seller> result = repository.findAll();
		return result.stream().map( X -> new SellerDTO(X)).collect(Collectors.toList());
	}
	
}
