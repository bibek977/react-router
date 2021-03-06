import React, { useState } from 'react'
import './css/header.css'
import { NavLink } from 'react-router-dom'


export default function Header() {

    const [show, setshow] = useState(false);

    const data = ({isActive})=>{
        return {
            color : isActive ? "white" : "tomato"
        }
    }

    return (
        
        <div className={show ? "header mobile":'header'} >
            <ul>
                <li><NavLink style={data} to="/">Home</NavLink></li>
                <li><NavLink style={data} to="/feature">Features</NavLink></li>
                <li><NavLink style={data} to="/blog">Blog</NavLink></li>
                {/* <li><NavLink style={data} to="/about">About Us</NavLink></li> */}
                <li><NavLink style={data} to="/contact">Contact Us</NavLink></li>
                <li><NavLink style={data} to="/search">Search</NavLink></li>
                <li><NavLink style={data} to="/footer">Footer</NavLink></li>
                {/* <li><NavLink to="/feature/product">Product</NavLink></li> */}
                
            </ul>
            <div className="toggle">
                <button onClick={()=>setshow(!show)}>close</button>
            </div>
        </div>
    )
}
