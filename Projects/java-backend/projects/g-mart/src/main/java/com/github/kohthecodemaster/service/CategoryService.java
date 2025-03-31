package com.github.kohthecodemaster.service;

import com.github.kohthecodemaster.entity.Category;
import com.github.kohthecodemaster.repository.CategoryRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class CategoryService {

    private final CategoryRepository categoryRepository;

    @Autowired
    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<Category> getAllCategories() {
        List<Category> categoryList = categoryRepository.findAll();
        log.debug("Fetched all categories: {}", categoryList);
        return categoryList;
    }

    public Optional<Category> getCategoryById(Long id) {
        log.debug("Fetching category with ID: {}", id);

        Optional<Category> result = categoryRepository.findById(id);
        if (result.isPresent()) log.debug("Category found: {}", result.get());
        else log.warn("Category with ID {} not found", id);
        return result;
    }

    public Category saveCategory(Category category) {
        Category newCategory = categoryRepository.save(category);
        log.debug("Saved new category: {}", newCategory);
        return newCategory;
    }

    public boolean deleteCategory(Long id) {
        if (!categoryRepository.existsById(id)) {
            log.warn("Category with ID {} not found for deletion", id);
            return false;
        }

        categoryRepository.deleteById(id);
        log.debug("Deleted category with ID: {}", id);
        return true;
    }
}
