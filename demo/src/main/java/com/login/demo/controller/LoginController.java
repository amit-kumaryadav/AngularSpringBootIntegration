package com.login.demo.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.login.demo.component.loginComponent;
import com.login.demo.model.User;

@RestController
@RequestMapping("/login")
public class LoginController {
	
	@Autowired
	private loginComponent loginComponent;
	
	
	@RequestMapping(value = "/createUser", method = RequestMethod.POST, produces = "application/json")
	public boolean createUser(@Valid @RequestBody User user) {
		return loginComponent.createUser(user);
	}
	
	@RequestMapping(value = "/loginUser", method = RequestMethod.GET)
	public User loginUser(@RequestParam("userName") String userName, @RequestParam("password") String password) {
		return loginComponent.loginUser(userName, password);
	}

}
