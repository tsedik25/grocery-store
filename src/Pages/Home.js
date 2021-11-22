import React from 'react';
import Banner from '../Components/Banner/Banner';
import TopBrands from '../Components/TopBrands/TopBrands';
import FreshVegetables from '../Components/FreshVegetables/FreshVegetables';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner />
            <TopBrands />
            <FreshVegetables />
        </div>
    )
}

export default Home;
