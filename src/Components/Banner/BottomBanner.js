import React from "react";
import img4 from "../../images/4.jpg";
import img5 from "../../images/5.jpg";
import img6 from "../../images/6.jpg";
import { Col, Row, Image } from "react-bootstrap";

const BottomBanner = (props) => {
    return props.adsBanner != undefined ? (
        <div className="banner_bottom">
            <div className="wthree_banner_bottom_left_grid_sub"></div>
            <div className="wthree_banner_bottom_left_grid_sub1">
                <Row>
                    {props.adsBanner.details.map((detail) => {
                        return (
                            <Col md={4} className="wthree_banner_bottom_left">
                                <div className="wthree_banner_bottom_left_grid">
                                    <Image
                                        fluid={true}
                                        src={detail.images}
                                        alt=" "
                                        className="img-responsive"
                                    />
                                </div>
                            </Col>
                        );
                    })}
                </Row>

                <div className="clearfix"> </div>
            </div>
            <div className="clearfix"> </div>
        </div>
    ) : (
        <div>LOADING...</div>
    );
};

export default BottomBanner;
