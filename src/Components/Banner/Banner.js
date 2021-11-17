import React from "react";
import { Link } from "react-router-dom";
import BottomBanner from "./BottomBanner";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
    return (
        <>
            <div className="banner">
                <LeftBanner />
                <RightBanner />
                <div className="clearfix"></div>
            </div>
            <BottomBanner />
        </>
    );
};

export default Banner;
