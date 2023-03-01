import React from 'react';
import HomeHero from "./HomeHero/homeHero";
import HomeBooks from "./HomeBooks/homeBooks";
import HomeInfo from "./HomeInfo/homeInfo";

const Home = () => {
    return (
        <>
            <HomeHero/>
            <HomeBooks/>
            <HomeInfo/>
        </>
    );
};

export default Home;