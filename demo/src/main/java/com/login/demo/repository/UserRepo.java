package com.login.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.login.demo.model.User;
@Repository
public interface UserRepo extends JpaRepository<User, Integer> {

	public User findByUserNameAndEmail(String userName, String email);
	
	public User findByUserNameAndPassword(String userName, String password);
}
