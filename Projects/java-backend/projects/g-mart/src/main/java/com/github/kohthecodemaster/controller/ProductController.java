package com.github.kohthecodemaster.controller;

import com.github.kohthecodemaster.entity.Product;
import com.github.kohthecodemaster.service.ProductService;
import com.google.gson.Gson;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/g-mart/api/product")
@Slf4j
public class ProductController {

    private static final Gson gson = new Gson().newBuilder().setPrettyPrinting().create();

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    //  --------------------------  Test API  --------------------------

    @GetMapping("/test")
    public String testApplication() {
        return "Test Passed. Product Controller is up and running.";
    }

    //  --------------------------  Get Product APIs  --------------------------

    @GetMapping("/all")
    public ResponseEntity<String> getAllProducts() {
        List<Product> products = productService.getAllProducts();
        return ResponseEntity.ok(gson.toJson(products));
    }

    @GetMapping("/{id}")
    public ResponseEntity<String> getProductById(@PathVariable Long id) {
        Optional<Product> product = productService.getProductById(id);
        return product.map(value -> ResponseEntity.ok(gson.toJson(value)))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body("Product with id (" + id + ") not found"));
    }

    @GetMapping()
    public ResponseEntity<String> getProductByIdUsingReqParam(@RequestParam(value = "id") Long id) {
        Optional<Product> product = productService.getProductById(id);
        return product.map(value -> ResponseEntity.ok(gson.toJson(value)))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body("Product with id (" + id + ") not found"));
    }


    //  --------------------------  Delete Products APIs  --------------------------

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable Long id) {
        boolean isProductDeleted = productService.deleteProduct(id);

        String responseMessage = "Product with id (" + id + ") deleted";
        if (!isProductDeleted) responseMessage = "Product with id (" + id + ") NOT FOUND!";

        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(responseMessage);
    }

    @DeleteMapping()
    public ResponseEntity<String> deleteProductByIdUsingReqParam(@RequestParam(value = "id") Long id) {
        boolean isProductDeleted = productService.deleteProduct(id);

        String responseMessage = "Product with id (" + id + ") deleted";
        if (!isProductDeleted) responseMessage = "Product with id (" + id + ") NOT FOUND!";

        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(responseMessage);
    }


    //  --------------------------  Create Subcategory APIs  --------------------------
    @PostMapping()
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        return ResponseEntity.ok(productService.saveProduct(product));
    }

}
