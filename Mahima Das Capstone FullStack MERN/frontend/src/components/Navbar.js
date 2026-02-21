import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Button, NavDropdown, Badge } from 'react-bootstrap';
import { FaStore, FaUserCircle, FaSignOutAlt, FaBell } from 'react-icons/fa';
import API from "../api";

const AppNavbar = () => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    const navigate = useNavigate();

    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        if (token) {
            fetchNotifications();
        }
    }, [token]);

    const fetchNotifications = async () => {
        try {
            const { data } = await API.get("/notifications", {
                headers: { Authorization: `Bearer ${token}` }
            });
            setNotifications(data);
        } catch (error) {
            console.error("Error fetching notifications", error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        navigate("/login");
    };

    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className="shadow-sm mb-4 sticky-top">
            <Container>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center text-primary fw-bold">
                    <FaStore className="me-2 fs-4" />
                    <span>PlayStore</span>
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" className="fw-semibold">Home</Nav.Link>
                        {role === "owner" && (
                            <Nav.Link as={Link} to="/dashboard" className="fw-semibold text-success">
                                Dashboard
                            </Nav.Link>
                        )}
                    </Nav>
                    
                    <Nav className="align-items-center">
                        {!token ? (
                            <>
                                <Nav.Link as={Link} to="/login" className="fw-semibold me-2">Login</Nav.Link>
                                <Button as={Link} to="/register" variant="primary" className="rounded-pill px-4 fw-bold">
                                    Join Now
                                </Button>
                            </>
                        ) : (
                            <>

                                <NavDropdown 
                                title={
                                        <div className="position-relative d-inline-block px-2">
                                            <FaBell size={20} className="text-secondary mt-1" />
                                            {notifications.length > 0 && (
                                                <Badge 
                                                    bg="danger" 
                                                    pill 
                                                    className="position-absolute top-0 start-100 translate-middle border border-light"
                                                    style={{ fontSize: '0.65rem' }}
                                                >
                                                    {notifications.length}
                                                </Badge>
                                            )}
                                        </div>
                                    }
                                    id="notification-dropdown"
                                    align="end"
                                    className="me-3 no-caret"
                                >
                                    <NavDropdown.Header className="fw-bold text-dark border-bottom pb-2 mb-2">
                                        App Updates
                                    </NavDropdown.Header>
                                    
                                    <div style={{ maxHeight: '300px', overflowY: 'auto', minWidth: '280px' }}>
                                        {notifications.length > 0 ? (
                                            notifications.map((notif) => (
                                                <NavDropdown.Item key={notif.id || notif._id} className="text-wrap py-2 border-bottom">
                                                    <div className="d-flex justify-content-between align-items-center mb-1">
                                                        <strong className="text-primary small">{notif.appName}</strong>
                                                        <small className="text-muted" style={{ fontSize: '0.7rem' }}>
                                                            {new Date(notif.date).toLocaleDateString()}
                                                        </small>
                                                    </div>
                                                    <p className="mb-0 text-dark small" style={{ lineHeight: '1.4' }}>
                                                        {notif.message}
                                                    </p>
                                                </NavDropdown.Item>
                                            ))
                                        ) : (
                                            <div className="text-center text-muted p-3 small">
                                                No new updates.
                                            </div>
                                        )}
                                    </div>
                                </NavDropdown>

                                <NavDropdown 
                                    title={
                                        <span className="fw-bold text-success">
                                            <FaUserCircle className="me-1 mb-1" size={18} /> 
                                            Hello, {role === "owner" ? "Owner" : "User"}
                                        </span>
                                    } 
                                    id="user-dropdown"
                                    align="end"
                                >
                                    <NavDropdown.Item onClick={handleLogout} className="text-danger fw-semibold">
                                        <FaSignOutAlt className="me-2" /> Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>


            <style type="text/css">
                {`
                    .no-caret .dropdown-toggle::after {
                        display: none;
                    }
                `}
            </style>
        </Navbar>
    );
};

export default AppNavbar;