import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Carousel, Row, Col } from "react-bootstrap";

export const Testimonials = () => {
    return (
        <div className="testimonials">
            <Container>
                <h3>Testimonials</h3>
                <div className="w3_testimonials_grids">
                    <Carousel>
                        <Carousel.Item>
                            <article>
                                <div className="banner-wrap">
                                    <Row>
                                        <Col
                                            md={6}
                                            className="w3_testimonials_grid"
                                        >
                                            <p>
                                                <i>
                                                    <FontAwesomeIcon
                                                        icon={faQuoteRight}
                                                    />
                                                </i>
                                                Itaque earum rerum hic tenetur a
                                                sapiente delectus, ut aut
                                                reiciendis voluptatibus maiores
                                                alias consequatur aut
                                                perferendis doloribus asperiores
                                                repellat.
                                            </p>
                                            <h4>
                                                Andrew Smith{" "}
                                                <span>Customer</span>
                                            </h4>
                                        </Col>
                                        <Col
                                            md={6}
                                            className="w3_testimonials_grid"
                                        >
                                            <p>
                                                <i>
                                                    <FontAwesomeIcon
                                                        icon={faQuoteRight}
                                                    />
                                                </i>
                                                Itaque earum rerum hic tenetur a
                                                sapiente delectus, ut aut
                                                reiciendis voluptatibus maiores
                                                alias consequatur aut
                                                perferendis doloribus asperiores
                                                repellat.
                                            </p>
                                            <h4>
                                                Thomson Richard{" "}
                                                <span>Customer</span>
                                            </h4>
                                        </Col>
                                    </Row>
                                    <div className="clearfix"> </div>
                                </div>
                            </article>
                        </Carousel.Item>
                        <Carousel.Item>
                            <article>
                                <div className="banner-wrap">
                                    <Row>
                                        <Col
                                            md={6}
                                            className="w3_testimonials_grid"
                                        >
                                            <p>
                                                <i>
                                                    <FontAwesomeIcon
                                                        icon={faQuoteRight}
                                                    />
                                                </i>
                                                Itaque earum rerum hic tenetur a
                                                sapiente delectus, ut aut
                                                reiciendis voluptatibus maiores
                                                alias consequatur aut
                                                perferendis doloribus asperiores
                                                repellat.
                                            </p>
                                            <h4>
                                                Crisp Kale <span>Customer</span>
                                            </h4>
                                        </Col>
                                        <Col
                                            md={6}
                                            className="w3_testimonials_grid"
                                        >
                                            <p>
                                                <i>
                                                    <FontAwesomeIcon
                                                        icon={faQuoteRight}
                                                    />
                                                </i>
                                                Itaque earum rerum hic tenetur a
                                                sapiente delectus, ut aut
                                                reiciendis voluptatibus maiores
                                                alias consequatur aut
                                                perferendis doloribus asperiores
                                                repellat.
                                            </p>
                                            <h4>
                                                John Paul <span>Customer</span>
                                            </h4>
                                        </Col>
                                    </Row>
                                    <div className="clearfix"> </div>
                                </div>
                            </article>
                        </Carousel.Item>
                        <Carousel.Item>
                            <article>
                                <div className="banner-wrap">
                                    <Row>
                                        <Col
                                            md={6}
                                            className="w3_testimonials_grid"
                                        >
                                            <p>
                                                <i>
                                                    <FontAwesomeIcon
                                                        icon={faQuoteRight}
                                                    />
                                                </i>
                                                Itaque earum rerum hic tenetur a
                                                sapiente delectus, ut aut
                                                reiciendis voluptatibus maiores
                                                alias consequatur aut
                                                perferendis doloribus asperiores
                                                repellat.
                                            </p>
                                            <h4>
                                                Rosy Carl <span>Customer</span>
                                            </h4>
                                        </Col>
                                        <Col
                                            md={6}
                                            className="w3_testimonials_grid"
                                        >
                                            <p>
                                                <i>
                                                    <FontAwesomeIcon
                                                        icon={faQuoteRight}
                                                    />
                                                </i>
                                                Itaque earum rerum hic tenetur a
                                                sapiente delectus, ut aut
                                                reiciendis voluptatibus maiores
                                                alias consequatur aut
                                                perferendis doloribus asperiores
                                                repellat.
                                            </p>
                                            <h4>
                                                Rockson Doe{" "}
                                                <span>Customer</span>
                                            </h4>
                                        </Col>
                                    </Row>
                                    <div className="clearfix"> </div>
                                </div>
                            </article>
                        </Carousel.Item>
                    </Carousel>

                    {/* <div
                        className="wmuSlider example1 animated wow slideInUp"
                        data-wow-delay=".5s"
                    >
                        <div className="wmuSliderWrapper">
                            <article style="position: absolute; width: 100%; opacity: 0;">
                                <div className="banner-wrap">
                                    <Col md={6} className="w3_testimonials_grid">
                                        <p>
                                            <i
                                                className="fa fa-quote-right"
                                                aria-hidden="true"
                                            ></i>
                                            Itaque earum rerum hic tenetur a
                                            sapiente delectus, ut aut reiciendis
                                            voluptatibus maiores alias
                                            consequatur aut perferendis
                                            doloribus asperiores repellat.
                                        </p>
                                        <h4>
                                            Andrew Smith <span>Customer</span>
                                        </h4>
                                    </Col>
                                    <Col md={6} className="w3_testimonials_grid">
                                        <p>
                                            <i
                                                className="fa fa-quote-right"
                                                aria-hidden="true"
                                            ></i>
                                            Itaque earum rerum hic tenetur a
                                            sapiente delectus, ut aut reiciendis
                                            voluptatibus maiores alias
                                            consequatur aut perferendis
                                            doloribus asperiores repellat.
                                        </p>
                                        <h4>
                                            Thomson Richard{" "}
                                            <span>Customer</span>
                                        </h4>
                                    </Col>
                                    <div className="clearfix"> </div>
                                </div>
                            </article>
                            <article style="position: absolute; width: 100%; opacity: 0;">
                                <div className="banner-wrap">
                                    <Col md={6} className="w3_testimonials_grid">
                                        <p>
                                            <i
                                                className="fa fa-quote-right"
                                                aria-hidden="true"
                                            ></i>
                                            Itaque earum rerum hic tenetur a
                                            sapiente delectus, ut aut reiciendis
                                            voluptatibus maiores alias
                                            consequatur aut perferendis
                                            doloribus asperiores repellat.
                                        </p>
                                        <h4>
                                            Crisp Kale <span>Customer</span>
                                        </h4>
                                    </Col>
                                    <Col md={6} className="w3_testimonials_grid">
                                        <p>
                                            <i
                                                className="fa fa-quote-right"
                                                aria-hidden="true"
                                            ></i>
                                            Itaque earum rerum hic tenetur a
                                            sapiente delectus, ut aut reiciendis
                                            voluptatibus maiores alias
                                            consequatur aut perferendis
                                            doloribus asperiores repellat.
                                        </p>
                                        <h4>
                                            John Paul <span>Customer</span>
                                        </h4>
                                    </Col>
                                    <div className="clearfix"> </div>
                                </div>
                            </article>
                            <article style="position: absolute; width: 100%; opacity: 0;">
                                <div className="banner-wrap">
                                    <Col md={6} className="w3_testimonials_grid">
                                        <p>
                                            <i
                                                className="fa fa-quote-right"
                                                aria-hidden="true"
                                            ></i>
                                            Itaque earum rerum hic tenetur a
                                            sapiente delectus, ut aut reiciendis
                                            voluptatibus maiores alias
                                            consequatur aut perferendis
                                            doloribus asperiores repellat.
                                        </p>
                                        <h4>
                                            Rosy Carl <span>Customer</span>
                                        </h4>
                                    </Col>
                                    <Col md={6} className="w3_testimonials_grid">
                                        <p>
                                            <i
                                                className="fa fa-quote-right"
                                                aria-hidden="true"
                                            ></i>
                                            Itaque earum rerum hic tenetur a
                                            sapiente delectus, ut aut reiciendis
                                            voluptatibus maiores alias
                                            consequatur aut perferendis
                                            doloribus asperiores repellat.
                                        </p>
                                        <h4>
                                            Rockson Doe <span>Customer</span>
                                        </h4>
                                    </Col>
                                    <div className="clearfix"> </div>
                                </div>
                            </article>
                        </div>
                    </div> */}
                </div>
            </Container>
        </div>
    );
};
