import React from "react";
import ProductsByCategories from "../Components/ProductsByCategories/ProductsByCategories";
import ProductBreadcrumbs from "../Components/ProductBreadcrumbs/ProductBreadcrumbs";
import LeftBanner from "../Components/Banner/LeftBanner";
import { Helmet } from "react-helmet";

const Pizza = () => {
    return (
        <div>
            <Helmet>
                <title>Pizza</title>
            </Helmet>
            <ProductBreadcrumbs PageName="Pizza" />
            <div className="banner">
                <LeftBanner />
                <ProductsByCategories categoryId="1" />
            </div>
            <div className="clearfix"></div>
        </div>
    );
};

export default Pizza;
