package com.github.kohthecodemaster.entity;

import com.google.gson.GsonBuilder;
import jakarta.persistence.*;
import lombok.Data;

@Entity(name = "CATEGORY")
@Table(name = "CATEGORY")
@Data
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @Override
    public String toString() {
        return new GsonBuilder().setPrettyPrinting().create().toJson(this);
    }

}
