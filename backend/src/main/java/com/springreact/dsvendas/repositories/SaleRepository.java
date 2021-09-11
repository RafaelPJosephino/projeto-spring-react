package com.springreact.dsvendas.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.springreact.dsvendas.dto.SaleSuccessDTO;
import com.springreact.dsvendas.dto.SaleSumDTO;
import com.springreact.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{
	
	@Query(" SELECT new com.springreact.dsvendas.dto.SaleSumDTO(obj.seller, SUM (obj.amount)) "
			+ " FROM Sale as obj GROUP BY obj.seller")
	List <SaleSumDTO> amountGroupedBySeller();
	
	
	
	@Query(" SELECT new com.springreact.dsvendas.dto.SaleSuccessDTO(obj.seller, SUM (obj.visited), SUM (obj.deals)) "
			+ " FROM Sale as obj GROUP BY obj.seller")
	List <SaleSuccessDTO> SuccessGroupedBySeller();
	
	
}
