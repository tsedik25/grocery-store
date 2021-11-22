import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const LeftBanner = () => {
    return (
        <div className="w3l_banner_nav_left">
            <Nav
                className="sidebar navbar-nav"
                
            >
                <div className="sidebar-sticky"></div>
                <Nav.Item>
                    <Link className="nav-link" to="/products">
                        Branded Foods
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className="nav-link" to="/household">
                        Households
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <NavDropdown
                        title="Veggies & Fruits"
                        id="basic-nav-dropdown"
                    >
                        <div className="w3ls_vegetables">
                            <NavDropdown.Item>
                                <Link to="/vegetables" className="nav-link">
                                    Vegetables
                                </Link>
                            </NavDropdown.Item>

                            <NavDropdown.Item>
                                <Link to="/vegetables" className="nav-link">
                                    Fruits
                                </Link>
                            </NavDropdown.Item>
                        </div>
                    </NavDropdown>
                </Nav.Item>
                <Nav.Item>
                    <Link className="nav-link" to="/kitchen">
                        Kitchen
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className="nav-link" to="short-codes.html">
                        Short Codes
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <NavDropdown title="Beverages" id="basic-nav-dropdown">
                        <div className="w3ls_vegetables">
                            <NavDropdown.Item>
                                <Link className="nav-link" to="/drinks">
                                    Soft Drinks
                                </Link>
                            </NavDropdown.Item>

                            <NavDropdown.Item>
                                <Link className="nav-link" to="/drinks">
                                    Juices
                                </Link>
                            </NavDropdown.Item>
                        </div>
                    </NavDropdown>
                </Nav.Item>
                <Nav.Item>
                    <Link className="nav-link" to="/pet">
                        Pet Food
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <NavDropdown title="Frozen Foods" id="basic-nav-dropdown">
                        <div className="w3ls_vegetables">
                            <NavDropdown.Item>
                                <Link className="nav-link" to="/frozen">
                                    Frozen Snacks
                                </Link>
                            </NavDropdown.Item>

                            <NavDropdown.Item>
                                <Link className="nav-link" to="/frozen">
                                    Frozen Nonveg
                                </Link>
                            </NavDropdown.Item>
                        </div>
                    </NavDropdown>
                </Nav.Item>
                <Nav.Item>
                    <Link className="nav-link" to="/bread">
                        Bread & Bakery
                    </Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default LeftBanner;
