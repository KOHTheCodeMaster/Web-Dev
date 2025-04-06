package com.github.kohthecodemaster.controller;

import com.github.kohthecodemaster.entity.Category;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

@Slf4j
public class CategoryControllerDemo {

    //  CategoryControllerDemo
    private static final String BASE_URL = "http://localhost:8081/api/";
    private static final RestTemplate restTemplate = new RestTemplate();
    private static final Gson gson = new GsonBuilder().setPrettyPrinting().create();

    public static void main(String[] args) {

        testApplication();

        getAllCategories();

        long categoryId = 4;
        getCategoryById(categoryId);

//        Category createdCategory = createCategory("Dummy Category 1");
//        deleteCategory(10L);

    }

    private static void testApplication() {

        System.out.println("\n\n---------------------------\nTesting Application...\n----------------------------\n");

        String url = "http://localhost:8081/api/test";
        String response = restTemplate.getForObject(url, String.class);
        log.info("Test Application Response: {}", response);
    }

    private static Category createCategory(String name) {
        Category category = new Category();
        category.setName(name);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<Category> request = new HttpEntity<>(category, headers);

        ResponseEntity<Category> response = restTemplate.postForEntity(BASE_URL + "category", request, Category.class);
        Category createdCategory = response.getBody();
        log.info("Created Category:\n{}", gson.toJson(createdCategory));

        return createdCategory;
    }

    private static void getAllCategories() {
        System.out.println("\n\n---------------------------\nFetching All Categories...\n----------------------------\n");

        ResponseEntity<String> response = restTemplate.getForEntity(BASE_URL + "all-category", String.class);
        log.info("All Categories:\n{}", response.getBody());
    }

    private static void getCategoryById(Long id) {
        System.out.println("\n\n---------------------------\nFetching Category by ID...\n----------------------------\n");

        String url = BASE_URL + "category/" + id;
        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
        log.info("Category by ID ({}):\n{}", id, response.getBody());
    }

    private static void deleteCategory(Long id) {
        System.out.println("\n\n---------------------------\nDeleting Category...\n----------------------------\n");

        restTemplate.delete(BASE_URL + "category/" + id);
    }

}
