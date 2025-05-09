package com.github.kohthecodemaster.service;

import com.github.kohthecodemaster.entity.Product;
import com.github.kohthecodemaster.repository.ProductRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class ProductService {

    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        List<Product> productList = productRepository.findAll();
//        log.info("Fetched all products: \n" + productList);
        return productList;
    }

    public Optional<Product> getProductById(Long id) {
        log.info("Fetching product with ID: {}", id);

        Optional<Product> result = productRepository.findById(id);
        if (result.isPresent()) log.info("Product found: {}", result.get());
        else log.warn("Product with ID {} not found", id);
        return result;
    }

    public Product saveProduct(Product product) {
        Product newProduct = productRepository.save(product);
        log.info("Saved new product: {}", newProduct);
        return newProduct;
    }

    public boolean deleteProduct(Long id) {
        if (!productRepository.existsById(id)) {
            log.warn("Product with ID {} not found for deletion", id);
            return false;
        }

        productRepository.deleteById(id);
        log.info("Deleted product with ID: {}", id);
        return true;
    }

}
