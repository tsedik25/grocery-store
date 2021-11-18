import React from "react";
import LeftBanner from "../Components/Banner/LeftBanner";
import RightEventBanner from "../Components/Events/RightEventBanner";
import ProductBreadcrumbs from "../Components/ProductBreadcrumbs/ProductBreadcrumbs";

const Events = () => {
    return (
        <div>
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
