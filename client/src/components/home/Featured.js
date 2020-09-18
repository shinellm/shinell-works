import React, { Component } from "react";
import SectionBanner from "./SectionBanner";
import ScrollSection from "./ScrollSection";

export default class Featured extends Component {
    render () {
        return (
            <section id="featured" className="featured-container">
                <SectionBanner>
                    <h2>Not sure if I’m a good fit? The Proof is in the Pudding.</h2>
                </SectionBanner>
                <ScrollSection />
                <SectionBanner>
                    <h2>Curious to see more? <span className="colored-text">Visit my project gallery!</span></h2>
                </SectionBanner>
            </section>
        )
    }
}