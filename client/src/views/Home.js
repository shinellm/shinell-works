import React, { Component } from 'react';

import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Process from '../components/home/Process';
import Featured from '../components/home/Featured';
import Contact from '../components/home/Contact';
import FullPageNav from '../components/nav/FullPageNav';

// import Header from '../components/Header';

class Home extends Component {
  render() {
    return (
      <div id="home" className="home-container">
        <FullPageNav history={this.props.history}/>
        <Hero />
        <About />
        <Services />
        <Process />
        <Featured />
        <Contact />
      </div>
    );
  }
}

export default Home;