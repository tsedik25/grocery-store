import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const ProductBreadcrumbs = (props) => {
    return (
        <div className="products-breadcrumb">
            <div className="container">
                <ul>
                    <li>
                        <i><FontAwesomeIcon icon = {faHome}/></i>
                        <Link to="/">Home</Link>
                        <span>|</span>
                    </li>
                    <li>{props.PageName}</li>
                </ul>
            </div>
        </div>
    );
};

export default ProductBreadcrumbs;
