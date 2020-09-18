import React, { Component } from "react";
import { ReactComponent as Arrow } from "../../images/svg/arrowDoodle.svg";
import SectionBanner from "./SectionBanner";

export default class Process extends Component {
    render () {
        return (
            <section id="process" className="process-container">
                <SectionBanner>
                    <h2>My Process and Principles.</h2>
                </SectionBanner>
                <div className="process-section">
                    <div className="single-process">
                        <div className="process-contents">
                            <div className="process-text">
                                <h2>Let’s get to know you</h2>
                                <p>Once we’re connected, let’s get to work identifying your needs and goals. We’ll determine the scope of the project and learn about your core values.</p>
                            </div>
                            <div className="decor-background"></div>
                            <div className="decor-frame"></div>
                            <Arrow className="arrow-doodle"/>
                        </div>
                    </div>
                    <div className="single-process">
                        <div className="process-contents">
                            <div className="process-text">
                                <h2>Questions, Mood Boards, & Iterative Designs</h2>
                                <p>Let’s dig deep to craft a tailor-made solution, just for you. We’ll refine existing ideas and conduct market research to create designs that accurately reflect your brand and attract your target audience.</p>
                            </div>
                            <div className="decor-background"></div>
                            <div className="decor-frame"></div>
                            <Arrow className="arrow-doodle"/>
                        </div>
                    </div>
                    <div className="single-process">
                        <div className="process-contents">
                            <div className="process-text">
                                <h2>Bringing Ideas to Life</h2>
                                <p>Time to get to work by putting our clicks, sweat, and tears into creating an enjoyable product experience. We’ll ensure that your brand image is positively represented with a user-friendly interface.</p>
                            </div>
                            <div className="decor-background"></div>
                            <div className="decor-frame"></div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}