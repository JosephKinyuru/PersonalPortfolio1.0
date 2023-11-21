import { Link, useLocation } from 'react-router-dom';
import IconLogo from "./IconLogo";
import useScrollDirection from '../Hooks/useScrollDirection';
import styled, { css } from 'styled-components';
import { useState, useEffect } from 'react';
import '../Css/NavBar.css';
import PropTypes from 'prop-types';
import Menu from './Menu';
import { Link as ScrollLink } from 'react-scroll';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: rgba(10, 25, 47, 0.85);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }

  @media (prefers-reduced-motion: no-preference) {
    ${props =>
    props.scrolldirection === 'up' &&
      !props.scrolledtotop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(0px);
        background-color: rgba(10, 25, 47, 0.85);
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
      `};

    ${props =>
    props.scrolldirection === 'down' &&
      !props.scrolledtotop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(calc(var(--nav-scroll-height) * -1));
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
      `};
  }
`;


export default function NavBar () {
  const location = useLocation();
  const isHome = location.pathname === '/';  
  const scrolldirection = useScrollDirection('down');
  const [scrolledtotop, setScrolledToTop] = useState(true);
  
  const handleScroll = () => {
      setScrolledToTop(window.pageYOffset < 50);
    };

  useEffect(() => {

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
      <>
      <StyledHeader className="StyledHeader" scrolldirection={scrolldirection} scrolledtotop={scrolledtotop}>
          <nav className="SyledNav">
          <div className="logo" tabIndex="-1">
              {isHome ? (
                  <a href="/" aria-label="home">
                  <div className="logo-container">
                      <IconLogo />
                  </div>
                  </a>
              ) : (
                  <Link to="/" aria-label="home">
                  <div className="logo-container">
                      <IconLogo />
                  </div>
                  </Link>
              )}
              </div>
              <div className="StyledLinks">
                  <ol>
                      <li>              
                        <ScrollLink
                          activeClass="active"
                          to="about"
                          style={{ cursor: 'pointer' }} 
                          spy={true}
                          smooth={true}
                          offset={-70} 
                          duration={300}
                          onClick={() => scrollToSection('about')}
                        >
                          About
                        </ScrollLink>
                        </li>
                      <li>
                        <ScrollLink
                          activeClass="active"
                          to="projects"
                          style={{ cursor: 'pointer' }} 
                          spy={true}
                          smooth={true}
                          offset={-70} 
                          duration={300}
                          onClick={() => scrollToSection('projects')}
                        >
                          Projects
                        </ScrollLink>
                      </li>
                      <li>
                        <ScrollLink
                          activeClass="active"
                          to="contact"
                          style={{ cursor: 'pointer' }} 
                          spy={true}
                          smooth={true}
                          offset={-70} 
                          duration={300}
                          onClick={() => scrollToSection('contact')}
                        >
                          Contact
                        </ScrollLink>
                      </li>
                  </ol>
                  <div>
                      <a className="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                          Resume
                      </a>
                  </div>
              </div>
            <Menu />
          </nav>
      </StyledHeader>
      </>
  )
}

NavBar.propTypes = {
  isHome: PropTypes.bool,
};
