package com.github.kohthecodemaster.entity;

import com.google.gson.GsonBuilder;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "PRODUCT_UNIT_LABEL")
@Data
public class ProductUnitLabel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String label;

    @Override
    public String toString() {
        return new GsonBuilder().setPrettyPrinting().create().toJson(this);
    }

}
