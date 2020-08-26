import React from 'react';
import Logo from '../../images/logo.png';
import './Header.css'
const Header = () => {
    return (
        <div className="Header">
        <img src={Logo} alt=""/>
        <nav>
            <a href="/shop">Shop</a>
            <a href="/review">Order review</a>
            <a href="/manage">Manage Inventory</a>
        </nav>
        </div>
       
    );
};

export default Header;