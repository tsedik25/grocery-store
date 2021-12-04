import React, { useState } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const LeftBanner = () => {
    const [categories, setCategories] = useState([]);
    const baseUrl = "https://uat.ordering-boafresh.ekbana.net/";
    const warehouseId = 1;
    const apiKey = "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545";
    const getCategories = async () => {
        let response = await fetch(baseUrl + "/api/v4/category" , {
            method: "GET",
            headers: {
                "Warehouse-Id": warehouseId,
                "Api-key": apiKey
            }})
            let data = await response.json();
            
            if (response.status === 200) {
                setCategories(data.data)
            }
    }

    getCategories();
    return (
        <div className="w3l_banner_nav_left">
            <Nav
                className="sidebar navbar-nav"
                
            >
                <div className="sidebar-sticky"></div>
                <Nav.Item>
                    <Link className="nav-link" to="/products">
                        All Products 
                    </Link>
                </Nav.Item>
                {categories.map(category => {
                    return <Nav.Item key={category.id}>
                    <Link className="nav-link" to = {'/'+ category.title.toLowerCase()}>
                        {category.title} 
                    </Link>
                </Nav.Item>
                })}
                
            </Nav>
        </div>
    );
};

export default LeftBanner;
