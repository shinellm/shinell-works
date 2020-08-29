import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaDribbbleSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import logo from '../images/logo.png';

function Footer() {
    return (
        <footer>
            <Navbar bg="light" variant="light">
                <span className="navbar-brand" href="/">
                    {/* <img className='logo' src={logo} alt="" />{' '} */}
                    <span className="copyright">
                        <span className='logo-text'>&copy; 2020 Shinell<b>Manwaring</b></span>
                        <span className="collab">In collaboration with<span className="heart"> ❤ </span>Ayarza Manwaring</span>
                    </span>
                </span>
                <Nav className="ml-auto">
                    <Nav.Link className="social-logo" href="https://dribbble.com/Shinell_M" aria-label="dribbble" target="_blank" rel="noreferrer">
                        <FaDribbbleSquare />
                    </Nav.Link>
                    <Nav.Link className="social-logo" href="https://www.instagram.com/cereal_bites.25/" aria-label="instagram" target="_blank" rel="noreferrer">
                        <FaInstagramSquare />
                    </Nav.Link>
                    <Nav.Link className="social-logo" href="https://www.linkedin.com/in/shinell-manwaring/" aria-label="linkedin" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                    </Nav.Link>
                    <Nav.Link className="social-logo" href="https://github.com/shinellm" aria-label="github" target="_blank" rel="noreferrer">
                        <FaGithubSquare />
                    </Nav.Link>
                </Nav>
            </Navbar>
        </footer>
    );
}

export default Footer;