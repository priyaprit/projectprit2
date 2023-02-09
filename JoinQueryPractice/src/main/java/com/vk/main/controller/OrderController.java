package com.vk.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.vk.main.dto.OrderRequest;
import com.vk.main.dto.OrderResponse;
import com.vk.main.entity.Customer;
import com.vk.main.entity.Product;
import com.vk.main.repository.CustomerRepository;
import com.vk.main.repository.ProductRepository;

@RestController
public class OrderController {
	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private ProductRepository productRepository;
	
	
	
	@PostMapping("/place")
	public Customer placerder(@RequestBody OrderRequest request) {
		return customerRepository.save(request.getCustomer());
		
	}
	@GetMapping("/findorder")
	public List<Customer> findAllOrder()
	{
		return customerRepository.findAll();
		
	}
	
	@GetMapping("/findorderselect")
	public List<OrderResponse> getJoinInformation1()
	{
		return customerRepository.getJoinInformation();
		
	}
	@GetMapping("/ppp/{pid}")
	public List<Product> getproduct(@PathVariable ("pid") int pid)
	{
		return productRepository.findAllByPid(pid);
		
	}
	@GetMapping("/right")
	public List<OrderResponse> getJoinInformation2()
	{
		return customerRepository.getJoinInformation12();
	}
	
	@GetMapping("/left")
	public List<OrderResponse> getJoinInformation()
	{
		return customerRepository.getleftjoin();
	}
	@GetMapping("/inner")
	public List<OrderResponse> getJoinInformation3()
	{
		return customerRepository.getInnerJoin();
	}
	
	

}
