import React, {useState} from "react";
import { Form, Col, Row, Image } from "react-bootstrap";
import image5 from "../../images/5.png";
import image6 from "../../images/6.png";
import image7 from "../../images/7.png";
import image8 from "../../images/8.png";
import image9 from "../../images/9.png";
import image10 from "../../images/10.png";
import image11 from "../../images/11.png";
import image12 from "../../images/12.png";
import image13jpg from "../../images/13.jpg";
import image13 from "../../images/13.png";
import image14jpg from "../../images/14.jpg";
import image14 from "../../images/14.png";
import image15 from "../../images/15.png";
import image15jpg from "../../images/15.jpg";
import image16 from "../../images/16.png";
import offer from "../../images/offer.png";
import tag from "../../images/tag.png";
import { Link } from "react-router-dom";

const RightDealsBanner = () => {
    const [data, setData] = useState([]);
    const baseUrl = "https://uat.ordering-boafresh.ekbana.net/";
    const warehouseId = 1;
    const apiKey =
        "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545";
    const fetchProducts = () => {
        fetch(baseUrl + "/api/v4/product", {
            method: "GET",
            headers: {
                "Warehouse-Id": warehouseId,
                "Api-key": apiKey,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.data);
                setData(data.data);
            });
    };

    fetchProducts();
    return (
        <div className="w3l_banner_nav_right">

            <div className="w3ls_w3l_banner_nav_right_grid">
                <h3>All Products</h3>
                <div className="w3ls_w3l_banner_nav_right_grid1">
                    <Row>
                        {data != undefined ? (
                            data.map(item => {
                                return (<Col md={3} className="mb-3 w3ls_w3l_banner_left">
                                    <div className="hover14 column">
                                        <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                                            
                                            <div className="agile_top_brand_left_grid1">
                                                <figure>
                                                    <div className="snipcart-item block">
                                                        <div className="snipcart-thumb">
                                                            <Link to="single.html">
                                                                <Image
                                                                    src={item.images[0].imageName}
                                                                    alt=" "
                                                                    className="img-responsive productsImage"

                                                                />
                                                            </Link>
                                                            <p>
                                                                {item.title}
                                                            </p>
                                                            <h4>
                                                                NRs. {item.unitPrice[0].sellingPrice}
                                                            </h4>
                                                        </div>
                                                        <div className="snipcart-details">
                                                            <form
                                                                action="#"
                                                                method="post"
                                                            >
                                                                
                                                                    <Form.Control
                                                                        type="submit"
                                                                        name="submit"
                                                                        value="Add to cart"
                                                                        className="button"
                                                                    />
                                                               
                                                            </form>
                                                        </div>
                                                    </div>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </Col>)
                            })
                        ) : (
                            <div>LOADING...</div>
                        )}

                        {/* <Col md={3} className="w3ls_w3l_banner_left">
                            <div className="hover14 column">
                                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                                    <div className="agile_top_brand_left_grid_pos">
                                        <Image
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
                                                            src={image6}
                                                            alt=" "
                                                            className="img-responsive"
                                                        />
                                                    </Link>
                                                    <p>
                                                        chings noodles (75 gm)
                                                    </p>
                                                    <h4>
                                                        $5.00 <span>$8.00</span>
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
                                                                value="chings noodles"
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
                                        <Image
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
                                                            src={image7}
                                                            alt=" "
                                                            className="img-responsive"
                                                        />
                                                    </Link>
                                                    <p>lahsun sev (150 gm)</p>
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
                                                                value="lahsun sev"
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
                                                            src={image8}
                                                            alt=" "
                                                            className="img-responsive"
                                                        />
                                                    </Link>
                                                    <p>
                                                        premium bake rusk (300
                                                        gm)
                                                    </p>
                                                    <h4>
                                                        $5.00 <span>$7.00</span>
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
                                                                value="premium bake rusk"
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
                        </Col> */}
                    </Row>
                    <div className="clearfix"> </div>
                </div>
                {/* <div className="w3ls_w3l_banner_nav_right_grid1">
                    <h6>vegetables & fruits</h6>
                    <Row>
                        <Col md={3} className="w3ls_w3l_banner_left">
                            <div className="hover14 column">
                                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                                    <div className="agile_top_brand_left_grid_pos">
                                        <Image
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
                                                            src={image9}
                                                            alt=" "
                                                            className="img-responsive"
                                                        />
                                                    </Link>
                                                    <p>fresh spinach (palak)</p>
                                                    <h4>
                                                        $2.00 <span>$3.00</span>
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
                                                                value="fresh spinach"
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
                                                            src={image10}
                                                            alt=" "
                                                            className="img-responsive"
                                                        />
                                                    </Link>
                                                    <p>
                                                        fresh mango dasheri (1
                                                        kg)
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
                                                                value="fresh mango dasheri"
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
                                        <Image
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
                                                            src={image11}
                                                            alt=" "
                                                            className="img-responsive"
                                                        />
                                                    </Link>
                                                    <p>
                                                        fresh apple red (1 kg)
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
                                                                value="fresh apple red"
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
                                                            src={image12}
                                                            alt=" "
                                                            className="img-responsive"
                                                        />
                                                    </Link>
                                                    <p>
                                                        fresh broccoli (500 gm)
                                                    </p>
                                                    <h4>
                                                        $4.00 <span>$6.00</span>
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
                                                                value="fresh broccoli"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="amount"
                                                                value="4.00"
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
                    <h6>beverages</h6>
                    <Row>
                        <Col md={3} className="w3ls_w3l_banner_left">
                            <div className="hover14 column">
                                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                                    <div className="agile_top_brand_left_grid_pos">
                                        <Image
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
                                                            src={image13}
                                                            alt=" "
                                                            className="img-responsive"
                                                        />
                                                    </Link>
                                                    <p>
                                                        mixed fruit juice (1
                                                        ltr)
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
                                                                value="mixed fruit juice"
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
                                                            src={image14}
                                                            alt=" "
                                                            className="img-responsive"
                                                        />
                                                    </Link>
                                                    <p>
                                                        prune juice - sunsweet
                                                        (1 ltr)
                                                    </p>
                                                    <h4>
                                                        $4.00 <span>$5.00</span>
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
                                                                value="prune juice"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="amount"
                                                                value="4.00"
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
                                        <Image
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
                                                            src={image15}
                                                            alt=" "
                                                            className="img-responsive"
                                                        />
                                                    </Link>
                                                    <p>
                                                        coco cola zero can (330
                                                        ml)
                                                    </p>
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
                                                                value="coco cola can"
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
                                                            src={image16}
                                                            alt=" "
                                                            className="img-responsive"
                                                        />
                                                    </Link>
                                                    <p>sprite bottle (2 ltr)</p>
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
                                                                value="sprite bottle"
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
                    </Row>
                    <div className="clearfix"> </div>
                </div> */}
            </div>
        </div>
    );
};

export default RightDealsBanner;
