package com.login.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.login.demo.model.SpecialEvent;

public interface SpecialEventRepo extends JpaRepository<SpecialEvent, Integer> {

	List<SpecialEvent> findAll();
}
