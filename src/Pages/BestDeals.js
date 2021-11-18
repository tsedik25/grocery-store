import React from 'react'
import LeftBanner from '../Components/Banner/LeftBanner'
import RightDealsBanner from '../Components/BestDeals/RightDealsBanner'
import ProductBreadcrumbs from '../Components/ProductBreadcrumbs/ProductBreadcrumbs'

const BestDeals = () => {
    return (
        <div>
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
