import React from 'react';
import logo from '../../logo.png';
import './navbar.scss';

function Navbar() {
    return (
        <nav className='navbar'>
            <img src={logo} className='navbar-logo' alt='logo' />
            <ul className='navbar-links'>
                <li><a href='/' className='navbar-links-link '>
                    <i className='fas fa-home fa-1x icon' />HOME</a></li>
                <li><a href='/' className='navbar-links-link navbar-links-active'>
                    <i className='fas fa-home fa-1x icon' />HOUSES</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;