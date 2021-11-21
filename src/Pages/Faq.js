import React from 'react'
import LeftBanner from '../Components/Banner/LeftBanner'
import QandA from '../Components/Faqs/QandA'
import ProductBreadcrumbs from '../Components/ProductBreadcrumbs/ProductBreadcrumbs'

const Faq = () => {
    return (
        <div>
            <ProductBreadcrumbs PageName="FAQs"/>
            <div className="banner">
                <LeftBanner/>
                <QandA/>
                <div className="clearfix"></div>
            </div>
        </div>
    )
}

export default Faq
