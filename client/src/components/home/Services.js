import React, { Component } from "react";
import { CardGroup, Card } from 'react-bootstrap';
import SectionBanner from "./SectionBanner";

import { ReactComponent as Background1 } from "../../images/svg/blob1.svg";
import { ReactComponent as Background2 } from "../../images/svg/blob2.svg";
import { ReactComponent as Logo } from "../../images/svg/extension.svg";
import { ReactComponent as Brand } from "../../images/svg/search.svg";
import { ReactComponent as Page } from "../../images/svg/browserStar.svg";
import { ReactComponent as Website } from "../../images/svg/dashboard.svg";
import { ReactComponent as Drawing } from "../../images/svg/pencil.svg";

export default class Services extends Component {
    render () {
        return (
            <section id="services" className="services-container">
                <SectionBanner>
                    <h2>Need help with a work in-progress or up and running project? I can help with that.</h2>
                </SectionBanner>
                <div className="grouped-services">
                    <CardGroup className="services-offered">
                        <Card className="single-service">
                            <Card.Body>
                                <div className="service-icon">
                                    <Logo />
                                    <div className="icon-background">
                                        <Background1 />
                                    </div>
                                </div>
                                <Card.Title>Logo Design</Card.Title>
                                <Card.Text>Delivering a logo design that perfectly reflects your brand message.</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="single-service">
                            <Card.Body>
                                <div className="service-icon">
                                    <Brand />
                                    <div className="icon-background">
                                        <Background2 />
                                    </div>
                                </div>
                                <Card.Title>Brand Identity</Card.Title>
                                <Card.Text>Integrating key company values, market research, and comprehensive user designs to form a unique brand image.</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="single-service">
                            <Card.Body>
                                <div className="service-icon">
                                    <Page />
                                    <div className="icon-background">
                                        <Background1 />
                                    </div>
                                </div>
                                <Card.Title>Landing Page</Card.Title>
                                <Card.Text>Creating attention grabbing landing pages that will hook users on the first visit.</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="single-service">
                            <Card.Body>
                                <div className="service-icon">
                                    <Website />
                                    <div className="icon-background">
                                        <Background2 />
                                    </div>
                                </div>
                                <Card.Title>Website Development</Card.Title>
                                <Card.Text>Transforming meticulously crafted digital mockups into HTTPS deployed websites with SEO enhancements.</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="single-service">
                            <Card.Body>
                                <div className="service-icon">
                                    <Drawing />
                                    <div className="icon-background">
                                        <Background1 />
                                    </div>
                                </div>
                                <Card.Title>Custom Drawings & Short Animations</Card.Title>
                                <Card.Text>Designing small custom drawings or animations to accentuate your branding.</Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div>
            </section>
        )
    }
}