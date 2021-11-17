import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const LeftBanner = () => {
    return (
        <div className="w3l_banner_nav_left">
            <Nav
                className="col-md-12 d-none d-md-block bg-light sidebar navbar-nav"
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
                <Nav.Item>
                    <Link className="nav-link" to="products.html">Branded Foods</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className="nav-link" to="household.html">Households</Link>
                </Nav.Item>
                <Nav.Item>
                    <NavDropdown
                        title="Veggies & Fruits"
                        id="basic-nav-dropdown"
                    >
                        <Link className="nav-link" to="">
                            <NavDropdown.Item>Vegetables</NavDropdown.Item>
                        </Link>
                        <Link className="nav-link" to="">
                            <NavDropdown.Item>Fruits</NavDropdown.Item>
                        </Link>
                    </NavDropdown>
                </Nav.Item>
                <Nav.Item>
                    <Link className="nav-link" to="kitchen.html">Kitchen</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className="nav-link" to="short-codes.html">Short Codes</Link>
                </Nav.Item>
                <Nav.Item>
                    <NavDropdown title="Beverages" id="basic-nav-dropdown">
                        <Link className="nav-link" to="">
                            <NavDropdown.Item>Soft Drinks</NavDropdown.Item>
                        </Link>
                        <Link className="nav-link" to="">
                            <NavDropdown.Item>Juices</NavDropdown.Item>
                        </Link>
                    </NavDropdown>
                </Nav.Item>
                <Nav.Item>
                    <Link className="nav-link" to="kitchen.html">Pet Food</Link>
                </Nav.Item>
                <Nav.Item>
                    <NavDropdown title="Frozen Foods" id="basic-nav-dropdown">
                        <Link className="nav-link" to="">
                            <NavDropdown.Item>Frozen Snacks</NavDropdown.Item>
                        </Link>
                        <Link className="nav-link" to="">
                            <NavDropdown.Item>Frozen Nonveg</NavDropdown.Item>
                        </Link>
                    </NavDropdown>
                </Nav.Item>
                <Nav.Item>
                    <Link className="nav-link" to="kitchen.html">Bread & Bakery</Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default LeftBanner;
