import React from 'react';
import ProductsByCategories from "../Components/ProductsByCategories/ProductsByCategories";
import ProductBreadcrumbs from "../Components/ProductBreadcrumbs/ProductBreadcrumbs";
import LeftBanner from "../Components/Banner/LeftBanner";
import { Helmet } from "react-helmet";

const Chilli = () => {
    return (
        <div>
            <Helmet>
                <title>Chilli</title>
            </Helmet>
            <ProductBreadcrumbs PageName="Chilli" />
            <div className="banner">
                <LeftBanner />
                <ProductsByCategories categoryId="5" />
            </div>
            <div className="clearfix"></div>
        </div>
    )
}

export default Chilli
