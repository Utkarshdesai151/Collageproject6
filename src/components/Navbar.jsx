import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";
import Logo from "../assets/Header/Satwarth solution.svg";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    // Handle scroll for shrink and glassmorphism effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when sidebar is open
    useEffect(() => {
        document.body.style.overflow = isSidebarOpen ? "hidden" : "unset";
    }, [isSidebarOpen]);

    return (
        <>
            <header className={`custom-navbar ${isScrolled ? "navbar-shrunk" : ""}`}>
                <div className="container-fluid">
                    <div className="navbar-content">
                        <div className="site-logo">
                            <Link to="/">
                                <img src={Logo} alt="Satwarth Logo" />
                            </Link>
                        </div>
                        <nav className="header-menu-wrap d-none d-md-block">
                            <ul className="main-menu">
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/about">Pages</NavLink></li>
                                <li><NavLink to="/services">Services</NavLink></li>
                                <li><NavLink to="/shop">Shop</NavLink></li>
                                <li><NavLink to="/blog">Blog</NavLink></li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                            </ul>
                        </nav>
                        <div className="header-right">
                            <NavLink to="/contact" className="rr-primary-btn d-none d-md-inline-flex">
                                Make An Appointment
                            </NavLink>
                            <button className="mobile-toggle d-md-none" onClick={toggleSidebar} aria-label="Toggle Menu">
                                <FaBars />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />
        </>
    );
};

export default Navbar;