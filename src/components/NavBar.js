import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {useNavigate } from 'react-router-dom';

import navIcon1 from '../assets/img/nav-icon1.svg';
import logo from '../assets/img/logo.png';
import navIcon2 from '../assets/img/nav-icon2.png';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = ({ setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Navbar.Brand href="/">
        <img src={logo} alt="Linkdin" />
      </Navbar.Brand>
      
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <div className="nav-link navbar-link" onClick={() => handleNavigation('/about')}>About</div>
            <div className="nav-link navbar-link" onClick={() => handleNavigation('/projects')}>Projects</div>
            <div className="nav-link navbar-link" onClick={() => handleNavigation('/contact')}>Contact</div>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/csidarous/"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://github.com/csidarous"><img src={navIcon2} alt="Github" /></a>
              <a href="https://www.instagram.com/sidarous_16/"><img src={navIcon3} alt="Instagram" /></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
