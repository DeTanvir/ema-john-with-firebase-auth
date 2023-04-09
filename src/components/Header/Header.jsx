import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="logo" />
            <div>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/invertory">Invertory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;