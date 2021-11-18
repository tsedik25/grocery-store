import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Image } from "react-bootstrap";
import image18 from "../../images/18.jpg";
import image19 from "../../images/19.jpg";
import image20 from "../../images/20.jpg";
import image4 from "../../images/4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const ServicesDesc = () => {
    return (
        <div className="w3l_banner_nav_right">
            <div className="services">
                <h3>Services</h3>
                <div className="w3ls_service_grids">
                    <Row>
                        <Col md={5} className="w3ls_service_grid_left">
                            <h4>cum soluta nobis est</h4>
                            <p>
                                Itaque earum rerum hic tenetur a sapiente
                                delectus, ut aut reiciendis voluptatibus maiores
                                alias consequatur aut perferendis doloribus
                                asperiores repellat.
                            </p>
                        </Col>
                        <Col md={7} className="w3ls_service_grid_right">
                            <Row>
                                <Col
                                    md={4}
                                    className="w3ls_service_grid_right_1"
                                >
                                    <Image
                                        fluid
                                        src={image18}
                                        alt=" "
                                        className="img-responsive"
                                    />
                                </Col>
                                <Col
                                    md={4}
                                    className="w3ls_service_grid_right_1"
                                >
                                    <Image
                                        fluid
                                        src={image19}
                                        alt=" "
                                        className="img-responsive"
                                    />
                                </Col>
                                <Col
                                    md={4}
                                    className="w3ls_service_grid_right_1"
                                >
                                    <Image
                                        fluid
                                        src={image20}
                                        alt=" "
                                        className="img-responsive"
                                    />
                                </Col>
                            </Row>
                            <div className="clearfix"> </div>
                        </Col>
                    </Row>
                    <div className="clearfix"> </div>
                </div>
                <div className="w3ls_service_grids1">
                    <Row>
                        <Col md={6} className="w3ls_service_grids1_left">
                            <Image
                                src={image4}
                                alt=" "
                                className="img-responsive"
                            />
                        </Col>
                        <Col md={6} className="w3ls_service_grids1_right">
                            <ul>
                                <li>
                                    <i>
                                        <FontAwesomeIcon
                                            icon={faLongArrowAltRight}
                                        />
                                    </i>
                                    et voluptates repudiandae sint et molestiae
                                </li>
                                <li>
                                    <i>
                                        <FontAwesomeIcon
                                            icon={faLongArrowAltRight}
                                        />
                                    </i>
                                    rerum necessitatibus saepe eveniet ut
                                </li>
                                <li>
                                    <i>
                                        <FontAwesomeIcon
                                            icon={faLongArrowAltRight}
                                        />
                                    </i>
                                    placeat facere possimus, omnis voluptas
                                </li>
                                <li>
                                    <i>
                                        <FontAwesomeIcon
                                            icon={faLongArrowAltRight}
                                        />
                                    </i>
                                    Et harum quidem rerum facilis est et
                                    expedita
                                </li>
                                <li>
                                    <i>
                                        <FontAwesomeIcon
                                            icon={faLongArrowAltRight}
                                        />
                                    </i>
                                    similique sunt in culpa qui officia deserunt
                                </li>
                                <li>
                                    <i>
                                        <FontAwesomeIcon
                                            icon={faLongArrowAltRight}
                                        />
                                    </i>
                                    odio dignissimos ducimus qui blanditiis
                                </li>
                            </ul>
                            <Link to="single.html">Shop Now</Link>
                        </Col>
                    </Row>
                    <div className="clearfix"> </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesDesc;
