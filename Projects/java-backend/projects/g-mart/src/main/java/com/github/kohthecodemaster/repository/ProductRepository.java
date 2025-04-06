package com.github.kohthecodemaster.repository;

import com.github.kohthecodemaster.entity.Product;
import com.github.kohthecodemaster.entity.Subcategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
}
