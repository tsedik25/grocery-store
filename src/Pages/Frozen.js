import React from 'react'
import LeftBanner from '../Components/Banner/LeftBanner'
import FrozenFoods from '../Components/FrozenFoods/FrozenFoods'
import ProductBreadcrumbs from '../Components/ProductBreadcrumbs/ProductBreadcrumbs'

const Frozen = () => {
    return (
        <div>
            <ProductBreadcrumbs PageName="Frozen Foods"/>
            <div className="banner">
                <LeftBanner/>
                <FrozenFoods/>
                <div className="clearfix"></div>
            </div>
        </div>
    )
}

export default Frozen
