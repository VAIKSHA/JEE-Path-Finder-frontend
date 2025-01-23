import React, { useState } from "react";
import logo from "../Images/logo.jpg";
import { IconButton, Menu, MenuItem } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import '../LocalCSS/navbar.css';

export default function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 fixed-top">
            <div className="container-fluid d-flex justify-content-between">
                <a className="navbar-brand d-flex align-items-center" style={{ marginRight: "20px" }}>
                    <img
                        src={logo}
                        alt="JEE Path Finder Logo"
                        style={{ height: "40px", marginRight: "10px" }}
                    />
                    <span style={{ fontWeight: "bold", fontSize: "20px", cursor: "pointer" }}>
                        JEE Path Finder
                    </span>
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link active mx-3" aria-current="page" href="/">Home</a>
                        <a className="nav-link mx-3" href="/study-material">Study Material</a>
                        <a className="nav-link mx-3" href="/cut-off">Cut-Off</a>
                        <a className="nav-link mx-3" href="/book-slot">Book Your Slot</a>
                        <a className="nav-link mx-3" href="/contact">Contact Us</a>
                        <a className="nav-link mx-3" href="/about">About Us</a>
                    </div>
                </div>

                <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="profile"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenuClick}
                    style={{ marginLeft: "20px", marginBottom: "5px", marginRight: "20px" }}
                >
                    <AccountCircleIcon style={{ fontSize: "2.5rem" }} />
                </IconButton>

                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                    <MenuItem onClick={handleMenuClose}>Login</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Signup</MenuItem>
                </Menu>
            </div>
        </nav>
    );
}