package com.vk.main.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.vk.main.dto.OrderResponse;
import com.vk.main.entity.Customer;
@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
	
	@Query("SELECT new com.vk.main.dto.OrderResponse(c.name , p.productname , p.price) FROM Customer c JOIN c.products p")
    public List<OrderResponse> getJoinInformation();
	
	
	@Query("SELECT new com.vk.main.dto.OrderResponse(c.name,p.productname)"+ "FROM Customer c RIGHT JOIN c.products p")
	public List<OrderResponse> getJoinInformation12();
	
	
	@Query("SELECT new com.vk.main.dto.OrderResponse(c.name,p.productname)"+ "FROM Customer c LEFT JOIN c.products p")
	public List<OrderResponse> getleftjoin();
	
	
	@Query("SELECT new com.vk.main.dto.OrderResponse (c.name,p.productname)"+ "FROM Customer c INNER JOIN c.products p")
	public List<OrderResponse> getInnerJoin();
}