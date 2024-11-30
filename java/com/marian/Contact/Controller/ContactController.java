package com.marian.Contact.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.marian.Contact.Model.Contact;
import com.marian.Contact.Service.ContactService;

@RestController
@CrossOrigin(origins ="http://localhost:3000")
public class ContactController {
	@Autowired
	public ContactService ContactServ;
	
	@GetMapping("/api/response")
	public List<Contact> getContacts(){
		return ContactServ.getContact();
	}

	@PostMapping("/api/add")
	public Contact saveContact(@RequestBody Contact contact) {
		return ContactServ.saveContact(contact);
	}
}
