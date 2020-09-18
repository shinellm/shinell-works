import React, { Component } from "react";

export default class SectionBanner extends Component {
    render () {
        return (
            <div className="section-banner-container">
                {this.props.children}
            </div>
        )
    }
}