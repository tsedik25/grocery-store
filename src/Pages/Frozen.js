import React from "react";
import LeftBanner from "../Components/Banner/LeftBanner";
import FrozenFoods from "../Components/FrozenFoods/FrozenFoods";
import ProductBreadcrumbs from "../Components/ProductBreadcrumbs/ProductBreadcrumbs";
import { Helmet } from "react-helmet";

const Frozen = () => {
    return (
        <div>
            <Helmet>
                <title>Frozen Foods</title>
            </Helmet>
            <ProductBreadcrumbs PageName="Frozen Foods" />
            <div className="banner">
                <LeftBanner />
                <FrozenFoods />
                <div className="clearfix"></div>
            </div>
        </div>
    );
};

export default Frozen;
