import React from "react";
import { Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const RightBanner = (props) => {
    return (
        <div className="w3l_banner_nav_right">
            <Carousel>
                {props.rightBanner != undefined ? (
                    props.rightBanner.details.map((detail) => {
                        return (
                            <Carousel.Item>
                                <Image className="carouselImage" src={detail.images} alt="First slide" />
                                <Carousel.Caption>
                                    <h3>{detail.title}</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        );
                    })
                ) : (
                    <div>LOADING...</div>
                )}

                
            </Carousel>
        </div>
    );
};

export default RightBanner;
