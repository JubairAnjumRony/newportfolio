import React from 'react';
import { FaBriefcase, FaCode, FaProjectDiagram } from 'react-icons/fa';
// import myPhoto from '../assets/my-profile.jpeg'
import portfolio1 from '../assets/portfolio1.png'
import { motion } from "framer-motion";

const AboutMeSection = () => {
    return (
        <section className="text-white py-16">
            <div className="container mx-auto px-4">
                {/* Title Section */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: .5 }}
                >
                    <h2 className="text-4xl font-semibold">Get To Know</h2>
                    <h3 className="text-2xl mt-2">About Me</h3>
                </motion.div>

                <div className="flex flex-col lg:flex-row lg:items-center overflow-hidden">
                    {/* Left Content (Image) */}
                    <motion.div
                        className="w-full lg:w-1/3 mb-8 lg:mb-0 flex justify-center"
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: .5 }}
                    >
                        <img
                     
                            src={portfolio1}
                            alt="Profile"
                            className="w-[80%] sm:w-[60%] md:w-[50%] md:h-[400px] lg:w-full xl:h-[450px] 2xl:h-[550px] rounded-lg shadow-lg"
                        />
                    </motion.div>

                    {/* Right Content (Info) */}
                    <div className="w-full lg:w-2/3 lg:pl-12">
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: .5 }}
                        >
                            {/* Experience Card */}
                            <div
                                className="bg-[#041c50] hover:bg-transparent border-transparent hover:border hover:border-blue-700 p-4 rounded-lg text-center transition"
                            >
                                <FaBriefcase className="text-3xl mx-auto mb-2" />
                                <h4 className="font-semibold">Experience</h4>
                                <p>1+ Years Home Working</p>
                            </div>
                            {/* Course Card */}
                            <div className="bg-[#041c50] hover:bg-transparent border-transparent hover:border hover:border-blue-700 p-4 rounded-lg text-center transition">
                                <FaCode className="text-3xl mx-auto mb-2" />
                                <h4 className="font-semibold">Course</h4>
                                <p>Programming-Hero</p>
                            </div>
                            {/* Projects Card */}
                            <div className="bg-[#041c50] hover:bg-transparent border-transparent hover:border hover:border-blue-700 p-4 rounded-lg text-center transition">
                                <FaProjectDiagram className="text-3xl mx-auto mb-2" />
                                <h4 className="font-semibold">Projects</h4>
                                <p>45+ Projects Completed</p>
                            </div>
                        </motion.div>
                        <motion.p className="mt-6"
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: .5 }}
                        >
                        Hello I am Jubair Anjum Rony.I am currently completing my B.Sc in ICT from Islamic University,Kushtia. I love progrmaing and devlelopemnt from a very young age. I do compettive programing,participate in Hackathon,participate in club activities.My Future goal is to become a software Enginner. My hobby is Travelling, bike riding .

                        </motion.p>
                        <motion.p className="mt-4"
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: .5 }}
                        >
                            <strong>Expected Passing Year:</strong> 2026 <br />
                            <strong>CGPA:</strong> ---
                        </motion.p>
                        <motion.a
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: .5 }}
                            href="https://github.com/JubairAnjumRony"
                            target="_blank"
                            className="mt-6 inline-block bg-transparent border border-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-900 transition"
                        >
                            READ MORE
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMeSection;
