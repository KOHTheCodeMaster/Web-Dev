package com.github.kohthecodemaster.entity;

import com.google.gson.GsonBuilder;
import jakarta.persistence.*;
import lombok.Data;

@Entity(name = "CART_PRODUCT")
@Table(name = "CART_PRODUCT")
@Data
public class CartProduct {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    private int quantity;
    private double subtotalPrice;

    @PrePersist
    @PreUpdate
    private void calculateSubtotalPrice() {
        this.subtotalPrice = this.getProduct().getPrice() * this.quantity;
    }

    @Override
    public String toString() {
        return new GsonBuilder().setPrettyPrinting().create().toJson(this);
    }

}
