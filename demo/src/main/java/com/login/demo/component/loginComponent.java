package com.login.demo.component;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.login.demo.model.User;
import com.login.demo.repository.UserRepo;

@Component
public class loginComponent {

	@Autowired
	UserRepo userRepo;
	
	public boolean createUser(User user) 
	{
		User existingUser = userRepo.findByUserNameAndEmail(user.getUserName(), user.getEmail());
		if (existingUser != null)
			return false;
		User newUser = new User();
		newUser.setUserName(user.getUserName());
		newUser.setPassword(user.getPassword());
		newUser.setEmail(user.getEmail());
		userRepo.save(newUser);
		return true;
	}
	
	public User loginUser(String userName, String password) {
		User user = userRepo.findByUserNameAndPassword(userName, password);
		return user;
	}
}
