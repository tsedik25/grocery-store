import React from 'react'
import Description from '../Components/AboutUs/Description'
import Team from '../Components/AboutUs/Team'
import { Testimonials } from '../Components/AboutUs/Testimonials'
import LeftBanner from '../Components/Banner/LeftBanner'
import ProductBreadcrumbs from '../Components/ProductBreadcrumbs/ProductBreadcrumbs'

const AboutUs = () => {
    return (
        <div>
            <ProductBreadcrumbs PageName="About Us"/>
            <div className="banner">
                <LeftBanner/>
                <Description/>
            </div>
            <div className="clearfix"></div>
            <Team/>
            <Testimonials/>
        </div>
    )
}

export default AboutUs;
