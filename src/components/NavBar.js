import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/Logo.svg";
export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("null");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      let links = document.querySelectorAll(".navbar-link");
      let activeLink = null;
  
      links.forEach(function(link) {
        let section = document.querySelector(link.hash);
        if (
          section.offsetTop <= window.scrollY + navbarHeight &&
          section.offsetTop + section.offsetHeight > window.scrollY + navbarHeight
        ) {
          activeLink = link;
        } else {
          link.classList.remove("active"); 
        }
      });
      if (activeLink) {
        activeLink.classList.add("active"); 
        setActiveLink(activeLink.hash.substring(1));
      } else {
        setActiveLink(null);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

 
  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto not-active">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={
                activeLink === "about" ? "active navbar-link" : "navbar-link"
              }
            >
              About me
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={
                activeLink === "contact" ? "active navbar-link" : "navbar-link"
              }
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};