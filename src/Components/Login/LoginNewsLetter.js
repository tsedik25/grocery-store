import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChartBar,
    faShoppingCart,
    faTruck,
} from "@fortawesome/free-solid-svg-icons";

const LoginNewsLetter = () => {
    return (
        <div className="newsletter-top-serv-btm">
            <Container>
                <Row>
                    <Col md={4} className="wthree_news_top_serv_btm_grid">
                        <div className="wthree_news_top_serv_btm_grid_icon">
                            <i>
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </i>
                        </div>
                        <h3>Nam libero tempore</h3>
                        <p>
                            Temporibus autem quibusdam et aut officiis debitis
                            aut rerum necessitatibus saepe eveniet ut et
                            voluptates repudiandae sint et.
                        </p>
                    </Col>
                    <Col md={4} className="wthree_news_top_serv_btm_grid">
                        <div className="wthree_news_top_serv_btm_grid_icon">
                            <i>
                                <FontAwesomeIcon icon={faChartBar} />
                            </i>
                        </div>
                        <h3>officiis debitis aut rerum</h3>
                        <p>
                            Temporibus autem quibusdam et aut officiis debitis
                            aut rerum necessitatibus saepe eveniet ut et
                            voluptates repudiandae sint et.
                        </p>
                    </Col>
                    <Col md={4} className="wthree_news_top_serv_btm_grid">
                        <div className="wthree_news_top_serv_btm_grid_icon">
                            <i>
                                <FontAwesomeIcon icon={faTruck} />
                            </i>
                        </div>
                        <h3>eveniet ut et voluptates</h3>
                        <p>
                            Temporibus autem quibusdam et aut officiis debitis
                            aut rerum necessitatibus saepe eveniet ut et
                            voluptates repudiandae sint et.
                        </p>
                    </Col>
                </Row>
                <div className="clearfix"></div>
            </Container>
        </div>
    );
};

export default LoginNewsLetter;
