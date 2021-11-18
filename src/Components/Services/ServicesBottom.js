import {
    faBullhorn,
    faExternalLinkAlt,
    faPiggyBank,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ServicesBottom = () => {
    return (
        <div className="services-bottom">
            <Container>
                <Row>
                    <Col md={3} className="about_counter_left">
                        <i>
                            <FontAwesomeIcon icon={faUser} />
                        </i>
                        <p className="counter">89,147</p>
                        <h3>Followers</h3>
                    </Col>
                    <Col md={3} className="about_counter_left">
                        <i>
                            <FontAwesomeIcon icon={faPiggyBank} />
                        </i>
                        <p className="counter">54,598</p>
                        <h3>Savings</h3>
                    </Col>
                    <Col md={3} className="about_counter_left">
                        <i>
                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                        </i>
                        <p className="counter">83,983</p>
                        <h3>Support</h3>
                    </Col>
                    <Col md={3} className="about_counter_left">
                        <i>
                            <FontAwesomeIcon icon={faBullhorn} />
                        </i>
                        <p className="counter">45,894</p>
                        <h3>Popularity</h3>
                    </Col>
                </Row>
                <div className="clearfix"> </div>
            </Container>
        </div>
    );
};

export default ServicesBottom;
