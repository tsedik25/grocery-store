import React from "react";
import { Link } from "react-router-dom";
import { Container, Form, Image, Col, Row } from "react-bootstrap";

const TopBrands = (props) => {
    const baseUrl = "https://uat.ordering-boafresh.ekbana.net/";
    const warehouseId = 1;
    const apiKey =
        "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545";
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
        if (response.status === 200) {
            alert("Item Added!")
        }
    };

    return props.newDishes != undefined ? (
        <div className="top-brands">
            <Container>
                <h3>{props.newDishes.sectionDetails.title}</h3>
                <div className="agile_top_brands_grids">
                    <Row>
                        {props.newDishes.sectionDetails.products.map(
                            (product) => {
                                return (
                                    <Col md={3} className="top_brand_left">
                                        <div className="hover14 column">
                                            <div className="agile_top_brand_left_grid">
                                                <div className="agile_top_brand_left_grid1">
                                                    <figure>
                                                        <div className="snipcart-item block">
                                                            <div className="snipcart-thumb">
                                                                <Link to="single.html">
                                                                    <Image
                                                                        fluid={
                                                                            true
                                                                        }
                                                                        title=" "
                                                                        alt=" "
                                                                        src={
                                                                            product
                                                                                .images[0]
                                                                                .imageName
                                                                        }
                                                                    />
                                                                </Link>
                                                                <p>
                                                                    {
                                                                        product.title
                                                                    }
                                                                </p>
                                                                <h4>
                                                                    NRs.{" "}
                                                                    {
                                                                        product
                                                                            .unitPrice[0]
                                                                            .sellingPrice
                                                                    }
                                                                </h4>
                                                            </div>
                                                            <div className="snipcart-details top_brand_home_details">
                                                                <Form>
                                                                    <Form.Control
                                                                        type="button"
                                                                        name="submit"
                                                                        value="Add to cart"
                                                                        className="button"
                                                                        onClick={() => addToCart(product)}
                                                                    />
                                                                </Form>
                                                            </div>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                );
                            }
                        )}
                    </Row>

                    <div className="clearfix"> </div>
                </div>
            </Container>
        </div>
    ) : (
        <div>LOADING...</div>
    );
};

export default TopBrands;
