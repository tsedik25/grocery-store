import React from 'react';
import LeftBanner from '../Components/Banner/LeftBanner';
import RightDealsBanner from '../Components/BestDeals/RightDealsBanner';
import ProductBreadcrumbs from '../Components/ProductBreadcrumbs/ProductBreadcrumbs';
import { Helmet } from 'react-helmet';

const BestDeals = () => {
    return (
        <div>
            <Helmet>
                <title>Best Deals</title>
            </Helmet>
            <ProductBreadcrumbs PageName="Branded Foods"/>
            <div className="banner">
                <LeftBanner/>
                <RightDealsBanner/>
            </div>
            <div className="clearfix"></div>
        </div>
    )
}

export default BestDeals
