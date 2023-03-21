import React from 'react'
import {FaViacoin} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <Link to='/'>
            <div className='navbar'>
                <FaViacoin className='icon' />
                <h1> Crypto <span className='purple'>vest</span></h1>
            </div>
        </Link>
    )
}

export default Navbar
