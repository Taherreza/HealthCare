import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import brand from '../../images/logo.png'
import './Header.css'

const Header = () => {

    const { user, logOut } = useAuth();

    return (
        <div className="header">
            <div>
                <img src={brand} alt="" />
            </div>
            <div className="head-top">
                <Link to="/home">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/features">Features</Link>
                <Link to="/reviews">Reviews</Link>

            </div>

            <div className="log">

                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
                <span>{user.displayName} </span>
                {user?.email && <button onClick={logOut} className="header-btn">Log Out</button>}
            </div>

        </div>
    );
};

export default Header;