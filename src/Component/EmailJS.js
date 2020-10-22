import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import {  Link } from "react-router-dom";

export default function ContactUs(props) {
  
  const [value, setValue] = useState();
  const [error, setError] = useState();

  function sendEmail(e) {
    e.preventDefault();
    if ( !e.target[1].value || !e.target[2].value || !value ){
      setError("Please fill in all the fields")
    } else{
      emailjs.sendForm('service_uhwh88u', 'template_xueo4qa', e.target, 'user_vGpxGQNx4ADjnwd7Q4hgj')
      .then((result) => {
        setError("Email Sent")
      }, (error) => {
        setError(error.text)
      });
    }
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <div >
    <h1 style={{border: "2px solid black", padding: "1%"}}>Contact Us</h1>
    <ul style={{border: "2px solid black", padding: "1%"}}>
                <Link to="/"><li style={{ display: "inline", marginRight: "10px"}}>main</li></Link>
                <Link to="/About"><li style={{ display: "inline", marginRight: "10px"}}>about</li></Link>
                <li style={{ display: "inline", marginRight: "10px"}}>shop</li>
                <Link to="/Blogs"><li style={{ display: "inline", marginRight: "10px"}}>blog</li></Link>
    </ul>
    <form className="contact-form" onSubmit={sendEmail} style={{border: "2px solid black", padding: "1%"}}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name"/>
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" value={value} onChange={handleChange} />
      <input type="submit" value="Send" />
    { error ? <p>{error}</p> : null }
    </form>
    </div>
  );
}

