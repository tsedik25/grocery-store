import React from "react";
import img4 from "../../images/4.jpg";
import img5 from "../../images/5.jpg";
import img6 from "../../images/6.jpg";
import { Col, Row, Image } from "react-bootstrap";

const BottomBanner = () => {
    return (
        <div className="banner_bottom">
            <div className="wthree_banner_bottom_left_grid_sub"></div>
            <div className="wthree_banner_bottom_left_grid_sub1">
                <Row>
                    <Col md={4} className="wthree_banner_bottom_left">
                        <div className="wthree_banner_bottom_left_grid">
                            <Image
                                fluid={true}
                                src={img4}
                                alt=" "
                                className="img-responsive"
                            />
                            <div className="wthree_banner_bottom_left_grid_pos">
                                <h4>
                                    Discount Offer <span>25%</span>
                                </h4>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className="wthree_banner_bottom_left">
                        <div className="wthree_banner_bottom_left_grid">
                            <Image
                                fluid={true}
                                src={img5}
                                alt=" "
                                className="img-responsive"
                            />
                            <div className="wthree_banner_btm_pos">
                                <h3>
                                    introducing <span>best store</span> for{" "}
                                    <i>groceries</i>
                                </h3>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className="wthree_banner_bottom_left">
                        <div className="wthree_banner_bottom_left_grid">
                            <Image
                                fluid={true}
                                src={img6}
                                alt=" "
                                className="img-responsive"
                            />
                            <div className="wthree_banner_btm_pos1">
                                <h3>
                                    Save <span>Upto</span> $10
                                </h3>
                            </div>
                        </div>
                    </Col>
                </Row>

                <div className="clearfix"> </div>
            </div>
            <div className="clearfix"> </div>
        </div>
    );
};

export default BottomBanner;
