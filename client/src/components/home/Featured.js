import React, { Component } from "react";
import { Nav } from 'react-bootstrap';

import SectionBanner from "./SectionBanner";
import ScrollSection from "./ScrollSection";

export default class Featured extends Component {
    render () {
        return (
            <section id="featured" className="featured-container">
                <div className="decor-trim-top"></div>
                <SectionBanner>
                    <h2>Not sure if I’m a good fit? The Proof is in the Pudding.</h2>
                </SectionBanner>
                <ScrollSection />
                <SectionBanner>
                    <h2>Curious to see more? <Nav.Link className="colored-text" href={`/works`}>Visit my project gallery!</Nav.Link></h2>
                </SectionBanner>
                <div className="decor-trim-bottom"></div>
            </section>
        )
    }
}