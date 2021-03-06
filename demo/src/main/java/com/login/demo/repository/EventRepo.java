package com.login.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.login.demo.model.Event;

@Repository
public interface EventRepo extends JpaRepository<Event, Integer> {
	public List<Event> findAll();
}
