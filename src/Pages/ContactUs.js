import React from 'react'
import LeftBanner from '../Components/Banner/LeftBanner';
import Mail from '../Components/ContactUs/Mail';
import ProductBreadcrumbs from '../Components/ProductBreadcrumbs/ProductBreadcrumbs';
import Map from '../Components/ContactUs/Map';

const ContactUs = () => {
    return (
        <div>
            <ProductBreadcrumbs PageName="Mail Us"/>
            <div className="banner">
                <LeftBanner/>
                <Mail/>
            </div>
            <div className="clearfix"></div>
            <Map/>
        </div>
    )
}

export default ContactUs;
