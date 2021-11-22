import React from "react";
import LeftBanner from "../Components/Banner/LeftBanner";
import ProductBreadcrumbs from "../Components/ProductBreadcrumbs/ProductBreadcrumbs";
import VegetableBanner from "../Components/VeggiesFruits/VegetableBanner";
import { Helmet } from "react-helmet";

const Vegetables = () => {
    return (
        <div>
            <Helmet>
                <title>Veggies & Fruits</title>
            </Helmet>
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
