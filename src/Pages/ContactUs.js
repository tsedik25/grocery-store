import React from 'react'
import LeftBanner from '../Components/Banner/LeftBanner';
import Mail from '../Components/ContactUs/Mail';
import ProductBreadcrumbs from '../Components/ProductBreadcrumbs/ProductBreadcrumbs';
import Map from '../Components/ContactUs/Map';
import { Helmet } from 'react-helmet';

const ContactUs = () => {
    return (
        <div>
            <Helmet>
                <title>Contact Us</title>
            </Helmet>
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
