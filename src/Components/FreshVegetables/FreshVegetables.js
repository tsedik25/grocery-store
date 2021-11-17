import React from "react";
import img7 from "../../images/7.jpg";
import img8 from "../../images/8.jpg";
import img9 from "../../images/9.jpg";
import img10 from "../../images/10.jpg";
import img11 from "../../images/11.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Container, Col, Row, Image} from "react-bootstrap";

const FreshVegetables = () => {
    return (
        <div className="fresh-vegetables">
            <Container>
                <h3>Top Products</h3>
                <div className="w3l_fresh_vegetables_grids">
                    <Row>
                        <Col
                            md={3}
                            className="w3l_fresh_vegetables_grid w3l_fresh_vegetables_grid_left"
                        >
                            <div className="w3l_fresh_vegetables_grid2">
                                <ul>
                                    <li>
                                        <i>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </i>
                                        <Link to="products.html">
                                            All Brands
                                        </Link>
                                    </li>
                                    <li>
                                        <i>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </i>
                                        <Link to="vegetables.html">
                                            Vegetables
                                        </Link>
                                    </li>
                                    <li>
                                        <i>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </i>
                                        <Link to="vegetables.html">Fruits</Link>
                                    </li>
                                    <li>
                                        <i>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </i>
                                        <Link to="drinks.html">Juices</Link>
                                    </li>
                                    <li>
                                        <i>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </i>
                                        <Link to="pet.html">Pet Food</Link>
                                    </li>
                                    <li>
                                        <i>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </i>
                                        <Link to="bread.html">
                                            Bread & Bakery
                                        </Link>
                                    </li>
                                    <li>
                                        <i>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </i>
                                        <Link to="household.html">
                                            Cleaning
                                        </Link>
                                    </li>
                                    <li>
                                        <i>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </i>
                                        <Link to="products.html">Spices</Link>
                                    </li>
                                    <li>
                                        <i>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </i>
                                        <Link to="products.html">
                                            Dry Fruits
                                        </Link>
                                    </li>
                                    <li>
                                        <i>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </i>
                                        <Link to="products.html">
                                            Dairy Products
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={9} className="w3l_fresh_vegetables_grid_right">
                            <Row>
                                <Col
                                    md={4}
                                    className="w3l_fresh_vegetables_grid"
                                >
                                    <div className="w3l_fresh_vegetables_grid1">
                                        <Image fluid={true}
                                            src={img8}
                                            alt=" "
                                            className="img-responsive"
                                        />
                                    </div>
                                </Col>
                                <Col
                                    md={4}
                                    className="w3l_fresh_vegetables_grid"
                                >
                                    <div className="w3l_fresh_vegetables_grid1">
                                        <div className="w3l_fresh_vegetables_grid1_rel">
                                            <Image fluid={true}
                                                src={img7}
                                                alt=" "
                                                className="img-responsive"
                                            />
                                            <div className="w3l_fresh_vegetables_grid1_rel_pos">
                                                <div className="more m1">
                                                    <Link
                                                        to="products.html"
                                                        className="button--saqui button--round-l button--text-thick"
                                                        data-text="Shop now"
                                                    >
                                                        Shop now
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w3l_fresh_vegetables_grid1_bottom">
                                        <Image fluid={true}
                                            src={img10}
                                            alt=" "
                                            className="img-responsive"
                                        />
                                        <div className="w3l_fresh_vegetables_grid1_bottom_pos">
                                            <h5>Special Offers</h5>
                                        </div>
                                    </div>
                                </Col>

                                <Col
                                    md={4}
                                    className="w3l_fresh_vegetables_grid"
                                >
                                    <div className="w3l_fresh_vegetables_grid1">
                                        <Image fluid={true}
                                            src={img9}
                                            alt=" "
                                            className="img-responsive"
                                        />
                                    </div>
                                    <div className="w3l_fresh_vegetables_grid1_bottom">
                                        <Image fluid={true}
                                            src={img11}
                                            alt=" "
                                            className="img-responsive"
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <div className="clearfix"> </div>
                            <div className="agileinfo_move_text">
                                <div className="agileinfo_marquee">
                                    <h4>
                                        get{" "}
                                        <span className="blink_me">
                                            25% off
                                        </span>{" "}
                                        on first order and also get gift voucher
                                    </h4>
                                </div>
                                <div className="agileinfo_breaking_news">
                                    <span> </span>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </Col>
                    </Row>

                    <div className="clearfix"> </div>
                </div>
            </Container>
        </div>
    );
};

export default FreshVegetables;
