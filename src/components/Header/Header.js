import { isEmpty } from '@firebase/util';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                {user.displayName ? <span style={{ color: 'white' }}>Hello {user.displayName}</span>
                    : <span style={{ color: 'white' }}>Please Login Or Create Account</span>}
                {
                    user.email ?
                        <NavLink to="/logout">Log Out</NavLink> :
                        <NavLink onClick={logOut} to="/login">Login</NavLink>

                }
                <NavLink to="/register">Register</NavLink>
            </nav>
        </div>
    );
};

export default Header;