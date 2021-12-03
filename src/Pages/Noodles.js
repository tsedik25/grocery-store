import React from 'react';
import ProductsByCategories from "../Components/ProductsByCategories/ProductsByCategories";
import ProductBreadcrumbs from "../Components/ProductBreadcrumbs/ProductBreadcrumbs";
import LeftBanner from "../Components/Banner/LeftBanner";
import { Helmet } from "react-helmet";

const Noodles = () => {
    return (
        <div>
            <Helmet>
                <title>Noodles</title>
            </Helmet>
            <ProductBreadcrumbs PageName="Noodles" />
            <div className="banner">
                <LeftBanner />
                <ProductsByCategories categoryId="4" />
            </div>
            <div className="clearfix"></div>
        </div>
    )
}

export default Noodles
