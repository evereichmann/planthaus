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
        </div>
     );
}
 
export default AdminLanding;