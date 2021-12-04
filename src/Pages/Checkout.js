import React from 'react'
import { Helmet } from 'react-helmet'
import LeftBanner from '../Components/Banner/LeftBanner'
import CheckoutContainer from '../Components/Checkout/CheckoutContainer'
import ProductBreadcrumbs from '../Components/ProductBreadcrumbs/ProductBreadcrumbs'

const Checkout = () => {
    return (
        <div>
            <Helmet>
                <title>Checkout</title>
            </Helmet>
            <ProductBreadcrumbs PageName="Checkout" />
            <div className="banner">
                <LeftBanner />
                <CheckoutContainer />
                <div className="clearfix"></div>
            </div>
        </div>
    )
}

export default Checkout
