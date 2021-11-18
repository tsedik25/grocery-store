import { faEnvelope, faHome, faPhone, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Mail = () => {
    return (
        <div className="w3l_banner_nav_right">
            <div className="mail">
                <h3>Mail Us</h3>
                <div className="agileinfo_mail_grids">
                    <Row>
                        <Col md={4} className="agileinfo_mail_grid_left">
                            <ul>
                                <li>
                                    <i>
                                        <FontAwesomeIcon icon={faHome} />
                                    </i>
                                </li>
                                <li>
                                    address<span>868 1st Avenue NYC.</span>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <i>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </i>
                                </li>
                                <li>
                                    email
                                    <span>
                                        <Link to="mailto:info@example.com">
                                            info@example.com
                                        </Link>
                                    </span>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <i>
                                        <FontAwesomeIcon icon={faPhoneAlt} />
                                    </i>
                                </li>
                                <li>
                                    call to us<span>(+123) 233 2362 826</span>
                                </li>
                            </ul>
                        </Col>
                        <Col md={8} className="agileinfo_mail_grid_right">
                            <Form action="#" method="post">
                                <Row>
                                    <Col
                                        md={6}
                                        className="wthree_contact_left_grid"
                                    >
                                        <Form.Control
                                            type="text"
                                            name="Name"
                                            value="Name*"
                                            onfocus="this.value = '';"
                                            onblur="if (this.value == '') {this.value = 'Name*';}"
                                            required=""
                                        />
                                        <Form.Control
                                            type="email"
                                            name="Email"
                                            value="Email*"
                                            onfocus="this.value = '';"
                                            onblur="if (this.value == '') {this.value = 'Email*';}"
                                            required=""
                                        />
                                    </Col>
                                    <Col
                                        md={6}
                                        className="wthree_contact_left_grid"
                                    >
                                        <Form.Control
                                            type="text"
                                            name="Telephone"
                                            value="Telephone*"
                                            onfocus="this.value = '';"
                                            onblur="if (this.value == '') {this.value = 'Telephone*';}"
                                            required=""
                                        />
                                        <Form.Control
                                            type="text"
                                            name="Subject"
                                            value="Subject*"
                                            onfocus="this.value = '';"
                                            onblur="if (this.value == '') {this.value = 'Subject*';}"
                                            required=""
                                        />
                                    </Col>
                                </Row>
                                <div className="clearfix"> </div>
                                <Form.Control
                                    as="textarea"
                                    rows={10}
                                    placeholder="Message..."
                                    name="Message"
                                    onfocus="this.value = '';"
                                    onblur="if (this.value == '') {this.value = 'Message...';}"
                                    required=""
                                />
                                <Row>
                                    <Col>
                                        <Form.Control
                                            type="submit"
                                            value="Submit"
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="reset"
                                            value="Clear"
                                        />
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                    <div className="clearfix"> </div>
                </div>
            </div>
        </div>
    );
};

export default Mail;
