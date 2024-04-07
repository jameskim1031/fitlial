import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className='NavBar'>
            <Link to="/" className="navItem active">Home</Link>
            <Link to="/calendar" className="navItem">Calendar</Link>
            <Link to="/today" className="navItem">Today</Link>
            <Link to="/profile" className="navItem">Profile</Link>
        </div>
    );
}; 

export default NavBar;