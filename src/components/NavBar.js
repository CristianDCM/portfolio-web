import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/Logo.svg'; //Logo
import navIcon1 from '../assets/img/nav-icon1.svg'; //Linkedin
import navIcon2 from '../assets/img/nav-icon2.svg'; //Facebook
import navIcon3 from '../assets/img/nav-icon3.svg'; //Instagram
import navIcon4 from '../assets/img/nav-icon4.svg'; //Github
import navIcon5 from '../assets/img/nav-icon5.svg'; //X
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
              <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon">
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#about" className={activeLink === 'aboutme' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutme')}>About me</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
            </Nav>
            {/* <span className="navbar-text">
              <div className="social-icon">
                <a href="#" target="_blank"><img src={navIcon1} alt="Linkedin" /></a>
                <a href="https://www.instagram.com/cristianzdmc/" target="_blank"><img src={navIcon3} alt="Instagram" /></a>
                <a href="https://github.com/CristianDCM" target="_blank"><img src={navIcon4} alt="Github" /></a>
                <a href="https://twitter.com/Cristianzdmc14" target="_blank"><img src={navIcon5} alt="X" /></a>
              </div> */}
              {/* <HashLink to='#connect'>
                <button className="vvd"><span>Contact</span></button>
              </HashLink> */}
            {/* </span> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
