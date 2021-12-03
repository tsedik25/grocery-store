import React from "react";
import ProductsByCategories from "../Components/ProductsByCategories/ProductsByCategories";
import ProductBreadcrumbs from "../Components/ProductBreadcrumbs/ProductBreadcrumbs";
import LeftBanner from "../Components/Banner/LeftBanner";
import { Helmet } from "react-helmet";

const Rice = () => {
    return (
        <div>
            <Helmet>
                <title>Rice</title>
            </Helmet>
            <ProductBreadcrumbs PageName="Rice" />
            <div className="banner">
                <LeftBanner />
                <ProductsByCategories categoryId="8" />
            </div>
            <div className="clearfix"></div>
        </div>
    );
};

export default Rice;
