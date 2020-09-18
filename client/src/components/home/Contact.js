import React, { Component } from 'react';
import ContactForm from './ContactForm';

export default class Contact extends Component {    
    render() {
        return (
        <section id="contact" className="contact-container">
            <div className="contact-contents">
                <div className="contact-header">
                    <h2>Let’s Connect</h2>
                    <p>Want to work together or talk about an idea? Just fill out the form!</p>
                </div>
                <ContactForm />
            </div>
        </section>
        );
    }
}