import React from "react";
import { Col, Form, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import offer from "../../images/offer.png";
import image17 from "../../images/17.png";
import image18 from "../../images/18.png";
import image19 from "../../images/19.png";
import image20 from "../../images/20.png";
import image21 from "../../images/21.png";
import image22 from "../../images/22.png";
import image23 from "../../images/23.png";
import tag from "../../images/tag.png";
import image24 from "../../images/24.png";
import image25 from "../../images/25.png";
import image26 from "../../images/26.png";
import image27 from "../../images/27.png";
import image28 from "../../images/28.png";

const RightHouseholdsBanner = () => {
    return (
        <div className="w3l_banner_nav_right">
            <div className="w3l_banner_nav_right_banner4">
                <h3>
                    Best Deals For New Products
                    <span className="blink_me"></span>
                </h3>
            </div>
            <div className="w3ls_w3l_banner_nav_right_grid w3ls_w3l_banner_nav_right_grid_sub">
                <h3>Household Products</h3>
                <div className="w3ls_w3l_banner_nav_right_grid1">
                    <h6>cleaning</h6>
                    <Row>
                        <Col md={3} className="w3ls_w3l_banner_left">
                            <div className="hover14 column">
                                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                                    <div className="agile_top_brand_left_grid_pos">
                                        <Image fluid fluid
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
                                                        <Image fluid
                                                            src={image17}
                                                            alt=" "
                                                            className="img-responsive"
                                                        />
                                                    </Link>
                                                    <p>
                                                        dishwash gel, lemon (1.5
                                                        ltr)
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
                                                                value="dishwash gel, lemon"
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
                                        <Image fluid
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
                                                        <Image fluid
                                                            src={image18}
                                                            alt=" "
                                                            className="img-responsive"
                                                        />
                                                    </Link>
                                                    <p>
                                                        dish wash bar (500 gm)
                                                    </p>
                                                    <h4>
                                                        $2.00 <span>$4.00</span>
                                                    </h4>
                                                </div>
                                                <div className="snipcart-details">
                                                    <form
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
                                                                value="dish wash bar"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="amount"
                                                                value="2.00"
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
                                                    </form>
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
                                        <Image fluid
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
                                                        <Image fluid
                                                            src={image19}
                                                            alt=" "
                                                            className="img-responsive"
                                                        />
                                                    </Link>
                                                    <p>air freshener (50 gm)</p>
                                                    <h4>
                                                        $3.00 <span>$5.00</span>
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
                                                                value="air freshener"
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
                                        <Image fluid
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
                                                        <Image fluid
                                                            src={image20}
                                                            alt=" "
                                                            className="img-responsive"
                                                        />
                                                    </Link>
                                                    <p>
                                                        toilet cleaner expert (1
                                                        ltr)
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
                                                                value="toilet cleaner expert"
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
                <div className="w3ls_w3l_banner_nav_right_grid1">
                    <h6>utensils</h6>
                    <Row>
                        <Col md={3} className="w3ls_w3l_banner_left">
                            <div className="hover14 column">
                                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                                    <div className="agile_top_brand_left_grid_pos">
                                        <Image fluid
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
                                                        <Image fluid
                                                            src={image21}
                                                            alt=" "
                                                            className="img-responsive"
                                                        />
                                                    </Link>
                                                    <p>
                                                        princeware packaging
                                                        container pack (6 no's)
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
                                                                value="princeware container"
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
                                        <Image fluid
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
                                                        <Image fluid
                                                            src={image22}
                                                            alt=" "
                                                            className="img-responsive"
                                                        />
                                                    </Link>
                                                    <p>
                                                        signoraware container
                                                        center press (900 ml)
                                                    </p>
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
                                                                value="container center press"
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
                        <Col md={3} className="w3ls_w3l_banner_left">
                            <div className="hover14 column">
                                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                                    <div className="tag">
                                        <Image fluid
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
                                                        <Image fluid
                                                            src={image23}
                                                            alt=" "
                                                            className="img-responsive"
                                                        />
                                                    </Link>
                                                    <p>
                                                        ship stainless steel
                                                        sauce pan single (1 pc)
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
                                                                value="stainless steel pan"
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
                                        <Image fluid
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
                                                        <Image fluid
                                                            src={image24}
                                                            alt=" "
                                                            className="img-responsive"
                                                        />
                                                    </Link>
                                                    <p>
                                                        omega stainless steel
                                                        puri dabba (1 pc)
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
                                                                value="stainless steel dabba"
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
                <div className="w3ls_w3l_banner_nav_right_grid1">
                    <h6>Pet Food</h6>
                    <Row>
                        <Col md={3} className="w3ls_w3l_banner_left">
                            <div className="hover14 column">
                                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                                    <div className="agile_top_brand_left_grid_pos">
                                        <Image fluid
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
                                                        <Image fluid
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
                                        <Image fluid
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
                                                        <Image fluid
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
                        <Col md={3} className="w3ls_w3l_banner_left">
                            <div className="hover14 column">
                                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                                    <div className="tag">
                                        <Image fluid
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
                                                        <Image fluid
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
                                        <Image fluid
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
                                                        <Image fluid
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

export default RightHouseholdsBanner;
