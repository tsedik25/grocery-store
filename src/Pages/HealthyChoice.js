import React from 'react';
import ProductsByCategories from "../Components/ProductsByCategories/ProductsByCategories";
import ProductBreadcrumbs from "../Components/ProductBreadcrumbs/ProductBreadcrumbs";
import LeftBanner from "../Components/Banner/LeftBanner";
import { Helmet } from "react-helmet";

const HealthyChoice = () => {
    return (
        <div>
            <Helmet>
                <title>Healthy Choice</title>
            </Helmet>
            <ProductBreadcrumbs PageName="Healthy Choice" />
            <div className="banner">
                <LeftBanner />
                <ProductsByCategories categoryId="7" />
            </div>
            <div className="clearfix"></div>
        </div>
    )
}

export default HealthyChoice
