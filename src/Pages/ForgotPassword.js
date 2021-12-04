import React from 'react';
import { Helmet } from 'react-helmet';
import LeftBanner from '../Components/Banner/LeftBanner';
import ForgotPasswordForm from '../Components/ForgotPassword/ForgotPasswordForm';
import ProductBreadcrumbs from '../Components/ProductBreadcrumbs/ProductBreadcrumbs';


const ForgotPassword = () => {
    return (
        <div>
            <Helmet>
                <title>Forgot Password</title>
            </Helmet>
            <ProductBreadcrumbs PageName="Forgot Password" />
            <div className="banner">
                <LeftBanner />
                <ForgotPasswordForm />
            </div>
            <div className="clearfix"></div>
        </div>
    )
}

export default ForgotPassword
