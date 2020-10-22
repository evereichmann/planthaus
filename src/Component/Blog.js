import React from 'react'
import {  Link } from "react-router-dom";

const Blog = () => {
    return ( 
        <div>
            <h1 style={{border: "2px solid black", padding: "1%"}}>Blog</h1>
            <ul style={{border: "2px solid black", padding: "1%"}}>
                <Link to="/"><li style={{ display: "inline", marginRight: "10px"}}>main</li></Link>
                <Link to="/About"><li style={{ display: "inline", marginRight: "10px"}}>about</li></Link>
                <li style={{ display: "inline", marginRight: "10px"}}>shop</li>
                <Link to="/ContactUs"><li style={{ display: "inline", marginRight: "10px"}}>contact us</li></Link>
            </ul>
        </div>
     );
}
 
export default Blog;