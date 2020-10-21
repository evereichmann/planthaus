import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Subscription from './Subscription'

const Menu = (props) => {
    const [modal, setModal] = useState(false)
    
    const handleClick = (event) => {
        setModal(!modal)
    }

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
                {/* subscription modle or seprate page */}
                <li onClick={handleClick}>sign up for updates</li>
            </ul>
            { modal ? < Subscription /> : null}
        </div>
      );
}
 
export default Menu;