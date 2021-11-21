import React from 'react'
import LeftBanner from '../Components/Banner/LeftBanner'
import Beverages from '../Components/Beverages/Beverages'
import ProductBreadcrumbs from '../Components/ProductBreadcrumbs/ProductBreadcrumbs'

export const Drinks = () => {
    return (
        <div>
            <ProductBreadcrumbs PageName="Beverages"/>
            <div className="banner">
                <LeftBanner/>
                <Beverages/>
                <div className="clearfix"></div>
            </div>
        </div>
    )
}
export default Drinks;
