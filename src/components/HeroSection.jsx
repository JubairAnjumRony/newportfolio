import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import MERN1 from '../assets/MERN1.png'
import { motion } from "framer-motion";

const HeroSection = () => {
    const handleScrollToSection = (id) => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="home"
            className=" text-white"
        >
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-2 gap-5 mt-10 lg:mt-0 overflow-hidden">
                {/* Left Content */}
                <div className="flex flex-col items-start lg:items-start mb-6 lg:mb-0 ">
                    <motion.h2
                        initial={{ x: -70, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: .5 }}
                        className="text-3xl lg:text-4xl font-medium text-gray-300">Hello, I am</motion.h2>
                    <motion.h1
                        initial={{ x: -70, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: .5 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold mt-2 text-white">
                        Rony Islam
                    </motion.h1>
                    <motion.h2
                        initial={{ x: -70, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: .5 }}
                        className="text-2xl md:text-3xl font-medium bg-gradient-to-r from-teal-400  to-pink-500 text-transparent bg-clip-text mt-2">
                        <Typewriter
                            words={['FullStack Developer', 'Compettive Programer','Problem solver']}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={100}
                            deleteSpeed={100}
                            delaySpeed={1000}
                        />
                    </motion.h2>
                    <motion.i
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: .5 }}
                        className="mt-4 text-gray-300  lg:max-w-[576px] xl:max-w-[768px] tracking-wide">
                        {/* A passionate developer who loves creating beautiful and functional web applications. */}
                        A passionate developer with a deep love for crafting beautiful and highly functional web applications. I enjoy turning ideas into reality by combining creativity with cutting-edge technology to build seamless and engaging user experiences.
                    </motion.i>

                    {/* Buttons */}
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: .5 }}
                        className="flex gap-4 mt-6">
                        <a
                            href='https://drive.google.com/file/d/1Dod7iir4TKsJ-ojkjwjei4k64ur5qyzE/view?usp=sharing' // Replace with the path to your resume
                            target='_blank'
                            download
                            className="border duration-300 border-blue-600 hover:bg-blue-900 text-white md:text-lg py-2 px-6 rounded-lg font-semibold shadow-md transition"
                        >
                            Get Resume
                        </a>
                        <button
                            onClick={() => handleScrollToSection('projects')} // Replace 'projects' with your section ID
                            className="bg-blue-900 md:text-lg hover:bg-transparent hover:border hover:border-blue-600 duration-300 text-white py-2 px-6 rounded-lg font-semibold shadow-md transition"
                        >
                            Projects
                        </button>
                    </motion.div>

                    {/* Social Links */}
                    {/* <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: .5 }}
                        className="flex gap-4 mt-6">
                        <a
                            href="https://github.com/" // Replace with your GitHub link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl hover:text-teal-500 transition"
                        >
                            <FaGithub size={32} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/masud-rana-955788318/" // Replace with your LinkedIn link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl hover:text-teal-500 transition"
                        >
                            <FaLinkedin size={32} />
                        </a>
                        <a
                            href="https://www.facebook.com/profile.php?id=100065806763087" // Replace with your Facebook link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl hover:text-teal-500 transition"
                        >
                            <FaFacebook size={32} />
                        </a>
                    </motion.div>*/}
                </div> 

                {/* Right Content (MERN Image) */}
                <motion.img
                    src={MERN1}
                    alt="Profile"
                    className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] xl:w-[500px]  xl:h-[500px] hover:cursor-wait"
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        duration: 50,
                        ease: "linear"
                    }}
                    whileHover={{ rotate: 0 }}
                />
            </div>
        </section>
    );
};

export default HeroSection;

