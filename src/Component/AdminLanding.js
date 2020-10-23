import React from 'react'
import CreateUser from './CreateUser'
import {  Link } from "react-router-dom";

const AdminLanding = () => {
    // componentDidMount() {
    //     if
    // }
    return ( 
        <div>
            <Link to="/BlogForm"><button>Create Blog</button></Link>
            < CreateUser />
            <h3>To Dos</h3>
            <ul>
                <li>Firebase Info</li>
                <li>MailChimp Link or Information</li>
                <li>important links</li>
            </ul>
        </div>
     );
}
 
export default AdminLanding;