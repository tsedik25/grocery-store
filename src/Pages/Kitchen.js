import React from 'react'
import LeftBanner from '../Components/Banner/LeftBanner'
import RIghtKitchenBanner from '../Components/Kitchen/RIghtKitchenBanner'
import ProductBreadcrumbs from '../Components/ProductBreadcrumbs/ProductBreadcrumbs'
import TopBrands from '../Components/TopBrands/TopBrands'

const Kitchen = () => {
    return (
        <div>
            <ProductBreadcrumbs PageName="Kitchen"/>
            <div className="banner">
                <LeftBanner/>
                <RIghtKitchenBanner/>
                <div className="clearfix"></div>
            </div>
            <TopBrands/>
        </div>
    )
}

export default Kitchen;
