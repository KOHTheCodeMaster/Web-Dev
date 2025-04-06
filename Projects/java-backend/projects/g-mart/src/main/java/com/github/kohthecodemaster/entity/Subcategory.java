package com.github.kohthecodemaster.entity;

import com.google.gson.GsonBuilder;
import jakarta.persistence.*;
import lombok.Data;

@Entity(name = "SUBCATEGORY")
@Table(name = "SUBCATEGORY")
@Data
public class Subcategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @Override
    public String toString() {
        return new GsonBuilder().setPrettyPrinting().create().toJson(this);
    }

}
