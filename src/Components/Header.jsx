import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

const Header = () => {
  return (
    <>
    <div className="relative mb-4 min-h-screen bg-cover bg-center flex items-center  w-screen" id='home' style={{backgroundImage:"url('/header_img.png')"}}>
    
        <div 
        className="container text-center mx-auto p-6 text-white pt-32">
            <h2 className="font-semibold text-5xl sm:text-6xl md:text-[82px] max-w-3xl mx-auto">Explore homes that fit your dreams</h2>  
            <div className="space-x-6 mt-16">   
                <a href="#projects" className="py-3 px-8 rounded border border-white hover:bg-black">Projects</a>
                <a href="#contact" className="py-3 px-8 rounded bg-blue-500 hover:bg-black">ContactUs</a>
            </div>
        </div>
    </div>
    <About/>
    <Projects/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default Header;
