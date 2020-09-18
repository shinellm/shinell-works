import React, { Component } from "react";
import { FaArrowRight } from "react-icons/fa";

export default class ScrollSection extends Component {
    constructor() {
        super();
        this.scrollAppear = this.scrollAppear.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollAppear);
    }

    scrollAppear() {
        let projectBackground = document.querySelector('.background');
        let focusedProject = -1;
        let projects = document.querySelectorAll('.single-project');
        let images = document.querySelectorAll('.single-image');

        projects.forEach( (item, index) => {
            let itemPositionTop = item.getBoundingClientRect().top;
            let itemPositionBottom = item.getBoundingClientRect().bottom;
            let screenPosition = window.innerHeight / 1.5;

            if (itemPositionTop < screenPosition && screenPosition < itemPositionBottom && !images[index].classList.contains('appear')) {
                images[index].classList.add('appear');
            }
            else if (screenPosition >= itemPositionBottom && images[index].classList.contains('appear')) {
                images[index].classList.remove('appear');
            }
            else if (itemPositionTop >= screenPosition && images[index].classList.contains('appear')) {
                images[index].classList.remove('appear');
            }

            if (images[index].classList.contains('appear')) {
                focusedProject = index + 1;
            }
        });

        switch (focusedProject) {
            case 1:
                projectBackground.style.backgroundColor = '#ffe4d4';
                break;
            case 2:
                projectBackground.style.backgroundColor = '#ffdeec';
                break;
            case 3:
                projectBackground.style.backgroundColor = '#e8dbff';
                break;
            default:
                projectBackground.style.backgroundColor = '#FFFFFF';
                break;
        }
    }

    render() {
        return (
            <div className="scroll-section">
                <div className="scroll-label"></div>
                <div className="image-container">
                    <img className="single-image" alt="Retro technology" src={"../images/lorenzo-herrera-unsplash.jpg"}/>
                    <img className="single-image" alt="Retro technology" src={"../images/lorenzo-herrera-unsplash.jpg"}/>
                    <img className="single-image" alt="Retro technology" src={"../images/lorenzo-herrera-unsplash.jpg"}/>
                </div>
                <div className="project-container background">
                    <div className="single-project">
                        <div className="project-contents">
                            <p className="project-number">01</p>
                            <p className="project-type">Shopify E-commerce Store</p>
                            <h2 className="project-title">Natural & Organic Body Products</h2>
                            <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <button className="project-link">View Project <FaArrowRight /></button>
                            <div className="decor-background"></div>
                            <div className="decor-frame"></div>
                        </div>
                    </div>
                    <div className="single-project">
                        <div className="project-contents">
                            <p className="project-number">02</p>
                            <p className="project-type">Heroku Deployed Personal Portfolio</p>
                            <h2 className="project-title">Aspiring FullStack Engineer</h2>
                            <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <button className="project-link">View Project <FaArrowRight /></button>
                            <div className="decor-background"></div>
                            <div className="decor-frame"></div>
                        </div>
                    </div>
                    <div className="single-project">
                        <div className="project-contents">
                            <p className="project-number">03</p>
                            <p className="project-type">Webflow Personal Portfolio</p>
                            <h2 className="project-title">Experienced Data Analyst</h2>
                            <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <button className="project-link">View Project <FaArrowRight /></button>
                            <div className="decor-background"></div>
                            <div className="decor-frame"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}