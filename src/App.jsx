import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App(){
  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, observerOptions);
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    const skillsSection = document.getElementById('skills');
    if(skillsSection){
      const skillsObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if(entry.isIntersecting){
            document.querySelectorAll('.skill-bar').forEach(bar => {
              const width = bar.getAttribute('data-width') || bar.style.width;
              bar.style.width = '0%';
              setTimeout(()=> bar.style.width = width, 300);
            });
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      skillsObserver.observe(skillsSection);
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e){
        const href = this.getAttribute('href');
        if(href.startsWith('#')){
          e.preventDefault();
          const target = document.querySelector(href);
          if(target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Education />
        <Certificates />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
