import React, { Component } from "react";

export default class SectionBanner extends Component {
    constructor(props) {
        super(props);
    }
    
    render () {
        return (
            <div className="section-banner-container">
                {this.props.children}
            </div>
        )
    }
}