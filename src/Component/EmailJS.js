import React, { useState } from 'react'
import emailjs from 'emailjs-com';

export default function ContactUs(props) {
  
  const [value, setValue] = useState();
  const [error, setError] = useState();

  function sendEmail(e) {
    e.preventDefault();
    console.log(e.target.user_name.value)
    console.log(e.target.user_email.value)
    console.log(value)
    if ( value === undefined){
      console.log("error")
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
    <div  style={{border: "2px solid black", marginTop: "5px", padding: "5px"}}>
    <h3>Contact Us</h3>
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name"/>
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" value={value} onChange={handleChange} />
      <input type="submit" value="Send" />
    </form>
    { error ? <p>{error}</p> : null }
    </div>
  );
}

