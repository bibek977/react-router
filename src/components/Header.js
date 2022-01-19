import React from 'react'
import './css/header.css'
import { NavLink } from 'react-router-dom'


export default function Header() {
    return (
        <div className='header'>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/feature">Features</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
            </ul>
        </div>
    )
}
