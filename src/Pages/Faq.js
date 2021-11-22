import React from "react";
import LeftBanner from "../Components/Banner/LeftBanner";
import QandA from "../Components/Faqs/QandA";
import ProductBreadcrumbs from "../Components/ProductBreadcrumbs/ProductBreadcrumbs";
import { Helmet } from "react-helmet";

const Faq = () => {
    return (
        <div>
            <Helmet>
                <title>FAQ</title>
            </Helmet>
            <ProductBreadcrumbs PageName="FAQs" />
            <div className="banner">
                <LeftBanner />
                <QandA />
                <div className="clearfix"></div>
            </div>
        </div>
    );
};

export default Faq;
