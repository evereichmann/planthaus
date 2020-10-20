import React, { Component } from 'react'
import About from './About'

const Menu = () => {
    return (
        <div style={{border: "2px solid black"}}>
            <ul>
                <li>about</li>
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