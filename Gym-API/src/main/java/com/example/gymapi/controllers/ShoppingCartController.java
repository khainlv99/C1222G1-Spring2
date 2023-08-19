package com.example.gymapi.controllers;

import com.example.gymapi.dto.OrderDto;
import com.example.gymapi.dto.ShoppingCartItemDto;
import com.example.gymapi.service.impl.ShoppingCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = { "http://example.com", "http://localhost:8080" }, allowCredentials = "true")
public class ShoppingCartController {

    @Autowired
    private ShoppingCartService shoppingCartService;

    @PostMapping("/add")
    public ResponseEntity<String> addToCart(@RequestBody ShoppingCartItemDto cartItemDto) {
        try {
            shoppingCartService.addToCart(cartItemDto);
            return ResponseEntity.ok("Item added to the cart successfully.");
        } catch (IllegalArgumentException ex) {
            return ResponseEntity.badRequest().body(ex.getMessage());
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while adding to the cart.");
        }
    }

    @GetMapping("/{customerId}")
    public ResponseEntity<List<ShoppingCartItemDto>> getCartItems(@PathVariable int customerId) {
        List<ShoppingCartItemDto> cartItems = shoppingCartService.getCartItems(customerId);
        return ResponseEntity.ok(cartItems);
    }

    @DeleteMapping("/{cartItemId}")
    public ResponseEntity<String> removeFromCart(@PathVariable int cartItemId) {
        shoppingCartService.removeFromCart(cartItemId);
        return ResponseEntity.ok("Item removed from cart successfully");
    }

    @PostMapping("/checkout")
    public ResponseEntity<String> checkoutCart(@RequestBody OrderDto orderDto) {
        try {
            shoppingCartService.checkoutCart(orderDto);
            return ResponseEntity.ok("Cart checked out successfully");
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while checking out cart.");
        }
    }
}