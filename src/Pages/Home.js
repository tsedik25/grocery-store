import React, { useState } from "react";
import Banner from "../Components/Banner/Banner";
import TopBrands from "../Components/TopBrands/TopBrands";
import { Helmet } from "react-helmet";

const Home = () => {
    const [data, setData] = useState([]);
    const baseUrl = "https://uat.ordering-boafresh.ekbana.net/";
    const warehouseId = 1;
    const apiKey =
        "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545";
    const fetchHome = async () => {
        let response = await fetch(baseUrl + "/api/v4/newhome", {
            method: "GET",
            headers: {
                "Warehouse-Id": warehouseId,
                "Api-key": apiKey,
            },
        });
        let data = await response.json();
        if (response.status === 200) {
            setData(data.data);
        }
    };
    try {
        fetchHome();
    } catch (err) {
        console.log(err);
    }

    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            {data !== undefined ? (
                <>
                    <Banner banner={data[0]} adsBanner={data[6]} />
                    <TopBrands newDishes={data[2]} />
                    <TopBrands newDishes={data[4]} />
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default Home;
