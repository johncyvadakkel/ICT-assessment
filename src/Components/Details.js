import React from 'react'
import {useState ,useEffect} from "react";
import axios from 'axios'
import "./Details.css"

function Details() {
     const[contact,setContact]=useState([]);
    const[name,setName]=useState();
    const[phone,setPhone]=useState();
    const[email,setEmail]=useState();
    const[address,setAddress]=useState();

    useEffect(() => {
        getDetails();
      }, []);

    function getDetails(){
        axios.get("http://localhost:8080/api/response").then((res) => {
        setContact(res.data);
      });
    }

    function addContact() {
        const ContactData = {
          name: name,
          phone: phone,
          email: email,
          address: address
       };
   
       axios
         .post("http://localhost:8080/api/add", ContactData).then((res) => {
           setContact([...contact, res.data]);
           setName("");
           setPhone("");
           setEmail("");
           setAddress("");
         });
     }
    
  return (
    <div class="container">
      
      <form>
      <h2>Conatact Form</h2>
        <input type='text' value={name} placeholder='Enter Name' onChange={(e) => setName(e.target.value)} required/><br/>
        <input type='text' value={phone} placeholder='Enter Phone Number' onChange={(e) => setPhone(e.target.value)} required/><br/>
        <input type='text' value={email} placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} optional/><br/>
        <input type='text' value={address} placeholder='Enter Address' onChange={(e) => setAddress(e.target.value)} optional/><br/>
        <button  onClick={addContact}>Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>ContactId</th>
            <th>Contact Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
            {contact.map((contacts) => (
              <tr key={contacts.id}>
                <td>{contacts.id}</td>
                <td>{contacts.name}</td>
                <td>{contacts.phone}</td>
                <td>{contacts.email}</td>
                <td>{contacts.address}</td>
              </tr>
            ))}
          </tbody>
      </table>
    </div>
    
  )
}

export default Details
