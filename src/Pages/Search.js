import React, { useState } from "react";
import { Helmet } from "react-helmet";
import LeftBanner from "../Components/Banner/LeftBanner";
import ProductBreadcrumbs from "../Components/ProductBreadcrumbs/ProductBreadcrumbs";
import { useParams } from "react-router";
import SearchContainer from "../Components/Search/SearchContainer";

const Search = () => {
    const { searchQuery } = useParams();
    const [data, setData] = useState([]);
    const baseUrl = "https://uat.ordering-boafresh.ekbana.net/";
    const warehouseId = 1;
    const apiKey =
        "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545";
    const fetchProducts = () => {
        fetch(baseUrl + "api/v4/product?query=" + searchQuery.toString(), {
            method: "GET",
            headers: {
                "Warehouse-Id": warehouseId,
                "Api-key": apiKey,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setData(data.data);
            });
    };
    fetchProducts();
    return (
        <div>
            <Helmet>
                <title>Searched Item</title>
            </Helmet>
            <ProductBreadcrumbs PageName="Searched Item" />
            <div className="banner">
                <LeftBanner />
                <SearchContainer data = {data} searchQuery = {searchQuery}/>
            </div>
            <div className="clearfix"></div>
        </div>
    );
};

export default Search;
