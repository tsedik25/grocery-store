import React from "react";
import LeftBanner from "../Components/Banner/LeftBanner";
import Privacy from "../Components/Privacy/Privacy";
import ProductBreadcrumbs from "../Components/ProductBreadcrumbs/ProductBreadcrumbs";
import { Helmet } from "react-helmet";

const PrivacyTerms = () => {
    return (
        <div>
            <Helmet>
                <title>Privacy Policy</title>
            </Helmet>
            <ProductBreadcrumbs PageName="Privacy Policy & Terms of Use" />
            <div className="banner">
                <LeftBanner />
                <Privacy />
                <div className="clearfix"></div>
            </div>
        </div>
    );
};

export default PrivacyTerms;
