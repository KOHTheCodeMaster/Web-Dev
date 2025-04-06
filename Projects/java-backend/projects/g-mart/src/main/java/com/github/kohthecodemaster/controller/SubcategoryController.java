package com.github.kohthecodemaster.controller;

import com.github.kohthecodemaster.entity.Category;
import com.github.kohthecodemaster.entity.Subcategory;
import com.github.kohthecodemaster.service.CategoryService;
import com.github.kohthecodemaster.service.SubcategoryService;
import com.google.gson.Gson;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/g-mart/api/subcategory")
@Slf4j
public class SubcategoryController {

    private static final Gson gson = new Gson().newBuilder().setPrettyPrinting().create();

    @Autowired
    private SubcategoryService subcategoryService;

    //  --------------------------  Test API  --------------------------

    @GetMapping("/test")
    public String testApplication() {
        return "Test Passed. Subcategory Controller is up and running.";
    }

    //  --------------------------  Get Subcategory APIs  --------------------------

    @GetMapping("/all")
    public ResponseEntity<String> getAllSubcategories() {
        List<Subcategory> subcategories = subcategoryService.getAllSubcategories();
        return ResponseEntity.ok(gson.toJson(subcategories));
    }

    @GetMapping("/{id}")
    public ResponseEntity<String> getSubcategoryById(@PathVariable Long id) {
        Optional<Subcategory> Subcategory = subcategoryService.getSubcategoryById(id);
        return Subcategory.map(value -> ResponseEntity.ok(gson.toJson(value)))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body("Subcategory with id (" + id + ") not found"));
    }

    @GetMapping()
    public ResponseEntity<String> getSubcategoryByIdUsingReqParam(@RequestParam(value = "id") Long id) {
        Optional<Subcategory> Subcategory = subcategoryService.getSubcategoryById(id);
        return Subcategory.map(value -> ResponseEntity.ok(gson.toJson(value)))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body("Subcategory with id (" + id + ") not found"));
    }

    //  --------------------------  Delete Subcategory APIs  --------------------------

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteSubcategory(@PathVariable Long id) {
        boolean isCategoryDeleted = subcategoryService.deleteSubcategory(id);

        String responseMessage = "Subcategory with id (" + id + ") deleted";
        if (!isCategoryDeleted) responseMessage = "Subcategory with id (" + id + ") NOT FOUND!";

        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(responseMessage);
    }

    @DeleteMapping()
    public ResponseEntity<String> deleteSubcategoryByIdUsingReqParam(@RequestParam(value = "id") Long id) {
        boolean isCategoryDeleted = subcategoryService.deleteSubcategory(id);

        String responseMessage = "Subcategory with id (" + id + ") deleted";
        if (!isCategoryDeleted) responseMessage = "Subcategory with id (" + id + ") NOT FOUND!";

        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(responseMessage);
    }

    //  --------------------------  Create Subcategory APIs  --------------------------

    @PostMapping()
    public ResponseEntity<Subcategory> createSubcategory(@RequestBody Subcategory subcategory) {
        return ResponseEntity.ok(subcategoryService.saveSubcategory(subcategory));
    }

}
