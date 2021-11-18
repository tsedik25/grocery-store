import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import image19 from "../../images/19.jpg";
import image15 from "../../images/15.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faBullseye, faClock, faCog, faCreditCard, faEye, faTrophy, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const RightEventBanner = () => {
    return (
        <div className="w3l_banner_nav_right">
            <div className="events">
                <h3>Events</h3>
                <div className="w3agile_event_grids">
                    <Row>
                        <Col md={6} className="w3agile_event_grid">
                            <Row>
                                <Col md={3} className="w3agile_event_grid_left">
                                    <i><FontAwesomeIcon icon = {faBullhorn}/></i>
                                </Col>
                                <Col
                                    md={9}
                                    className="w3agile_event_grid_right"
                                >
                                    <h4>cum soluta nobis eligendi</h4>
                                    <p>
                                        Itaque earum rerum hic tenetur a
                                        sapiente delectus, ut aut reiciendis
                                        voluptatibus.
                                    </p>
                                </Col>
                            </Row>
                            <div className="clearfix"> </div>
                        </Col>
                        <Col md={6} className="w3agile_event_grid">
                            <Row>
                                <Col md={3} className="w3agile_event_grid_left">
                                <i><FontAwesomeIcon icon = {faBullseye}/></i>
                                </Col>
                                <Col
                                    md={9}
                                    className="w3agile_event_grid_right"
                                >
                                    <h4>rerum hic tenetur a sapiente</h4>
                                    <p>
                                        Itaque earum rerum hic tenetur a
                                        sapiente delectus, ut aut reiciendis
                                        voluptatibus.
                                    </p>
                                </Col>
                            </Row>
                            <div className="clearfix"> </div>
                        </Col>
                    </Row>
                    <div className="clearfix"> </div>
                </div>
                <div className="w3agile_event_grids">
                    <Row>
                        <Col md={6} className="w3agile_event_grid">
                            <Row>
                                <Col md={3} className="w3agile_event_grid_left">
                                <i><FontAwesomeIcon icon = {faCreditCard}/></i>
                                </Col>
                                <Col
                                    md={9}
                                    className="w3agile_event_grid_right"
                                >
                                    <h4>earum rerum tenetur sapiente</h4>
                                    <p>
                                        Itaque earum rerum hic tenetur a
                                        sapiente delectus, ut aut reiciendis
                                        voluptatibus.
                                    </p>
                                </Col>
                            </Row>
                            <div className="clearfix"> </div>
                        </Col>
                        <Col md={6} className="w3agile_event_grid">
                            <Row>
                                <Col md={3} className="w3agile_event_grid_left">
                                <i><FontAwesomeIcon icon = {faEye}/></i>
                                </Col>
                                <Col
                                    md={9}
                                    className="w3agile_event_grid_right"
                                >
                                    <h4>quibu aut officiis debitis</h4>
                                    <p>
                                        Itaque earum rerum hic tenetur a
                                        sapiente delectus, ut aut reiciendis
                                        voluptatibus.
                                    </p>
                                </Col>
                            </Row>
                            <div className="clearfix"> </div>
                        </Col>
                    </Row>
                    <div className="clearfix"> </div>
                </div>
                <div className="w3agile_event_grids">
                    <Row>
                        <Col md={6} className="w3agile_event_grid">
                            <Row>
                                <Col md={3} className="w3agile_event_grid_left">
                                <i><FontAwesomeIcon icon = {faCog}/></i>
                                </Col>
                                <Col
                                    md={9}
                                    className="w3agile_event_grid_right"
                                >
                                    <h4>necessitatibus saepe eveniet</h4>
                                    <p>
                                        Itaque earum rerum hic tenetur a
                                        sapiente delectus, ut aut reiciendis
                                        voluptatibus.
                                    </p>
                                </Col>
                            </Row>
                            <div className="clearfix"> </div>
                        </Col>
                        <Col md={6} className="w3agile_event_grid">
                            <Row>
                                <Col md={3} className="w3agile_event_grid_left">
                                <i><FontAwesomeIcon icon = {faTrophy}/></i>
                                </Col>
                                <Col
                                    md={9}
                                    className="w3agile_event_grid_right"
                                >
                                    <h4>repudiandae sint et molestiae</h4>
                                    <p>
                                        Itaque earum rerum hic tenetur a
                                        sapiente delectus, ut aut reiciendis
                                        voluptatibus.
                                    </p>
                                </Col>
                            </Row>
                            <div className="clearfix"> </div>
                        </Col>
                    </Row>
                    <div className="clearfix"> </div>
                </div>
                <div className="events-bottom">
                    <Row>
                        <Col md={6} className="events_bottom_left">
                            <Row>
                                <Col md={4} className="events_bottom_left1">
                                    <div className="events_bottom_left1_grid">
                                        <h4>20</h4>
                                        <p>July, 2016</p>
                                    </div>
                                </Col>
                                <Col md={8} className="events_bottom_left2">
                                    <Image fluid
                                        src={image15}
                                        alt=" "
                                        className="img-responsive"
                                    />
                                    <h4>ut aut reiciendis facere possimus</h4>
                                    <ul>
                                        <li>
                                        <i><FontAwesomeIcon icon = {faClock}/></i>
                                            3:00 PM
                                        </li>
                                        <li>
                                        <i><FontAwesomeIcon icon = {faUser}/></i>
                                            <Link to = "">Admin</Link>
                                        </li>
                                    </ul>
                                    <p>
                                        Nam libero tempore, cum soluta nobis est
                                        eligendi optio cumque nihil impedit quo
                                        minus id quod maxime placeat facere
                                        possimus, omnis voluptas assumenda est.
                                    </p>
                                </Col>
                            </Row>
                            <div className="clearfix"> </div>
                        </Col>
                        <Col md={6} className="events_bottom_left">
                            <Row>
                                <Col md={4} className="events_bottom_left1">
                                    <div className="events_bottom_left1_grid">
                                        <h4>21</h4>
                                        <p>July, 2016</p>
                                    </div>
                                </Col>
                                <Col md={8} className="events_bottom_left2">
                                    <Image fluid
                                        src={image19}
                                        alt=" "
                                        className="img-responsive"
                                    />
                                    <h4>maxime placeat facere possimus</h4>
                                    <ul>
                                        <li>
                                        <i><FontAwesomeIcon icon = {faClock}/></i>
                                            3:30 PM
                                        </li>
                                        <li>
                                        <i><FontAwesomeIcon icon = {faUser}/></i>
                                            <Link to = "">Admin</Link>
                                        </li>
                                    </ul>
                                    <p>
                                        Nam libero tempore, cum soluta nobis est
                                        eligendi optio cumque nihil impedit quo
                                        minus id quod maxime placeat facere
                                        possimus, omnis voluptas assumenda est.
                                    </p>
                                </Col>
                            </Row>
                            <div className="clearfix"> </div>
                        </Col>
                    </Row>
                    <div className="clearfix"> </div>
                </div>
            </div>
        </div>
    );
};

export default RightEventBanner;
