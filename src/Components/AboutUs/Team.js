import {
    faFacebook,
    faGooglePlus,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import image32 from "../../images/32.jpg";
import image33 from "../../images/33.jpg";
import image34 from "../../images/34.jpg";
import image35 from "../../images/35.jpg";
import { Link } from "react-router-dom";

const Team = () => {
    return (
        <div className="team">
            <Container>
                <h3>Meet Our Amazing Team</h3>
                <div className="agileits_team_grids">
                    <Row>
                        <Col md={3} className="agileits_team_grid">
                            <Image
                                src={image32}
                                alt=" "
                                className="Image-responsive"
                            />
                            <h4>Martin Paul</h4>
                            <p>Manager</p>
                            <ul className="agileits_social_icons agileits_social_icons_team">
                                <li>
                                    <Link to="" className="facebook">
                                        <i>
                                            <FontAwesomeIcon
                                                icon={faFacebook}
                                            />
                                        </i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="twitter">
                                        <i>
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="google">
                                        <i>
                                            <FontAwesomeIcon
                                                icon={faGooglePlus}
                                            />
                                        </i>
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                        <Col md={3} className="agileits_team_grid">
                            <Image
                                src={image33}
                                alt=" "
                                className="Image-responsive"
                            />
                            <h4>Michael Rick</h4>
                            <p>Supervisor</p>
                            <ul className="agileits_social_icons agileits_social_icons_team">
                                <li>
                                    <Link to="" className="facebook">
                                        <i>
                                            <FontAwesomeIcon
                                                icon={faFacebook}
                                            />
                                        </i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="twitter">
                                        <i>
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="google">
                                        <i>
                                            <FontAwesomeIcon
                                                icon={faGooglePlus}
                                            />
                                        </i>
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                        <Col md={3} className="agileits_team_grid">
                            <Image
                                src={image34}
                                alt=" "
                                className="Image-responsive"
                            />
                            <h4>Thomas Carl</h4>
                            <p>Supervisor</p>
                            <ul className="agileits_social_icons agileits_social_icons_team">
                                <li>
                                    <Link to="" className="facebook">
                                        <i>
                                            <FontAwesomeIcon
                                                icon={faFacebook}
                                            />
                                        </i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="twitter">
                                        <i>
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="google">
                                        <i>
                                            <FontAwesomeIcon
                                                icon={faGooglePlus}
                                            />
                                        </i>
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                        <Col md={3} className="agileits_team_grid">
                            <Image
                                src={image35}
                                alt=" "
                                className="Image-responsive"
                            />
                            <h4>Laura Lee</h4>
                            <p>CEO</p>
                            <ul className="agileits_social_icons agileits_social_icons_team">
                                <li>
                                    <Link to="" className="facebook">
                                        <i>
                                            <FontAwesomeIcon
                                                icon={faFacebook}
                                            />
                                        </i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="twitter">
                                        <i>
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="google">
                                        <i>
                                            <FontAwesomeIcon
                                                icon={faGooglePlus}
                                            />
                                        </i>
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <div className="clearfix"> </div>
                </div>
            </Container>
        </div>
    );
};

export default Team;
