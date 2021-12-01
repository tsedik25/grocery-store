import React from "react";
import { Link } from "react-router-dom";
import { Container, Form, Image, Col, Row } from "react-bootstrap";

const TopBrands = (props) => {
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
                                                                        type="submit"
                                                                        name="submit"
                                                                        value="Add to cart"
                                                                        className="button"
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
