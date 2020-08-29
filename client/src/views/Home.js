import React, { Component } from 'react';

import Hero from '../components/Hero';
// import About from '../components/About';
// import Featured from '../components/Featured';
// import Contact from '../components/Contact';
import FullPageNav from '../components/nav/FullPageNav'

// import Header from '../components/Header';

class Home extends Component {
  render() {
    return (
      <div id="home-container">
        {/* <FullPageNav history={this.props.history}/> */}
        <section id="hero">
          <Hero />
        </section>

        {/* <section id="about">
          <About />
        </section>

        <section id="featured">
          <Featured />
        </section>

        <section id="contact">
          <Contact />
        </section> */}
      </div>
    );
  }
}

export default Home;