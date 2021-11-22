import React from "react";
import LeftBanner from "../Components/Banner/LeftBanner";
import PetFood from "../Components/PetFood/PetFood";
import ProductBreadcrumbs from "../Components/ProductBreadcrumbs/ProductBreadcrumbs";
import { Helmet } from "react-helmet";

export const Pet = () => {
    return (
        <div>
            <Helmet>
                <title>Pet Food</title>
            </Helmet>
            <ProductBreadcrumbs PageName="Pet Food" />
            <div className="banner">
                <LeftBanner />
                <PetFood />
                <div className="clearfix"></div>
            </div>
        </div>
    );
};
export default Pet;
