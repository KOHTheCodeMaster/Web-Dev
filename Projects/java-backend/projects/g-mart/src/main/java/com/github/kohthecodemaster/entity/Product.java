package com.github.kohthecodemaster.entity;

import com.google.gson.GsonBuilder;
import jakarta.persistence.*;
import lombok.Data;

@Entity(name = "PRODUCT")
@Table(name = "PRODUCT")
@Data
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private double price;
    private String unitLabel;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne
    @JoinColumn(name = "subcategory_id")
    private Subcategory subcategory;

/*
    @PrePersist
    @PreUpdate
    private void calculateSubtotalPrice() {
        this.subtotalPrice = this.price * this.quantity;
    }
*/

    @Override
    public String toString() {
        return new GsonBuilder().setPrettyPrinting().create().toJson(this);
    }

}
