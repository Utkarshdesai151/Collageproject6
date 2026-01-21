import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <div className="header header-default header-sticky header-absolute">
            <div className={`fullscreen-sidebar ${isOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={toggle}>
                    <FaTimes />
                </button>
                <div className="sidebar-links">
                    <NavLink to="/" onClick={toggle}>Home</NavLink>
                    <NavLink to="/about" onClick={toggle}>About</NavLink>
                    <NavLink to="/services" onClick={toggle}>Services</NavLink>
                    <NavLink to="/contact" onClick={toggle}>Contact</NavLink>
                    <button className="btn btn-primary mt-4" onClick={() => { alert('Booking Appointment...'); toggle(); }}>
                        Book Appointment
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Sidebar;
