package com.springreact.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springreact.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{
	
	

}
