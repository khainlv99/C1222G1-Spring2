package com.example.gymapi.service.impl;

import com.example.gymapi.dto.OrderDto;
import com.example.gymapi.dto.ShoppingCartItemDto;
import com.example.gymapi.model.*;
import com.example.gymapi.repository.IOrderHistoryRepository;
import com.example.gymapi.repository.IOrderRepository;
import com.example.gymapi.repository.IShoppingCartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class ShoppingCartService {

    @Autowired
    private IShoppingCartRepository shoppingCartRepository;

    @Autowired
    private IOrderRepository orderRepository;

    @Autowired
    private IOrderHistoryRepository orderHistoryRepository;

    public void addToCart(ShoppingCartItemDto cartItemDto) {
        if (cartItemDto.getCustomerId() == null) {
            throw new IllegalArgumentException("Customer ID cannot be null");
        }

        ShoppingCart cartItem = new ShoppingCart();
        cartItem.setCustomer(new Customer(cartItemDto.getCustomerId()));
        cartItem.setPackageEntity(new PackageEntity(cartItemDto.getPackageId()));
        cartItem.setQuantity(cartItemDto.getQuantity());
        cartItem.setPrice(cartItemDto.getPrice());
        shoppingCartRepository.save(cartItem);
    }

    public List<ShoppingCartItemDto> getCartItems(int customerId) {
        List<ShoppingCartItemDto> cartItemDtos = new ArrayList<>();
        List<ShoppingCart> shoppingCarts = shoppingCartRepository.findByCustomerId(customerId);

        for (ShoppingCart shoppingCart : shoppingCarts) {
            ShoppingCartItemDto cartItemDto = new ShoppingCartItemDto();
            cartItemDto.setCartItemId(shoppingCart.getCartId());
            cartItemDto.setCustomerId(shoppingCart.getCustomer().getId());
            cartItemDto.setPackageId(shoppingCart.getPackageEntity().getId());
            cartItemDto.setQuantity(shoppingCart.getQuantity());
            cartItemDto.setPrice(shoppingCart.getPrice());
            cartItemDtos.add(cartItemDto);
        }
        return cartItemDtos;
    }

    public void removeFromCart(int cartItemId) {
        shoppingCartRepository.deleteById(cartItemId);
    }

    public void checkoutCart(OrderDto orderDto) {
        // Thực hiện tạo đơn hàng mới
        Order order = new Order();
        order.setCustomer(new Customer(orderDto.getCustomerId()));
        order.setOrderDate(LocalDateTime.now());
        order.setTotalAmount(orderDto.getTotalAmount());
        order.setStatus("Pending");
        order = orderRepository.save(order);
        OrderHistory orderHistory = new OrderHistory();
        orderHistory.setCustomer(order.getCustomer());
        orderHistory.setOrder(order);
        orderHistory.setOrderDate(order.getOrderDate());
        orderHistory.setTotalAmount(order.getTotalAmount());
        orderHistory.setStatus(order.getStatus());
        orderHistoryRepository.save(orderHistory);
        clearCart(orderDto.getCustomerId());
    }

    public void clearCart(int customerId) {
        shoppingCartRepository.deleteByCustomerId(customerId);
    }
}