import styled from "styled-components";
import useOnClickOutside from "../Hooks/useOnClickOutside";
import { KEY_CODES } from "../Utils/Utils";
import { useState, useEffect, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const StyledMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const StyledHamburgerButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 10;
    margin-right: -15px;
    padding: 15px;
    border: 0;
    background-color: transparent;
    color: inherit;
    text-transform: none;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
  }

  .ham-box {
    display: inline-block;
    position: relative;
    width: var(--hamburger-width);
    height: 24px;
  }

  .ham-box-inner {
    position: absolute;
    top: 50%;
    right: 0;
    width: var(--hamburger-width);
    height: 2px;
    border-radius: var(--border-radius);
    background-color: var(--green);
    transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: ${props => (props.menuOpen ? `0.12s` : `0s`)};
    transform: rotate(${props => (props.menuOpen ? `225deg` : `0deg`)});
    transition-timing-function: cubic-bezier(
      ${props => (props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)}
    );
    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      left: auto;
      right: 0;
      width: var(--hamburger-width);
      height: 2px;
      border-radius: 4px;
      background-color: var(--green);
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }
    &:before {
      width: ${props => (props.menuOpen ? `100%` : `120%`)};
      top: ${props => (props.menuOpen ? `0` : `-10px`)};
      opacity: ${props => (props.menuOpen ? 0 : 1)};
      transition: ${({ menuOpen }) =>
    menuOpen ? 'var(--ham-before-active)' : 'var(--ham-before)'};
    }
    &:after {
      width: ${props => (props.menuOpen ? `100%` : `80%`)};
      bottom: ${props => (props.menuOpen ? `0` : `-10px`)};
      transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
      transition: ${({ menuOpen }) => (menuOpen ? 'var(--ham-after-active)' : 'var(--ham-after)')};
    }
  }
`;

const StyledSidebar = styled.aside`
  display: none;
  filter: none;
  pointer-events: auto;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 50px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0;
    background-color: var(--light-navy);
    box-shadow: -10px 0px 30px -15px var(--navy-shadow);
    z-index: 9;
    transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
    visibility: ${props => (props.menuOpen ? 'visible' : 'hidden')};
    transition: var(--transition);
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    flex-direction: column;
    color: var(--lightest-slate);
    font-family: var(--font-mono);
    text-align: center;
  }

  ol {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;

    li {
      position: relative;
      margin: 0 auto 20px;
      counter-increment: item 1;
      font-size: clamp(var(--fz-sm), 4vw, var(--fz-lg));

      @media (max-width: 600px) {
        margin: 0 auto 10px;
      }

      &:before {
        content: '0' counter(item) '.';
        display: block;
        margin-bottom: 5px;
        color: var(--green);
        font-size: var(--fz-sm);
      }
    }

    a {
      display: inline-block;
      text-decoration: none;
      text-decoration-skip-ink: auto;
      color: inherit;
      position: relative;
      transition: var(--transition);
      width: 100%;
      padding: 3px 20px 20px;

      &:hover,
      &:focus-visible {
        color: var(--green);
        outline: 0;
      }
    }
  }

  .resume-link {
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    transition: var(--transition);
    padding: 18px 50px;
    margin: 10% auto 0;
    width: max-content;

    &:hover,
    &:focus-visible {
      outline: none;
      box-shadow: 4px 4px 0 0 var(--green);
      transform: translate(-5px, -5px);
    }
    &:after {
      display: none !important;
    }
  }
`;

export default function Menu () {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const buttonRef = useRef(null);
  const navRef = useRef(null);
  
  const [menuFocusables, setMenuFocusables] = useState([]);
  const [firstFocusableEl, setFirstFocusableEl] = useState(null);
  const [lastFocusableEl, setLastFocusableEl] = useState(null);

  const setFocusables = () => {
    const focusables = [buttonRef.current, ...Array.from(navRef.current.querySelectorAll('a'))];
    setMenuFocusables(focusables);
    setFirstFocusableEl(focusables[0]);
    setLastFocusableEl(focusables[focusables.length - 1]);
  };

  const handleBackwardTab = (e) => {
    if (document.activeElement === firstFocusableEl) {
      e.preventDefault();
      lastFocusableEl?.focus(); // Using optional chaining here
    }
  };

  const handleForwardTab = (e) => {
    if (document.activeElement === lastFocusableEl) {
      e.preventDefault();
      firstFocusableEl?.focus(); // Using optional chaining here
    }
  };


  const onKeyDown = (e) => {
    switch (e.key) {
      case KEY_CODES.ESCAPE:
      case KEY_CODES.ESCAPE_IE11: {
        setMenuOpen(false);
        break;
      }

      case 'Tab': {
        if (menuFocusables && menuFocusables.length === 1) {
          e.preventDefault();
          break;
        }
        if (e.shiftKey) {
          handleBackwardTab(e);
        } else {
          handleForwardTab(e);
        }
        break;
      }

      default: {
        break;
      }
    }
  };

  const onResize = (e) => {
    if (e.currentTarget.innerWidth > 768) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);


    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
   }, []);

  useEffect(() => {
    document.body.classList.toggle('blur', menuOpen);
    const mainComponent = document.getElementById('mainId');
    if (mainComponent) {
      mainComponent.classList.toggle('blur', menuOpen);
    }
    window.addEventListener('resize', onResize);
    setFocusables();

    return () => {
      document.body.classList.remove('blur');
      if (mainComponent) {
        mainComponent.classList.remove('blur');
      }
      window.removeEventListener('resize', onResize);
    };
  }, [menuOpen]);
  
    const wrapperRef = useRef();
    useOnClickOutside(wrapperRef, () => setMenuOpen(false));

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <StyledMenu>
        <div ref={wrapperRef}>
          <StyledHamburgerButton
            onClick={toggleMenu}
            menuOpen={menuOpen}
            ref={buttonRef}
            aria-label="Menu">
            <div className="ham-box">
              <div className="ham-box-inner" />
            </div>
          </StyledHamburgerButton>
  
          <StyledSidebar menuOpen={menuOpen} aria-hidden={!menuOpen} tabIndex={menuOpen ? 1 : -1}>
            <nav ref={navRef}>
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
                        onClick={() => {
                          scrollToSection('about');
                          setMenuOpen(false); 
                        }}
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
                        onClick={() => {
                          scrollToSection('projects');
                          setMenuOpen(false); 
                        }}
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
                        onClick={() => {
                          scrollToSection('contact');
                          setMenuOpen(false); 
                        }}
                      >
                        Contact
                      </ScrollLink>
                    </li>
                </ol>  
              <a href="/resume.pdf" className="resume-link">
                Resume
              </a>
            </nav>
          </StyledSidebar>
        </div>
      </StyledMenu>
    );
  }