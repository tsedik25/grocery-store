import React from "react";
import image31 from "../../images/31.jpg";
import { Col, Row, Image } from "react-bootstrap";

const Description = () => {
    return (
        <div className="w3l_banner_nav_right">
            <div className="privacy about">
                <h3>About Us</h3>
                <p className="animi">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et
                    dolorum fuga. Et harum quidem rerum facilis est et expedita
                    distinctio.
                </p>
                <div className="agile_about_grids">
                    <Row>
                        <Col md={6} className="agile_about_grid_right">
                            <Image
                            fluid
                                src={image31}
                                alt=" "
                                className="img-responsive"
                            />
                        </Col>
                        <Col md={6} className="agile_about_grid_left">
                            <ol>
                                <li>laborum et dolorum fuga</li>
                                <li>corrupti quos dolores et quas</li>
                                <li>est et expedita distinctio</li>
                                <li>deleniti atque corrupti quos</li>
                                <li>excepturi sint occaecati cupiditate</li>
                                <li>accusamus et iusto odio</li>
                            </ol>
                        </Col>
                    </Row>
                    <div className="clearfix"> </div>
                </div>
            </div>
        </div>
    );
};

export default Description;
