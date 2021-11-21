import React from 'react'
import LeftBanner from '../Components/Banner/LeftBanner'
import Privacy from '../Components/Privacy/Privacy'
import ProductBreadcrumbs from '../Components/ProductBreadcrumbs/ProductBreadcrumbs'

const PrivacyTerms = () => {
    return (
        <div>
            <ProductBreadcrumbs PageName="Privacy Policy & Terms of Use"/>
            <div className="banner">
                <LeftBanner/>
                <Privacy/>
                <div className="clearfix"></div>
            </div>
        </div>
    )
}

export default PrivacyTerms
