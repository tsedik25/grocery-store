import React from "react";
import card from "../../images/card.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDribbble,
    faFacebook,
    faGooglePlus,
    faInstagram,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="col-md-3 w3_footer_grid">
                    <h3>information</h3>
                    <ul className="w3_footer_grid_list">
                        <li>
                            <a href="events.html">Events</a>
                        </li>
                        <li>
                            <a href="about.html">About Us</a>
                        </li>
                        <li>
                            <a href="products.html">Best Deals</a>
                        </li>
                        <li>
                            <a href="services.html">Services</a>
                        </li>
                        <li>
                            <a href="short-codes.html">Short Codes</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3 w3_footer_grid">
                    <h3>policy info</h3>
                    <ul className="w3_footer_grid_list">
                        <li>
                            <a href="faqs.html">FAQ</a>
                        </li>
                        <li>
                            <a href="privacy.html">privacy policy</a>
                        </li>
                        <li>
                            <a href="privacy.html">terms of use</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3 w3_footer_grid">
                    <h3>what in stores</h3>
                    <ul className="w3_footer_grid_list">
                        <li>
                            <a href="pet.html">Pet Food</a>
                        </li>
                        <li>
                            <a href="frozen.html">Frozen Snacks</a>
                        </li>
                        <li>
                            <a href="kitchen.html">Kitchen</a>
                        </li>
                        <li>
                            <a href="products.html">Branded Foods</a>
                        </li>
                        <li>
                            <a href="household.html">Households</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3 w3_footer_grid">
                    <h3>twitter posts</h3>
                    <ul className="w3_footer_grid_list1">
                        <li>
                            <label>
                                <FontAwesomeIcon icon={faTwitter} />
                            </label>
                            <i>01 day ago</i>
                            <span>
                                Non numquam <a href="#">http://sd.ds/13jklf#</a>
                                eius modi tempora incidunt ut labore et
                                <a href="#">http://sd.ds/1389kjklf#</a>quo
                                nulla.
                            </span>
                        </li>
                        <li>
                            <label>
                                <FontAwesomeIcon icon={faTwitter} />
                            </label>
                            <i>02 day ago</i>
                            <span>
                                Con numquam <a href="#">http://fd.uf/56hfg#</a>
                                eius modi tempora incidunt ut labore et
                                <a href="#">http://fd.uf/56hfg#</a>quo nulla.
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="clearfix"> </div>
                <div className="agile_footer_grids">
                    <div className="col-md-3 w3_footer_grid agile_footer_grids_w3_footer">
                        <div className="w3_footer_grid_bottom">
                            <h4>100% secure payments</h4>
                            <img
                                src={card}
                                alt=" "
                                className="img-responsive"
                            />
                        </div>
                    </div>
                    <div className="col-md-3 w3_footer_grid agile_footer_grids_w3_footer">
                        <div className="w3_footer_grid_bottom">
                            <h5>connect with us</h5>
                            <ul className="agileits_social_icons">
                                <li>
                                    <a href="#" className="facebook">
                                        <i><FontAwesomeIcon icon={faFacebook} /></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="twitter">
                                    <i><FontAwesomeIcon icon={faTwitter} /></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="google">
                                    <i><FontAwesomeIcon icon={faGooglePlus} /></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="instagram">
                                    <i><FontAwesomeIcon icon={faInstagram} /></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="dribbble">
                                    <i><FontAwesomeIcon icon={faDribbble} /></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="clearfix"> </div>
                </div>
                <div className="wthree_footer_copy">
                    <p>
                        © 2016 Grocery Store. All rights reserved | Design by{" "}
                        <a href="http://w3layouts.com/">W3layouts</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
