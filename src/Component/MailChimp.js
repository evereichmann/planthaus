import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"
import mailchimp from "@mailchimp/mailchimp_marketing";

class MailChimp extends React.Component {
    state = {  }

    componentDidMount() {
        // {list_id}/members
        // const contact = 
        const url = "https://cors-anywhere.herokuapp.com/https://us2.api.mailchimp.com/3.0/lists/94ea523f27/members"
        // const url = "https://cors-anywhere.herokuapp.com/https://gmail.us2.list-manage.com/subscribe?u=b3dfc2ae52ccc1b1106c0a5c7&id=94ea523f27"
        const reqObj = {
            method: "POST",
            withCredentials: true,
            body: {
                "email_address": "example@gmail.com",
                "status": "subscribed"
            },
            headers: {
              "X-Auth-Token": "",
              "Content-Type": "application/json",
              "Authorization": ""
            }}
            
            fetch(url, reqObj)
                .then(data => data.json())
                .then(data => {
                    console.log(data)
                })
                .catch(function(error) {
                    console.log(error);
                  });
    }

    render() { 
        return ( 
            <div>
                <h1>mailchimp</h1>
            
            </div> 
        )
    }
}
 
export default MailChimp;

