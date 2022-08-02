package com.npci.product.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.npci.product.entity.Buyer;

@RepositoryRestResource(path = "buyer")
@CrossOrigin("http://localhost:4200/")
public interface BuyerRepository extends JpaRepository<Buyer,Integer>{

}
