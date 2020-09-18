import React, { Component } from "react";

export default class About extends Component {
    render () {
        return (
            <section id="about" className="about-container">
                <div className="about-contents">
                    <div className="about-image">
                        <img alt="portrait" src={"../images/portrait.jpeg"}/>
                    </div>
                    <div className="about-text">
                        <h2>Hi, I’m <span className="colored-text">Shinell Manwaring!</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div className="decor-background"></div>
                    <div className="decor-frame"></div>
                </div>
            </section>
        )
    }
}