package com.example.be.repository.cart;

import com.example.be.model.OderProduct;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface IOderProductRepository extends JpaRepository<OderProduct,Integer> {
   OderProduct findById(int id);
   Page<OderProduct> findAll(Pageable pageable);
   @Query(value = "select count(id) from oder_product", nativeQuery = true)
   Integer getTotalCodeAmount();

}
