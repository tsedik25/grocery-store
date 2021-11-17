import React from "react";
import { Link } from "react-router-dom";
import {
    Form,
    Button,
    Nav,
    Navbar,
    NavDropdown,
    Container,
    Dropdown,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faPhoneAlt,
    faEnvelope,
    faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
// import "./Navbars.css";
// import "../../images/img-sp.png";

const Navbars = () => {
    const userIcon = <FontAwesomeIcon icon={faUser} />;
    return (
        <>
            <div className="agileits_header">
                <div className="w3l_offers">
                    <Link to="products.html">Today's special Offers !</Link>
                </div>
                <div className="w3l_search">
                    <Form>
                        <Form.Control
                            type="text"
                            name="Product"
                            value="Search Link product..."
                            required=""
                        />
                        <Form.Control type="submit" value=" " />
                    </Form>
                </div>
                <div className="product_list_header">
                    <Form action="#" method="post" className="last">
                        <fieldset>
                            <Form.Control
                                type="hidden"
                                name="cmd"
                                value="_cart"
                            />
                            <Form.Control
                                type="hidden"
                                name="display"
                                value="1"
                            />
                            <Form.Control
                                type="submit"
                                name="submit"
                                value="View your cart"
                                className="button"
                            />
                        </fieldset>
                    </Form>
                </div>
                <div className="w3l_header_right">
                    <NavDropdown title={userIcon} id="basic-nav-dropdown">
                        <Link to = ""><NavDropdown.Item>
                            Login
                        </NavDropdown.Item></Link>
                        <Link to = ""><NavDropdown.Item>
                            Sign Up
                        </NavDropdown.Item></Link>
                    </NavDropdown>
                </div>
                <div className="w3l_header_right1">
                    <h2>
                        <Link to="mail.html">Contact Us</Link>
                    </h2>
                </div>
                <div className="clearfix"> </div>
            </div>
            <div className="logo_products">
                <Container>
                    <div className="w3ls_logo_products_left">
                        <h1>
                            <Link to="index.html">
                                <span>Grocery</span> Store
                            </Link>
                        </h1>
                    </div>
                    <div className="w3ls_logo_products_left1">
                        <ul className="special_items">
                            <li>
                                <Link to="events.html">Events</Link>
                                <i>/</i>
                            </li>
                            <li>
                                <Link to="about.html">About Us</Link>
                                <i>/</i>
                            </li>
                            <li>
                                <Link to="products.html">Best Deals</Link>
                                <i>/</i>
                            </li>
                            <li>
                                <Link to="services.html">Services</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w3ls_logo_products_left1">
                        <ul className="phone_email">
                            <li>
                                <FontAwesomeIcon icon = {faPhoneAlt}/>
                                (+0123) 234 567
                            </li>
                            <li>
                            <   FontAwesomeIcon icon = {faEnvelope}/>
                                <Link to="mailto:store@grocery.com">
                                    store@grocery.com
                                </Link>
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
