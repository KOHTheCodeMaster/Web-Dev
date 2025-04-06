package com.github.kohthecodemaster.service;

import com.github.kohthecodemaster.entity.Subcategory;
import com.github.kohthecodemaster.repository.SubcategoryRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class SubcategoryService {

    private final SubcategoryRepository subcategoryRepository;

    @Autowired
    public SubcategoryService(SubcategoryRepository subcategoryRepository) {
        this.subcategoryRepository = subcategoryRepository;
    }

    public List<Subcategory> getAllSubcategories() {
        List<Subcategory> subcategoryList = subcategoryRepository.findAll();
//        log.info("Fetched all subcategories: {}", subcategoryList);
        return subcategoryList;
    }

    public Optional<Subcategory> getSubcategoryById(Long id) {
        log.info("Fetching subcategory with ID: {}", id);

        Optional<Subcategory> result = subcategoryRepository.findById(id);
        if (result.isPresent()) log.info("Subcategory found: {}", result.get());
        else log.warn("Subcategory with ID {} not found", id);
        return result;
    }

    public Subcategory saveSubcategory(Subcategory subcategory) {
        Subcategory newSubcategory = subcategoryRepository.save(subcategory);
        log.info("Saved new subcategory: {}", newSubcategory);
        return newSubcategory;
    }

    public boolean deleteSubcategory(Long id) {
        if (!subcategoryRepository.existsById(id)) {
            log.warn("Subcategory with ID {} not found for deletion", id);
            return false;
        }

        subcategoryRepository.deleteById(id);
        log.info("Deleted subcategory with ID: {}", id);
        return true;
    }
}
