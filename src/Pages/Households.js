import React from "react";
import LeftBanner from "../Components/Banner/LeftBanner";
import RightHouseholdsBanner from "../Components/Households/RightHouseholdsBanner";
import ProductBreadcrumbs from "../Components/ProductBreadcrumbs/ProductBreadcrumbs";

const Households = () => {
    return (
        <div>
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
