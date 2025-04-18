import React, { useState, useEffect } from 'react';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import HeroSection from './HeroSection';
import AboutMeSection from './AboutMeSection';
import ContactSection from './ContactSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import './../index.css'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('home'); // Default active item

    useEffect(() => {
        // Update active section on scroll
        const handleScroll = () => {
            const sections = document.querySelectorAll('div[id]'); // Select sections with IDs
            let currentSection = 'home'; // Default section

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (window.scrollY >= sectionTop - sectionHeight / 3) {
                    currentSection = section.getAttribute('id'); // Get the current section's ID
                }
            });

            setActiveItem(currentSection); // Update active section
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup event listener
        };
    }, []);

    const handleScrollToSection = (id) => {
        setActiveItem(id); // Update active item
        setMenuOpen(false); // Close menu on mobile
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); // Scroll to the section
        window.location.hash = id; // Update URL hash
    };

    return (
        <>
            <nav className="navbar h-[80px] place-content-center shadow-md text-white fixed top-0 left-0 right-0 z-30 border-b border-blue-500 backdrop-blur-md rounded-2xl">
                <div className="container mx-auto flex justify-center items-center py-4 px-2">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        {/* <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-transparent bg-clip-text">
                            Masud Rana
                        </h1> */}
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-400  to-pink-500 text-transparent bg-clip-text">
                               {/* Rony Islam */}
                        </h1>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:flex items-center gap-6">
                        {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                            <a
                                key={item}
                                onClick={() => handleScrollToSection(item)}
                                className={`${activeItem === item
                                    ? 'text-lg border-b-2 border-teal-400 px-2 text-teal-400'
                                    : 'text-lg hover:text-teal-400  px-2'
                                    }`}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Hamburger Menu */}
                    <div
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden bg-gradient-to-r from-indigo-300 to-teal-300 p-2 rounded-md text-2xl text-black cursor-pointer"
                    >
                        {menuOpen ? <IoMdClose /> : <IoMdMenu />}
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div
                    className={`${menuOpen ? 'left-0' : '-left-full'
                        } flex flex-col navbar absolute duration-500    shadow-md z-50 pt-8 mt-8`}
                >

                         
                    
                
                    
                    <div className="flex flex-col gap-4 py-4 px-4">
                        {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                            <a
                                key={item}
                                onClick={() => {handleScrollToSection(item);  setMenuOpen(false);}}
                                className={`${activeItem === item
                                    ? 'block text-lg font-semibold border-b-2 border-teal-500 text-teal-400'
                                    : 'block text-base hover:text-teal-400 pt-2'
                                    }`}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </a>


                              

                        ))}
                    </div>
                            {/* Close Button inside Mobile Menu */}
                            <div className="
                            ">
                               <IoMdClose
                                 onClick={() => setMenuOpen(false)}
                                 className="text-3xl cursor-pointer text-teal-400"
                               />
                             </div>
                      
                </div>
                
            </nav>

            {/* Sections */}
            <div id="home" className="pt-32">
                <HeroSection />
            </div>
            <div id="about" className="">
                <AboutMeSection />
            </div>
            <div id="skills" className="">
                <SkillsSection />
            </div>
            <div id="projects" className="">
                <ProjectsSection />
            </div>
            <div id="contact" className="">
                <ContactSection />
            </div>
        </>
    );
};

export default Navbar;
