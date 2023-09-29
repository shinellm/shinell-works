import React, { Component } from "react";
// import { ReactComponent as Mouse } from "../../images/svg/mouse.svg";
import { ReactComponent as Innovate } from "../../images/svg/textInnovate.svg";
import { FaArrowRight } from "react-icons/fa";

export default class Hero extends Component {
    render() {
        return (
            <section id="hero" className="hero-container">
                <div className="hero-color-block-container"></div>
                <div className="hero-content-container">
                    <div className="hero-header">
                        <Innovate className="text-innovate" />
                        <div className="hero-text">
                            <h1>Developing solutions that deliver user driven experiences</h1>
                            <p>UI/UX · Full-Stack Software Developer · Artist</p>
                        </div>
                        <div className="hero-options">
                            <button className="projects-btn">View My Works</button>
                            <button className="contact-btn">Get In Touch <FaArrowRight /></button>
                        </div>
                    </div>
                    {/* <div className="scroll-icon">
                        <Mouse />
                    </div> */}
                    <div className="hero-background">
                        <div className="circle-one"></div>
                        <div className="circle-two"></div>
                        <div className="hero-image"></div>
                        {/* <div className="filter"></div> */}
                        {/* <div className="hero-image" alt="Retro technology" src={"../images/lorenzo-herrera-unsplash.jpg"} /> */}
                    </div>
                </div>
            </section>
        );
    }
}

