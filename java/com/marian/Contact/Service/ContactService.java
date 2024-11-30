package com.marian.Contact.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.marian.Contact.Model.Contact;
import com.marian.Contact.Repository.ContactRepository;

@Service
public class ContactService {
	@Autowired
	public ContactRepository contactRepos;
	
	public List<Contact> getContact(){
		return contactRepos.findAll();
	}
	 public Contact saveContact(Contact contact) {
		 return contactRepos.save(contact);
	 }

}
