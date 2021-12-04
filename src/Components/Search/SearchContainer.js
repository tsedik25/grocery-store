import React from 'react';
import { Row, Col, Image, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SearchContainer = (props) => {
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
        console.log(response);
        if (response.status === 200) {
            alert("Item Added!");
            
        }
    };

    return (
        <div className="w3l_banner_nav_right">
            <div className="w3ls_w3l_banner_nav_right_grid">
                <h3>{props.searchQuery.toUpperCase()} PRODUCTS</h3>
                <div className="w3ls_w3l_banner_nav_right_grid1">
                    <Row>
                        {props.data != undefined ? (
                            props.data.map((item) => {
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
    )
}

export default SearchContainer
