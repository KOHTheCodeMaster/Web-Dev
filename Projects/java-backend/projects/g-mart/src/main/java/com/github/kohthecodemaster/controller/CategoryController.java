package com.github.kohthecodemaster.controller;

import com.github.kohthecodemaster.entity.Category;
import com.github.kohthecodemaster.service.CategoryService;
import com.google.gson.Gson;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@Slf4j
public class CategoryController {

    private static final Gson gson = new Gson().newBuilder().setPrettyPrinting().create();

    @Autowired
    private CategoryService categoryService;

    //  --------------------------  Test API  --------------------------

    @GetMapping("/test")
    public String testApplication() {
        return "Test Passed. Application is up and running.";
    }

    //  --------------------------  Get Category APIs  --------------------------

    @GetMapping("/all-category")
    public ResponseEntity<String> getAllCategories() {
        List<Category> categories = categoryService.getAllCategories();
        return ResponseEntity.ok(gson.toJson(categories));
    }

    @GetMapping("/category/{id}")
    public ResponseEntity<String> getCategoryById(@PathVariable Long id) {
        Optional<Category> category = categoryService.getCategoryById(id);
        return category.map(value -> ResponseEntity.ok(gson.toJson(value)))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body("Category with id (" + id + ") not found"));
    }

    @GetMapping("/category")
    public ResponseEntity<String> getCategoryByIdUsingReqParam(@RequestParam(value = "id") Long id) {
        Optional<Category> category = categoryService.getCategoryById(id);
        return category.map(value -> ResponseEntity.ok(gson.toJson(value)))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body("Category with id (" + id + ") not found"));
    }

    //  --------------------------  Delete Category APIs  --------------------------

    @DeleteMapping("/category/{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable Long id) {
        boolean isCategoryDeleted = categoryService.deleteCategory(id);

        String responseMessage = "Category with id (" + id + ") deleted";
        if (!isCategoryDeleted) responseMessage = "Category with id (" + id + ") NOT FOUND!";

        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(responseMessage);
    }

    @DeleteMapping("/category")
    public ResponseEntity<String> deleteCategoryByIdUsingReqParam(@RequestParam(value = "id") Long id) {
        boolean isCategoryDeleted = categoryService.deleteCategory(id);

        String responseMessage = "Category with id (" + id + ") deleted";
        if (!isCategoryDeleted) responseMessage = "Category with id (" + id + ") NOT FOUND!";

        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(responseMessage);
    }

    //  --------------------------  Create Category APIs  --------------------------

    @PostMapping("/category")
    public ResponseEntity<Category> createCategory(@RequestBody Category category) {
        return ResponseEntity.ok(categoryService.saveCategory(category));
    }

}
