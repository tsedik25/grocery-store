import React from "react";
import LeftBanner from "../Components/Banner/LeftBanner";
import RightHouseholdsBanner from "../Components/Households/RightHouseholdsBanner";
import ProductBreadcrumbs from "../Components/ProductBreadcrumbs/ProductBreadcrumbs";
import { Helmet } from "react-helmet";

const Households = () => {
    return (
        <div>
            <Helmet>
                <title>Households</title>
            </Helmet>
            <ProductBreadcrumbs PageName="Households" />
            <div className="banner">
                <LeftBanner />
                <RightHouseholdsBanner/>
                <div className="clearfix"></div>
            </div>
        </div>
    );
};

export default Households;
