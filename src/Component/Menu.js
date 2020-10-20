import React, { Component } from 'react'
import { Link } from "react-router-dom";
import About from './About'

const Menu = () => {
    return (
        <div style={{border: "2px solid black"}}>
            <ul>
                <Link><li>about</li></Link>
                <li>blog</li>
                <li>contact us</li>
            </ul>
            <ul>
                <li>sign up for updates</li>
            </ul>
        </div>
      );
}
 
export default Menu;