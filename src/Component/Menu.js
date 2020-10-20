import React, { Component } from 'react'
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div style={{border: "2px solid black"}}>
            <ul>
                <Link to='/About'><li>about</li></Link>
                {/* link to etsy or page with images that link to etsy for now */}
                <li>shop</li>
                <Link to='/Blogs'><li>blog</li></Link>
                <Link to='/ContactUs'><li>contact us</li></Link>
            </ul>
            <ul>
                <li>sign up for updates</li>
            </ul>
        </div>
      );
}
 
export default Menu;