import React from "react";
import LeftBanner from "../Components/Banner/LeftBanner";
import LoginContainer from "../Components/Login/LoginContainer";
import LoginNewsLetter from "../Components/Login/LoginNewsLetter";
import ProductBreadcrumbs from "../Components/ProductBreadcrumbs/ProductBreadcrumbs";

const Login = () => {
    return (
        <div>
            <ProductBreadcrumbs PageName="Sign In & Sign Up"/>
            <div className="banner">
                <LeftBanner />
                <LoginContainer />
                <div className="clearfix"></div>
            </div>
            <LoginNewsLetter/>
        </div>
    );
};

export default Login;
