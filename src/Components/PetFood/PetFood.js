import React from "react";
import offer from "../../images/offer.png";
import tag from "../../images/tag.png";
import image4 from "../../images/4.png";
import image25 from "../../images/25.png";
import image26 from "../../images/26.png";
import image27 from "../../images/27.png";
import image28 from "../../images/28.png";
import image57 from "../../images/57.png";
import image58 from "../../images/58.png";
import image59 from "../../images/59.png";
import image60 from "../../images/60.png";
import image61 from "../../images/61.png";
import image62 from "../../images/62.png";
import image63 from "../../images/63.png";
import { Row, Col, Image, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const PetFood = () => {
    return (
        <div className="w3l_banner_nav_right">
            <div className="w3l_banner_nav_right_banner9 w3l_banner_nav_right_banner_pet">
                <h4>Your Pet Favourite Food</h4>
                <p>Sint occaecat cupidatat non proident</p>
                <Link to="single.html">Shop Now</Link>
            </div>
            <div className="w3ls_w3l_banner_nav_right_grid w3ls_w3l_banner_nav_right_grid_sub">
                <h3 className="w3l_fruit">Pet Food</h3>
                <div className="w3ls_w3l_banner_nav_right_grid1 w3ls_w3l_banner_nav_right_grid1_veg">
                    <Row>
                        <Col
                            md={3}
                            className="w3ls_w3l_banner_left w3ls_w3l_banner_left_asdfdfd"
                        >
                            <div className="hover14 column">
                                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                                    <div className="agile_top_brand_left_grid_pos">
                                        <Image
                                            fluid
                                            src={offer}
                                            alt=" "
                                            className="img-responsive"
                                        />
                                    </div>
                                    <div className="agile_top_brand_left_grid1">
                                        <figure>
                                            <div className="snipcart-item block">
                                                <div className="snipcart-thumb">
                                                    <Link to="single.html">
                                                        <Image
                                                            fluid
                                                            src={image57}
                                                            alt=" "
                                                            className="img-responsive"
                                                        />
                                                    </Link>
                                                    <p>
                                                        can - tuna for cats (400
                                                        gm)
                                                    </p>
                                                    <h4>
                                                        $8.00{" "}
                                                        <span>$10.00</span>
                                                    </h4>
                                                </div>
                                                <div className="snipcart-details">
                                                    <Form
                                                        action="#"
                                                        method="post"
                                                    >
                                                        <fieldset>
                                                            <Form.Control
                                                                type="hidden"
                                                                name="cmd"
                                                                value="_cart"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="add"
                                                                value="1"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="business"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="item_name"
                                                                value="can - tuna for cats"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="amount"
                                                                value="8.00"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="discount_amount"
                                                                value="1.00"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="currency_code"
                                                                value="USD"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="return"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="cancel_return"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="submit"
                                                                name="submit"
                                                                value="Add to cart"
                                                                className="button"
                                                            />
                                                        </fieldset>
                                                    </Form>
                                                </div>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="w3ls_w3l_banner_left">
                            <div className="hover14 column">
                                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                                    <div className="agile_top_brand_left_grid_pos">
                                        <Image
                                            fluid
                                            src={offer}
                                            alt=" "
                                            className="img-responsive"
                                        />
                                    </div>
                                    <div className="agile_top_brand_left_grid1">
                                        <figure>
                                            <div className="snipcart-item block">
                                                <div className="snipcart-thumb">
                                                    <Link to="single.html">
                                                        <Image
                                                            fluid
                                                            src={image58}
                                                            alt=" "
                                                            className="img-responsive"
                                                        />
                                                    </Link>
                                                    <p>
                                                        junior pet food (90 gm)
                                                    </p>
                                                    <h4>
                                                        $5.00 <span>$6.00</span>
                                                    </h4>
                                                </div>
                                                <div className="snipcart-details">
                                                    <Form
                                                        action="#"
                                                        method="post"
                                                    >
                                                        <fieldset>
                                                            <Form.Control
                                                                type="hidden"
                                                                name="cmd"
                                                                value="_cart"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="add"
                                                                value="1"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="business"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="item_name"
                                                                value="junior pet food"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="amount"
                                                                value="5.00"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="discount_amount"
                                                                value="1.00"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="currency_code"
                                                                value="USD"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="return"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="cancel_return"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="submit"
                                                                name="submit"
                                                                value="Add to cart"
                                                                className="button"
                                                            />
                                                        </fieldset>
                                                    </Form>
                                                </div>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col
                            md={3}
                            className="w3ls_w3l_banner_left w3ls_w3l_banner_left_asd"
                        >
                            <div className="hover14 column">
                                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                                    <div className="agile_top_brand_left_grid_pos">
                                        <Image
                                            fluid
                                            src={offer}
                                            alt=" "
                                            className="img-responsive"
                                        />
                                    </div>
                                    <div className="agile_top_brand_left_grid1">
                                        <figure>
                                            <div className="snipcart-item block">
                                                <div className="snipcart-thumb">
                                                    <Link to="single.html">
                                                        <Image
                                                            fluid
                                                            src={image4}
                                                            alt=" "
                                                            className="img-responsive"
                                                        />
                                                    </Link>
                                                    <p>
                                                        dogs food - junior (4
                                                        Kg)
                                                    </p>
                                                    <h4>
                                                        $9.00{" "}
                                                        <span>$11.00</span>
                                                    </h4>
                                                </div>
                                                <div className="snipcart-details">
                                                    <Form
                                                        action="#"
                                                        method="post"
                                                    >
                                                        <fieldset>
                                                            <Form.Control
                                                                type="hidden"
                                                                name="cmd"
                                                                value="_cart"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="add"
                                                                value="1"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="business"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="item_name"
                                                                value="dogs food - junior"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="amount"
                                                                value="9.00"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="discount_amount"
                                                                value="1.00"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="currency_code"
                                                                value="USD"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="return"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="cancel_return"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="submit"
                                                                name="submit"
                                                                value="Add to cart"
                                                                className="button"
                                                            />
                                                        </fieldset>
                                                    </Form>
                                                </div>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="w3ls_w3l_banner_left">
                            <div className="hover14 column">
                                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                                    <div className="agile_top_brand_left_grid_pos">
                                        <Image
                                            fluid
                                            src={offer}
                                            alt=" "
                                            className="img-responsive"
                                        />
                                    </div>
                                    <div className="agile_top_brand_left_grid1">
                                        <figure>
                                            <div className="snipcart-item block">
                                                <div className="snipcart-thumb">
                                                    <Link to="single.html">
                                                        <Image
                                                            fluid
                                                            src={image59}
                                                            alt=" "
                                                            className="img-responsive"
                                                        />
                                                    </Link>
                                                    <p>
                                                        gravy food for dogs (20
                                                        kg)
                                                    </p>
                                                    <h4>
                                                        $15.00{" "}
                                                        <span>$18.00</span>
                                                    </h4>
                                                </div>
                                                <div className="snipcart-details">
                                                    <Form
                                                        action="#"
                                                        method="post"
                                                    >
                                                        <fieldset>
                                                            <Form.Control
                                                                type="hidden"
                                                                name="cmd"
                                                                value="_cart"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="add"
                                                                value="1"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="business"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="item_name"
                                                                value="gravy food for dogs"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="amount"
                                                                value="15.00"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="discount_amount"
                                                                value="1.00"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="currency_code"
                                                                value="USD"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="return"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="cancel_return"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="submit"
                                                                name="submit"
                                                                value="Add to cart"
                                                                className="button"
                                                            />
                                                        </fieldset>
                                                    </Form>
                                                </div>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="clearfix"> </div>
                </div>
                <div className="w3ls_w3l_banner_nav_right_grid1 w3ls_w3l_banner_nav_right_grid1_veg">
                    <Row>
                        <Col
                            md={3}
                            className="w3ls_w3l_banner_left w3ls_w3l_banner_left_asdfdfd"
                        >
                            <div className="hover14 column">
                                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                                    <div className="agile_top_brand_left_grid_pos">
                                        <Image
                                            fluid
                                            src={offer}
                                            alt=" "
                                            className="img-responsive"
                                        />
                                    </div>
                                    <div className="agile_top_brand_left_grid1">
                                        <figure>
                                            <div className="snipcart-item block">
                                                <div className="snipcart-thumb">
                                                    <Link to="single.html">
                                                        <Image
                                                            fluid
                                                            src={image60}
                                                            alt=" "
                                                            className="img-responsive"
                                                        />
                                                    </Link>
                                                    <p>
                                                        meat for dogs (100 gm)
                                                    </p>
                                                    <h4>
                                                        $8.00{" "}
                                                        <span>$10.00</span>
                                                    </h4>
                                                </div>
                                                <div className="snipcart-details">
                                                    <Form
                                                        action="#"
                                                        method="post"
                                                    >
                                                        <fieldset>
                                                            <Form.Control
                                                                type="hidden"
                                                                name="cmd"
                                                                value="_cart"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="add"
                                                                value="1"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="business"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="item_name"
                                                                value="meat for dogs"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="amount"
                                                                value="8.00"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="discount_amount"
                                                                value="1.00"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="currency_code"
                                                                value="USD"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="return"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="cancel_return"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="submit"
                                                                name="submit"
                                                                value="Add to cart"
                                                                className="button"
                                                            />
                                                        </fieldset>
                                                    </Form>
                                                </div>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="w3ls_w3l_banner_left">
                            <div className="hover14 column">
                                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                                    <div className="agile_top_brand_left_grid_pos">
                                        <Image
                                            fluid
                                            src={offer}
                                            alt=" "
                                            className="img-responsive"
                                        />
                                    </div>
                                    <div className="agile_top_brand_left_grid1">
                                        <figure>
                                            <div className="snipcart-item block">
                                                <div className="snipcart-thumb">
                                                    <Link to="single.html">
                                                        <Image
                                                            fluid
                                                            src={image61}
                                                            alt=" "
                                                            className="img-responsive"
                                                        />
                                                    </Link>
                                                    <p>weekly pack (200 gm)</p>
                                                    <h4>
                                                        $5.00 <span>$8.00</span>
                                                    </h4>
                                                </div>
                                                <div className="snipcart-details">
                                                    <Form
                                                        action="#"
                                                        method="post"
                                                    >
                                                        <fieldset>
                                                            <Form.Control
                                                                type="hidden"
                                                                name="cmd"
                                                                value="_cart"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="add"
                                                                value="1"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="business"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="item_name"
                                                                value="weekly pack"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="amount"
                                                                value="5.00"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="discount_amount"
                                                                value="1.00"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="currency_code"
                                                                value="USD"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="return"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="cancel_return"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="submit"
                                                                name="submit"
                                                                value="Add to cart"
                                                                className="button"
                                                            />
                                                        </fieldset>
                                                    </Form>
                                                </div>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col
                            md={3}
                            className="w3ls_w3l_banner_left w3ls_w3l_banner_left_asd"
                        >
                            <div className="hover14 column">
                                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                                    <div className="tag">
                                        <Image
                                            fluid
                                            src={tag}
                                            alt=" "
                                            className="img-responsive"
                                        />
                                    </div>
                                    <div className="agile_top_brand_left_grid1">
                                        <figure>
                                            <div className="snipcart-item block">
                                                <div className="snipcart-thumb">
                                                    <Link to="single.html">
                                                        <Image
                                                            fluid
                                                            src={image62}
                                                            alt=" "
                                                            className="img-responsive"
                                                        />
                                                    </Link>
                                                    <p>dog munchies (500 gm)</p>
                                                    <h4>
                                                        $6.00 <span>$8.00</span>
                                                    </h4>
                                                </div>
                                                <div className="snipcart-details">
                                                    <Form
                                                        action="#"
                                                        method="post"
                                                    >
                                                        <fieldset>
                                                            <Form.Control
                                                                type="hidden"
                                                                name="cmd"
                                                                value="_cart"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="add"
                                                                value="1"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="business"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="item_name"
                                                                value="dog munchies"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="amount"
                                                                value="6.00"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="discount_amount"
                                                                value="1.00"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="currency_code"
                                                                value="USD"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="return"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="cancel_return"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="submit"
                                                                name="submit"
                                                                value="Add to cart"
                                                                className="button"
                                                            />
                                                        </fieldset>
                                                    </Form>
                                                </div>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="w3ls_w3l_banner_left">
                            <div className="hover14 column">
                                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                                    <div className="agile_top_brand_left_grid_pos">
                                        <Image
                                            fluid
                                            src={offer}
                                            alt=" "
                                            className="img-responsive"
                                        />
                                    </div>
                                    <div className="agile_top_brand_left_grid1">
                                        <figure>
                                            <div className="snipcart-item block">
                                                <div className="snipcart-thumb">
                                                    <Link to="single.html">
                                                        <Image
                                                            fluid
                                                            src={image63}
                                                            alt=" "
                                                            className="img-responsive"
                                                        />
                                                    </Link>
                                                    <p>
                                                        nutrition for cats (90
                                                        gm)
                                                    </p>
                                                    <h4>
                                                        $6.00 <span>$8.00</span>
                                                    </h4>
                                                </div>
                                                <div className="snipcart-details">
                                                    <Form
                                                        action="#"
                                                        method="post"
                                                    >
                                                        <fieldset>
                                                            <Form.Control
                                                                type="hidden"
                                                                name="cmd"
                                                                value="_cart"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="add"
                                                                value="1"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="business"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="item_name"
                                                                value="nutrition for cats"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="amount"
                                                                value="6.00"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="discount_amount"
                                                                value="1.00"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="currency_code"
                                                                value="USD"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="return"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="cancel_return"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="submit"
                                                                name="submit"
                                                                value="Add to cart"
                                                                className="button"
                                                            />
                                                        </fieldset>
                                                    </Form>
                                                </div>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="clearfix"> </div>
                </div>
                <div className="w3ls_w3l_banner_nav_right_grid1 w3ls_w3l_banner_nav_right_grid1_veg">
                    <Row>
                        <Col
                            md={3}
                            className="w3ls_w3l_banner_left w3ls_w3l_banner_left_asdfdfd"
                        >
                            <div className="hover14 column">
                                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                                    <div className="agile_top_brand_left_grid_pos">
                                        <Image
                                            fluid
                                            src={offer}
                                            alt=" "
                                            className="img-responsive"
                                        />
                                    </div>
                                    <div className="agile_top_brand_left_grid1">
                                        <figure>
                                            <div className="snipcart-item block">
                                                <div className="snipcart-thumb">
                                                    <Link to="single.html">
                                                        <Image
                                                            fluid
                                                            src={image25}
                                                            alt=" "
                                                            className="img-responsive"
                                                        />
                                                    </Link>
                                                    <p>
                                                        food for adult dogs (80
                                                        gms)
                                                    </p>
                                                    <h4>
                                                        $3.00 <span>$4.00</span>
                                                    </h4>
                                                </div>
                                                <div className="snipcart-details">
                                                    <Form
                                                        action="#"
                                                        method="post"
                                                    >
                                                        <fieldset>
                                                            <Form.Control
                                                                type="hidden"
                                                                name="cmd"
                                                                value="_cart"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="add"
                                                                value="1"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="business"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="item_name"
                                                                value="food for adult dogs"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="amount"
                                                                value="3.00"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="discount_amount"
                                                                value="1.00"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="currency_code"
                                                                value="USD"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="return"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="cancel_return"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="submit"
                                                                name="submit"
                                                                value="Add to cart"
                                                                className="button"
                                                            />
                                                        </fieldset>
                                                    </Form>
                                                </div>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="w3ls_w3l_banner_left">
                            <div className="hover14 column">
                                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                                    <div className="agile_top_brand_left_grid_pos">
                                        <Image
                                            fluid
                                            src={offer}
                                            alt=" "
                                            className="img-responsive"
                                        />
                                    </div>
                                    <div className="agile_top_brand_left_grid1">
                                        <figure>
                                            <div className="snipcart-item block">
                                                <div className="snipcart-thumb">
                                                    <Link to="single.html">
                                                        <Image
                                                            fluid
                                                            src={image26}
                                                            alt=" "
                                                            className="img-responsive"
                                                        />
                                                    </Link>
                                                    <p>
                                                        young adult dogs (1.2
                                                        kg)
                                                    </p>
                                                    <h4>
                                                        $6.00{" "}
                                                        <span>$10.00</span>
                                                    </h4>
                                                </div>
                                                <div className="snipcart-details">
                                                    <Form
                                                        action="#"
                                                        method="post"
                                                    >
                                                        <fieldset>
                                                            <Form.Control
                                                                type="hidden"
                                                                name="cmd"
                                                                value="_cart"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="add"
                                                                value="1"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="business"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="item_name"
                                                                value="young adult dogs"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="amount"
                                                                value="6.00"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="discount_amount"
                                                                value="1.00"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="currency_code"
                                                                value="USD"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="return"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="cancel_return"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="submit"
                                                                name="submit"
                                                                value="Add to cart"
                                                                className="button"
                                                            />
                                                        </fieldset>
                                                    </Form>
                                                </div>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col
                            md={3}
                            className="w3ls_w3l_banner_left w3ls_w3l_banner_left_asd"
                        >
                            <div className="hover14 column">
                                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                                    <div className="tag">
                                        <Image
                                            fluid
                                            src={tag}
                                            alt=" "
                                            className="img-responsive"
                                        />
                                    </div>
                                    <div className="agile_top_brand_left_grid1">
                                        <figure>
                                            <div className="snipcart-item block">
                                                <div className="snipcart-thumb">
                                                    <Link to="single.html">
                                                        <Image
                                                            fluid
                                                            src={image27}
                                                            alt=" "
                                                            className="img-responsive"
                                                        />
                                                    </Link>
                                                    <p>
                                                        cat food ocean fish (1.4
                                                        kg)
                                                    </p>
                                                    <h4>
                                                        $6.00 <span>$7.00</span>
                                                    </h4>
                                                </div>
                                                <div className="snipcart-details">
                                                    <Form
                                                        action="#"
                                                        method="post"
                                                    >
                                                        <fieldset>
                                                            <Form.Control
                                                                type="hidden"
                                                                name="cmd"
                                                                value="_cart"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="add"
                                                                value="1"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="business"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="item_name"
                                                                value="cat food ocean fish"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="amount"
                                                                value="6.00"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="discount_amount"
                                                                value="1.00"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="currency_code"
                                                                value="USD"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="return"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="cancel_return"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="submit"
                                                                name="submit"
                                                                value="Add to cart"
                                                                className="button"
                                                            />
                                                        </fieldset>
                                                    </Form>
                                                </div>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="w3ls_w3l_banner_left">
                            <div className="hover14 column">
                                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                                    <div className="agile_top_brand_left_grid_pos">
                                        <Image
                                            fluid
                                            src={offer}
                                            alt=" "
                                            className="img-responsive"
                                        />
                                    </div>
                                    <div className="agile_top_brand_left_grid1">
                                        <figure>
                                            <div className="snipcart-item block">
                                                <div className="snipcart-thumb">
                                                    <Link to="single.html">
                                                        <Image
                                                            fluid
                                                            src={image28}
                                                            alt=" "
                                                            className="img-responsive"
                                                        />
                                                    </Link>
                                                    <p>
                                                        chicken in jelly can
                                                        (400 gm)
                                                    </p>
                                                    <h4>
                                                        $7.00 <span>$9.00</span>
                                                    </h4>
                                                </div>
                                                <div className="snipcart-details">
                                                    <Form
                                                        action="#"
                                                        method="post"
                                                    >
                                                        <fieldset>
                                                            <Form.Control
                                                                type="hidden"
                                                                name="cmd"
                                                                value="_cart"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="add"
                                                                value="1"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="business"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="item_name"
                                                                value="chicken in jelly can"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="amount"
                                                                value="7.00"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="discount_amount"
                                                                value="1.00"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="currency_code"
                                                                value="USD"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="return"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="cancel_return"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="submit"
                                                                name="submit"
                                                                value="Add to cart"
                                                                className="button"
                                                            />
                                                        </fieldset>
                                                    </Form>
                                                </div>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="clearfix"> </div>
                </div>
            </div>
        </div>
    );
};

export default PetFood;
