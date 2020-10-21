import React, { useState } from 'react'
import emailjs from 'emailjs-com';

const Subscription = (props) => {

    const [error, setError] = useState();
  
    function sendEmail(e) {
      e.preventDefault();
      if ( !e.target[1].value || !e.target[2].value ){
        setError("Please fill in all the fields")
      } else{
        emailjs.sendForm('service_uhwh88u', 'template_c2wddsq', e.target, 'user_vGpxGQNx4ADjnwd7Q4hgj')
        .then((result) => {
          setError("You Subscribed! We sent you a confermation email")
        }, (error) => {
          setError(error.text)
        });
      }
    }

    return ( 
        <div style={{border: "2px solid black", margin: "5px", padding: "5px"}}>
            <h3>Sign Up For Emails</h3>
                <form className="contact-form" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <label>Name</label>
                <input type="text" name="user_name"/>
                <label>Email</label>
                <input type="email" name="user_email" />
                <input type="submit" value="Send" />
                </form>
                { error ? <p>{error}</p> : null }
        </div>
     );
}
 
export default Subscription;