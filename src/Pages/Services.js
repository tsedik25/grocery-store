import React from "react";
import { Helmet } from "react-helmet";
import LeftBanner from "../Components/Banner/LeftBanner";
import LoginNewsLetter from "../Components/Login/LoginNewsLetter";
import ProductBreadcrumbs from "../Components/ProductBreadcrumbs/ProductBreadcrumbs";
import ServicesBottom from "../Components/Services/ServicesBottom";
import ServicesDesc from "../Components/Services/ServicesDesc";

export const Services = () => {
    return (
        <div>
            <Helmet>
                <title>Services</title>
            </Helmet>
            <ProductBreadcrumbs PageName="Services" />
            <div className="banner">
                <LeftBanner />
                <ServicesDesc />
                <div className="clearfix"></div>
            </div>
            <ServicesBottom />
            <LoginNewsLetter />
        </div>
    );
};
