import React from "react";
import "./AboutContent.css";

const AboutContent = () => {
    return (
        <div className="about_content_container">
            <div className="left">
                <h1>Who Am I?</h1>
                <p>I am an engineering undegrad 
                at AITR Indore with 7.81 CGPA.<br />
                Highly motivated and passionate web and react developer,<br /> eager to kick-start my career in the field of web development.
                </p>
            </div>
            <div className="right">
                <button onClick={() => window.location.href = "https://drive.google.com/file/d/1nD59QNhpX7CsdupnFTJlz3pPCzw5kS9J/view?usp=sharing"} className="button">
                    My Resume.
                </button>
            </div>
        </div>
    );
}

export default AboutContent;