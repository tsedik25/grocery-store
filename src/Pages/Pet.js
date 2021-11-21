import React from 'react'
import LeftBanner from '../Components/Banner/LeftBanner'
import PetFood from '../Components/PetFood/PetFood'
import ProductBreadcrumbs from '../Components/ProductBreadcrumbs/ProductBreadcrumbs'

export const Pet = () => {
    return (
        <div>
            <ProductBreadcrumbs PageName="Pet Food"/>
            <div className="banner">
                <LeftBanner/>
                <PetFood/>
                <div className="clearfix"></div>
            </div>
        </div>
    )
}
export default Pet;
