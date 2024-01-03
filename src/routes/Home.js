import React from "react";
import Navbar from "../components/Navbar";
import HomeImage from "../components/HomeImage";
import Bottom from "../components/Bottom";
const Home = () => {
    return(
        <div>
            <Navbar/>
            <HomeImage/>
            <Bottom/>
        </div>
    );
}

export default Home;