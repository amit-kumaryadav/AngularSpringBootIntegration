package com.login.demo.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.login.demo.model.Event;
import com.login.demo.model.SpecialEvent;
import com.login.demo.repository.EventRepo;
import com.login.demo.repository.SpecialEventRepo;

@RestController
@RequestMapping("/events")
public class EventsController {

	@Autowired
	private EventRepo eventRepo;

	@Autowired
	private SpecialEventRepo specialEventRepo;

	@RequestMapping(value = "/getEvent", method = RequestMethod.GET, produces = "application/json")
	public List<Event> getEvents() {
		return eventRepo.findAll();
	}

	@RequestMapping(value = "/getSpecialEvent", method = RequestMethod.GET, produces = "application/json")
	public List<SpecialEvent> getSpecialEvent() {
		return specialEventRepo.findAll();
	}

	@RequestMapping(value = "/addEvents", method = RequestMethod.POST, produces = "application/json")
	public Event addEvents(@Valid @RequestBody Event event) {
		return eventRepo.save(event);
	}

	@RequestMapping(value = "/addSpecialEvents", method = RequestMethod.POST, produces = "application/json")
	public SpecialEvent addSpecialEvents(@Valid @RequestBody SpecialEvent specialEvent) {
		return specialEventRepo.save(specialEvent);
	}
}
