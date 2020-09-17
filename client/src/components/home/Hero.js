import React, { Component } from "react";
import { ReactComponent as Mouse } from "../../images/svg/mouse.svg";
import { FaArrowRight } from "react-icons/fa";

export default class Hero extends Component {
    render() {
        return (
            <section id="hero" className="hero-container">
                <div className="hero-header">
                    <div className="hero-text">
                        <h1>Developing strategies & brands to deliver user driven experiences</h1>
                        <p>UI/UX · Full-Stack Software Developer · Artist</p>
                    </div>
                    <div className="hero-options">
                        <button className="projects-btn">View My Works</button>
                        <button className="contact-btn">Get In Touch <FaArrowRight /></button>
                    </div>
                </div>
                <div className="scroll-icon">
                    <Mouse />
                </div>
                <div className="hero-background">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                    <div className="filter"></div>
                    <img className="hero-image" src={"../images/lorenzo-herrera-unsplash.jpg"} alt="Retro technology"></img>
                </div>
            </section>
        );
    }
}

