import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, NavDropdown, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faPhoneAlt,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Navbars = () => {
    const access_token = localStorage.getItem("access-token");
    const userIcon = <FontAwesomeIcon icon={faUser} />;
    const [search, setSearch] = useState("");
    return (
        <>
            <div className="agileits_header">
                <div className="w3l_offers">
                    <Link to="/products">Today's special Offers !</Link>
                </div>
                <div className="w3l_search">
                    <Form>
                        <Form.Control
                            type="text"
                            name="Product"
                            placeholder="Search Link product..."
                            value={search}
                            required=""
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <Link to={"/search/" + search} ><Form.Control type="submit" value=" " /></Link>
                    </Form>
                </div>
                <div className="product_list_header">
                    <Link to="/checkout" className="last">
                        <fieldset>
                            <Form.Control
                                type="submit"
                                name="submit"
                                value="View your cart"
                                className="button"
                            />
                        </fieldset>
                    </Link>
                </div>
                <div className="w3l_header_right">
                    <NavDropdown
                        title={userIcon}
                        className="userIconDropdown"
                        id="basic-nav-dropdown"
                    >
                        <div className="w3ls_vegetables">
                            {access_token == undefined ? (
                                <>
                                    <NavDropdown.Item>
                                        <Link to="/login" className="nav-link">
                                            Login
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/login" className="nav-link">
                                            Sign Up
                                        </Link>
                                    </NavDropdown.Item>
                                </>
                            ) : (
                                <>
                                    <NavDropdown.Item>
                                        <Link
                                            to="/profile"
                                            className="nav-link"
                                        >
                                            Profile
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <div className="nav-link" onClick={() => {
                                            localStorage.removeItem("access-token")
                                            window.location.href="/"
                                            }}>
                                            Logout
                                        </div>
                                    </NavDropdown.Item>
                                </>
                            )}
                        </div>
                    </NavDropdown>
                </div>
                <div className="w3l_header_right1">
                    <h2>
                        <Link to="/mail">Contact Us</Link>
                    </h2>
                </div>
                <div className="clearfix"> </div>
            </div>
            <div className="logo_products">
                <Container>
                    <div className="w3ls_logo_products_left">
                        <h1>
                            <Link to="/">
                                <span>Grocery</span> Store
                            </Link>
                        </h1>
                    </div>
                    <div className="w3ls_logo_products_left1">
                        <ul className="special_items">
                            <li>
                                <Link to="/events">Events</Link>
                                <i>/</i>
                            </li>
                            <li>
                                <Link to="/about">About Us</Link>
                                <i>/</i>
                            </li>
                            <li>
                                <Link to="/products">Best Deals</Link>
                                <i>/</i>
                            </li>
                            <li>
                                <Link to="/services">Services</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w3ls_logo_products_left1">
                        <ul className="phone_email">
                            <li>
                                <FontAwesomeIcon icon={faPhoneAlt} />
                                (+0123) 234 567
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <a href="mailto:store@grocery.com">
                                    store@grocery.com
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="clearfix"> </div>
                </Container>
            </div>
        </>
    );
};

export default Navbars;
