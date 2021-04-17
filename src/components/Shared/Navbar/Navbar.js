import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">

            <div className="banner">
                <img src={logo} alt="" />
                <div className="centered1 logo-container">CODE</div>
                <div className="centered2 logo-container">GLOBE</div>
            </div>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link mr-5 font-weight-bold" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 font-weight-bold" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 font-weight-bold" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 font-weight-bold" to="/dashboard">Admin</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 font-weight-bold" to="#">Blogs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 font-weight-bold" to="#">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;