import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const RightBanner = () => {
    return (
        <div className="w3l_banner_nav_right">
            <Carousel>
                <Carousel.Item>
                    <div className="w3l_banner_nav_right_banner">
                        <h3>
                            Make your <span>food</span> with Spicy.
                        </h3>
                        <div className="more">
                            <Link
                                to="products.html"
                                className="button--saqui button--round-l button--text-thick"
                                data-text="Shop now"
                            >
                                Shop now
                            </Link>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="w3l_banner_nav_right_banner1">
                        <h3>
                            Make your <span>food</span> with Spicy.
                        </h3>
                        <div className="more">
                            <Link
                                to="products.html"
                                className="button--saqui button--round-l button--text-thick"
                                data-text="Shop now"
                            >
                                Shop now
                            </Link>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="w3l_banner_nav_right_banner2">
                        <h3>
                            upto <i>50%</i> off.
                        </h3>
                        <div className="more">
                            <Link
                                to="products.html"
                                className="button--saqui button--round-l button--text-thick"
                                data-text="Shop now"
                            >
                                Shop now
                            </Link>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>

            
        </div>
    );
};

export default RightBanner;
