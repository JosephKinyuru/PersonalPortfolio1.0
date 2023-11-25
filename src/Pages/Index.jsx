import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Hero from "../Sections/Hero";
import About from "../Sections/About";
import Projects from "../Sections/Projects";
import Contact from "../Sections/Contact";
import { useState, useEffect } from "react";

export default function Index() {

    const [scrollDirection, setScrollDirection] = useState(null);
    const [scrolledToTop, setScrolledToTop] = useState(true);
  
    useEffect (() => {
      const updateCursorPosition = (e) => {
        const flashlight = document.querySelector('.flashlight');
        flashlight.style.setProperty('--x', e.clientX + 'px');
        flashlight.style.setProperty('--y', e.clientY + 'px');
      };
  
      document.addEventListener('mousemove', updateCursorPosition);
  
      return () => {
        document.removeEventListener('mousemove', updateCursorPosition);
      };
    }, []);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
        setScrollDirection(scrollTop > 0 && scrollTop > window.scrollY ? "up" : "down");
        setScrolledToTop(scrollTop <= 0);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  

    return (
      <>
        <article>
          <NavBar scrollDirection={scrollDirection} scrolledToTop={scrolledToTop} />
          <main className="fillHeight" id="mainId">
            <Hero/>
            <About/>
            <Projects/>
            <Contact/>
          </main>
          <Footer />
        </article>
        <div className="flashlight"></div>
      </>
    );
  }