import React, { Component } from "react";
import { ReactComponent as Mouse } from "../../images/svg/mouse.svg";
import { FaArrowRight } from "react-icons/fa";

export default class Hero extends Component {
    render() {
        return (
            <section id="hero" className="hero-container" style={{position: "relative", width:"100vw", height:"100vh", overflow: "hidden"}}>
                <div className="background" style={{width:"100%", height:"100%"}}>
                    <div style={{position: "absolute", width: "35vw", height: "35vw", background: "#6654C7", opacity: "0.3", left: "50%", bottom: "0", transform: "translate(0, 20%)", borderRadius: "50%"}}></div>
                    <div style={{position: "absolute", width: "50vw", height: "50vw", background: "#F7772E", opacity: "0.3", left: "50%", top: "50%", transform: "translate(-50%, -50%)", borderRadius: "50%"}}></div>
                    <div style={{position: "absolute", width:"100%", height:"100%", background: "#000000", opacity: "0.2"}}></div>
                    <img src="../images/lorenzo-herrera-unsplash.jpg" alt="Retro technology" width="100%" height="100%"></img>
                </div>
                <div style={{position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", textAlign: "center"}}>
                    <div className="hero-text" style={{color: "#FFFFFF", marginBottom: "40px"}}>
                        <h1>Developing strategies & brands to deliver user driven experiences</h1>
                        <p>UI/UX · Full-Stack Software Developer · Artist</p>
                    </div>
                    <div className="hero-options">
                        <button style={{width: "200px", height: "40px", color: "white", background: "#5E77FF", border: "0", borderRadius: "38px", marginRight: "25px"}}>View My Works</button>
                        <button style={{width: "200px", height: "40px", color: "black", background: "#FFFFFF", border: "0", borderRadius: "38px"}}>Get In Touch <FaArrowRight /></button>
                    </div>
                </div>
                <div style={{position: "absolute", left: "50%", bottom: "15%", transform: "translate(-50%, 0)"}}>
                    <Mouse style={{width: "80px", height: "80px"}}></Mouse>
                </div>
            </section>
        );
    }
}

