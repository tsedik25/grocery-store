import React from "react";
import LeftBanner from "../Components/Banner/LeftBanner";
import ProductBreadcrumbs from "../Components/ProductBreadcrumbs/ProductBreadcrumbs";
import VegetableBanner from "../Components/VeggiesFruits/VegetableBanner";

const Vegetables = () => {
    return (
        <div>
            <ProductBreadcrumbs PageName="Fruits & Vegetables" />
            <div className="banner">
                <LeftBanner />
                <VegetableBanner />
                <div className="clearfix"></div>
            </div>
        </div>
    );
};

export default Vegetables;
