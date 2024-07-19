package org.acme;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Path("/products")
public class ProductsRescource {
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Product> getProducts() {
        List<Product> products = new ArrayList<>();

        // Add products to the list
        products.add(new Product("Red Bench", "people", 3.89, "USD", new HashMap<String, String>(), true, false, null));
        products.add(new Product("Egg Balloon", "food", 93.89, "USD", "", false, false, null));
        products.add(new Product("Man", "people", 100, "USD", new HashMap<String, String>(), false, false, null));
        products.add(new Product("Architecture", "landmarks", 101, "USD", "", false, false, null));
        products.add(new Product("Samurai King Restling", "landmarks", 101, "USD", new HashMap<String, String>(), false, true,
                new HashMap<String, Object>() {{
                    put("dimensions", new HashMap<String, Integer>() {{
                        put("width", 1020);
                        put("height", 1020);
                    }});
                    put("size", 15000);
                    put("description", "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scram");
                    put("recommendations", new ArrayList<Map<String, String>>() {{
                        add(new HashMap<String, String>() {{
                            put("src", "");
                            put("alt", "");
                        }});
                        add(new HashMap<String, String>() {{
                            put("src", "");
                            put("alt", "");
                        }});
                        add(new HashMap<String, String>() {{
                            put("src", "");
                            put("alt", "");
                        }});
                    }});
                }}));

        return products;
    }

    
}
