import React from 'react'
import CreateUser from './CreateUser'
import {  Link } from "react-router-dom";

const AdminLanding = () => {

    return ( 
        <div>
            <Link to="/BlogForm"><button>Create Blog</button></Link>
            < CreateUser />
        </div>
     );
}
 
export default AdminLanding;