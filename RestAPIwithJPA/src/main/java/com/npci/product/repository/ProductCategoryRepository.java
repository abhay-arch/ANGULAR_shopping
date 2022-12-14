package com.npci.product.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.npci.product.entity.ProductCategory;

@RepositoryRestResource(path = "category")
@CrossOrigin("http://localhost:4200/")
public interface ProductCategoryRepository	extends JpaRepository<ProductCategory,Integer> {

}
