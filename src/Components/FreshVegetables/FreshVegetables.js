import React from "react";
import img7 from "../../images/7.jpg";
import img8 from "../../images/8.jpg";
import img9 from "../../images/9.jpg";
import img10 from "../../images/10.jpg";
import img11 from "../../images/11.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const FreshVegetables = () => {
    return (
        <div className="fresh-vegetables">
            <div className="container">
                <h3>Top Products</h3>
                <div className="w3l_fresh_vegetables_grids">
                    <div className="col-md-3 w3l_fresh_vegetables_grid w3l_fresh_vegetables_grid_left">
                        <div className="w3l_fresh_vegetables_grid2">
                            <ul>
                                <li>
                                    <i>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </i>
                                    <a href="products.html">All Brands</a>
                                </li>
                                <li>
                                    <i>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </i>
                                    <a href="vegetables.html">Vegetables</a>
                                </li>
                                <li>
                                    <i>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </i>
                                    <a href="vegetables.html">Fruits</a>
                                </li>
                                <li>
                                    <i>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </i>
                                    <a href="drinks.html">Juices</a>
                                </li>
                                <li>
                                    <i>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </i>
                                    <a href="pet.html">Pet Food</a>
                                </li>
                                <li>
                                    <i>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </i>
                                    <a href="bread.html">Bread & Bakery</a>
                                </li>
                                <li>
                                    <i>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </i>
                                    <a href="household.html">Cleaning</a>
                                </li>
                                <li>
                                    <i>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </i>
                                    <a href="products.html">Spices</a>
                                </li>
                                <li>
                                    <i>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </i>
                                    <a href="products.html">Dry Fruits</a>
                                </li>
                                <li>
                                    <i>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </i>
                                    <a href="products.html">Dairy Products</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-9 w3l_fresh_vegetables_grid_right">
                        <div className="col-md-4 w3l_fresh_vegetables_grid">
                            <div className="w3l_fresh_vegetables_grid1">
                                <img
                                    src={img8}
                                    alt=" "
                                    className="img-responsive"
                                />
                            </div>
                        </div>
                        <div className="col-md-4 w3l_fresh_vegetables_grid">
                            <div className="w3l_fresh_vegetables_grid1">
                                <div className="w3l_fresh_vegetables_grid1_rel">
                                    <img
                                        src={img7}
                                        alt=" "
                                        className="img-responsive"
                                    />
                                    <div className="w3l_fresh_vegetables_grid1_rel_pos">
                                        <div className="more m1">
                                            <a
                                                href="products.html"
                                                className="button--saqui button--round-l button--text-thick"
                                                data-text="Shop now"
                                            >
                                                Shop now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w3l_fresh_vegetables_grid1_bottom">
                                <img
                                    src={img10}
                                    alt=" "
                                    className="img-responsive"
                                />
                                <div className="w3l_fresh_vegetables_grid1_bottom_pos">
                                    <h5>Special Offers</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 w3l_fresh_vegetables_grid">
                            <div className="w3l_fresh_vegetables_grid1">
                                <img
                                    src={img9}
                                    alt=" "
                                    className="img-responsive"
                                />
                            </div>
                            <div className="w3l_fresh_vegetables_grid1_bottom">
                                <img
                                    src={img11}
                                    alt=" "
                                    className="img-responsive"
                                />
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                        <div className="agileinfo_move_text">
                            <div className="agileinfo_marquee">
                                <h4>
                                    get{" "}
                                    <span className="blink_me">25% off</span> on
                                    first order and also get gift voucher
                                </h4>
                            </div>
                            <div className="agileinfo_breaking_news">
                                <span> </span>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
        </div>
    );
};

export default FreshVegetables;
