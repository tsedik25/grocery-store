import React from "react";
import LeftBanner from "../Components/Banner/LeftBanner";
import RightEventBanner from "../Components/Events/RightEventBanner";
import ProductBreadcrumbs from "../Components/ProductBreadcrumbs/ProductBreadcrumbs";
import { Helmet } from "react-helmet";

const Events = () => {
    return (
        <div>
            <Helmet>
                <title>Events</title>
            </Helmet>
            <ProductBreadcrumbs PageName="Events" />
            <div className="banner">
                <LeftBanner />
                <RightEventBanner />
                <div className="clearfix"></div>
            </div>
        </div>
    );
};

export default Events;
