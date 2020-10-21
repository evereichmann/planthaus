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
                <Link to='/About'><li style={{ display: "inline", marginRight: "10px"}}>about</li></Link>
                {/* link to etsy or page with images that link to etsy for now */}
                <li style={{ display: "inline", marginRight: "10px"}}>shop</li>
                <Link to='/Blogs'><li style={{ display: "inline", marginRight: "10px"}}>blog</li></Link>
                <Link to='/ContactUs'><li style={{ display: "inline", marginRight: "10px"}}>contact us</li></Link>
                <li style={{ display: "inline", float: "right", marginRight: "10px"}} onClick={handleClick}>sign up for updates</li>
            </ul>
            { modal ? < Subscription /> : null}
        </div>
      );
}
 
export default Menu;