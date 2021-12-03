import React from 'react';
import ProductsByCategories from "../Components/ProductsByCategories/ProductsByCategories";
import ProductBreadcrumbs from "../Components/ProductBreadcrumbs/ProductBreadcrumbs";
import LeftBanner from "../Components/Banner/LeftBanner";
import { Helmet } from "react-helmet";

const Momo = () => {
    return (
        <div>
            <Helmet>
                <title>Momo</title>
            </Helmet>
            <ProductBreadcrumbs PageName="Momo" />
            <div className="banner">
                <LeftBanner />
                <ProductsByCategories categoryId="3" />
            </div>
            <div className="clearfix"></div>
        </div>
    )
}

export default Momo
