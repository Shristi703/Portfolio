
import React from 'react';                      
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Social from '../components/Social';
import Footer from '../components/Footer';  


const Home = () => {
    return (
        <>
            <section id="Hero">
                <Hero />
            </section>

            
            <section id="About">
                <About />
            </section>

            
            <section id="Skills">
                <Skills />
            </section>

            
            <section id="Projects">
                <Projects />
            </section>

            <section id="social">
                <Social/>
            </section>
            
            <section id="Contact">
                <Contact/>
            </section>

        
            <section id="Footer">
                <Footer/>
            </section>
        </>
    );
}

export default Home;
