import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#041c50] text-gray-300 py-6">
            <div className='container mx-auto px-4 md:flex justify-between items-center text-center'>
                <div>
                    <p>&copy; {new Date().getFullYear()} Rony Islam. All Rights Reserved.</p>
                </div>
                <div>
                    <span>Design & Develop By <span className='text-lg font-semibold'>Rony Islam</span></span>
                </div>
                <div className="flex justify-center md:justify-end space-x-4 mt-3 md:mt-0">
                    <a
                        href="https://www.facebook.com/anjum.rony"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" transition hover:text-blue-500"
                    >
                        <FaFacebook size={32} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/md-jubair-anjum-rony/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:text-blue-500"
                    >
                        <FaLinkedin size={32} />
                    </a>
                    <a
                        href="https://github.com/JubairAnjumRony"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" transition hover:text-blue-500"
                    >
                        {/* <i className="fab fa-github"></i> */}
                        <FaGithub size={32} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
