import React from "react";
import "./HomeImage.css";
import { Zoom, LightSpeed } from "react-reveal";
const HomeImage = () =>{
    return (
        <div className="container">
            <div className="bg">
                <img className = "Home_Image" src={require("../images/home.jpg")}alt="HomeImage" />
            </div>
            <div className="content">
                <Zoom right cascade duration = {600}>
                    <p>I'm a Programmer.</p>
                </Zoom>
                <div className="h1_content">
                    <h1>
                    <Zoom right cascade duration={1200}>Web Developer.</Zoom><br/>
                    </h1>
                    <h1>
                        <Zoom right cascade duration = {2400}>
                            Competitive Coder.
                        </Zoom>
                    </h1>
                </div>
                <div className="home_buttons">
                    <LightSpeed left duration = {2800}>
                        <button onClick={() => window.location.href = "https://drive.google.com/file/d/1nD59QNhpX7CsdupnFTJlz3pPCzw5kS9J/view?usp=sharing"} className="button">
                            My Resume.
                        </button>
                    </LightSpeed>
                    {/* <LightSpeed right duration = {2800}>
                        <Link to ="/About" className = "button button_light">
                            About
                        </Link>
                    </LightSpeed> */}
                </div>
            </div>
        </div>
    );
}

export default HomeImage;