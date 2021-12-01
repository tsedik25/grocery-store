import React from "react";
import { Link } from "react-router-dom";
import BottomBanner from "./BottomBanner";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = (props) => {
    return (
        <>
            <div className="banner">
                <LeftBanner />
                <RightBanner rightBanner={props.banner}/>
                <div className="clearfix"></div>
            </div>
            <BottomBanner adsBanner={props.adsBanner}/>
        </>
    );
};

export default Banner;
