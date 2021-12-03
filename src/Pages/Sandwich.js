import React from 'react';
import ProductsByCategories from "../Components/ProductsByCategories/ProductsByCategories";
import ProductBreadcrumbs from "../Components/ProductBreadcrumbs/ProductBreadcrumbs";
import LeftBanner from "../Components/Banner/LeftBanner";
import { Helmet } from "react-helmet";

const Sandwich = () => {
    return (
        <div>
            <Helmet>
                <title>Sandwich</title>
            </Helmet>
            <ProductBreadcrumbs PageName="Sandwich" />
            <div className="banner">
                <LeftBanner />
                <ProductsByCategories categoryId="6" />
            </div>
            <div className="clearfix"></div>
        </div>
    )
}

export default Sandwich
