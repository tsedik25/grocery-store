import React, { useState } from "react";
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
    const addToCart = async (newDishes) => {
        let response = await fetch(baseUrl + "/api/v4/cart-product", {
            method: "POST",
            headers: {
                "Warehouse-Id": warehouseId,
                "Api-key": apiKey,
                Authorization: localStorage.getItem("access-token"),
            },
            body: JSON.stringify({
                productId: newDishes.id,
                priceId: newDishes.unitPrice[0].id,
                quantity: "1",
                note: "testing",
            }),
        });
        let data = response.json();
        console.log(response);
        if (response.status === 200) {
            alert("Item Added!");
            
        }
    };

    fetchProducts();
    return (
        <div className="w3l_banner_nav_right">
            <div className="w3ls_w3l_banner_nav_right_grid">
                <h3>All Products</h3>
                <div className="w3ls_w3l_banner_nav_right_grid1">
                    <Row>
                        {data != undefined ? (
                            data.map((item) => {
                                return (
                                    <Col
                                        md={3}
                                        className="mb-3 w3ls_w3l_banner_left"
                                    >
                                        <div className="hover14 column">
                                            <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                                                <div className="agile_top_brand_left_grid1">
                                                    <figure>
                                                        <div className="snipcart-item block">
                                                            <div className="snipcart-thumb">
                                                                <Link to="single.html">
                                                                    <Image
                                                                        src={
                                                                            item
                                                                                .images[0]
                                                                                .imageName
                                                                        }
                                                                        alt=" "
                                                                        className="img-responsive productsImage"
                                                                    />
                                                                </Link>
                                                                <p>
                                                                    {item.title}
                                                                </p>
                                                                <h4>
                                                                    NRs.{" "}
                                                                    {
                                                                        item
                                                                            .unitPrice[0]
                                                                            .sellingPrice
                                                                    }
                                                                </h4>
                                                            </div>
                                                            <div className="snipcart-details">
                                                                <form
                                                                    action="#"
                                                                    method="post"
                                                                >
                                                                    <Form.Control
                                                                        type="button"
                                                                        name="submit"
                                                                        value="Add to cart"
                                                                        className="button"
                                                                        onClick={() => addToCart(item)}
                                                                    />
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                );
                            })
                        ) : (
                            <div>LOADING...</div>
                        )}
                    </Row>
                    <div className="clearfix"> </div>
                </div>
            </div>
        </div>
    );
};

export default RightDealsBanner;
