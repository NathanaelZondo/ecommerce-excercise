package org.acme;
import java.util.List;
import java.util.Map;


public class Product {
    private String name;
    private String category;
    private double price;
    private String currency;
    private Object image; // Use Object to handle both String and nested objects
    private boolean bestseller;
    private boolean featured;
    private Object details; // Use Object to handle both null and nested objects

    // Constructor
    public Product(String name, String category, double price, String currency, Object image,
                   boolean bestseller, boolean featured, Object details) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.currency = currency;
        this.image = image;
        this.bestseller = bestseller;
        this.featured = featured;
        this.details = details;
    }

    // Getters and Setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public Object getImage() {
        return image;
    }

    public void setImage(Object image) {
        this.image = image;
    }

    public boolean isBestseller() {
        return bestseller;
    }

    public void setBestseller(boolean bestseller) {
        this.bestseller = bestseller;
    }

    public boolean isFeatured() {
        return featured;
    }

    public void setFeatured(boolean featured) {
        this.featured = featured;
    }

    public Object getDetails() {
        return details;
    }

    public void setDetails(Object details) {
        this.details = details;
    }
}
