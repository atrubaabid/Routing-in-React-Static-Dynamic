import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <h1>Header</h1>

            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'contact'}>EnquiryFormHandlewithState</Link></li>
                <li><Link to={'about'}>About</Link></li>
                <li><Link to={'blog'}>Blog</Link></li>
            </ul>


        </div>
    )
}

