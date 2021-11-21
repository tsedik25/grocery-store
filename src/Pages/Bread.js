import React from 'react'
import LeftBanner from '../Components/Banner/LeftBanner'
import BreadBakery from '../Components/BreadBakery/BreadBakery'
import ProductBreadcrumbs from '../Components/ProductBreadcrumbs/ProductBreadcrumbs'

const Bread = () => {
    return (
        <div>
            <ProductBreadcrumbs PageName="Bread & Bakery"/>
            <div className="banner">
                <LeftBanner/>
                <BreadBakery/>
                <div className="clearfix"></div>
            </div>
        </div>
    )
}

export default Bread
