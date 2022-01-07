import React from 'react'
import './css/header.css'
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <div className='header'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/feature">Features</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </div>
    )
}
