import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectDetailsModal from './ProjectDetailsModal';
import { motion } from "framer-motion";

// Sample project data
const projectData = [
    {
        id: 1,
        name: 'ParcelTrackr',
        description: 'Parcel Management System -A parcel tracking and management website where there are three dashbards for three types of roles.Here user place the order, Admin assign deliveryMan and deliveryMan delivers it.',
        image: 'https://i.ibb.co.com/7tgXMjvb/Screenshot-2025-02-13-175623.png  ',
        liveLink: 'https://parceltrackr-24489.web.app',
        clientLink: 'https://github.com/JubairAnjumRony/ParcelTrackr-client',
        serverLink: 'https://github.com/JubairAnjumRony/ParcelTrackr-server',
        technologiesUsed: {
            frontend: [
                'React: A JavaScript library for building user interfaces.',
                'React Router Dom: For navigation and routing.',
                'Axios: For API communication.',
                'Stripe for payment gateway implementation',
                'Framer Motion: Animation library for enhancing UI transitions.',
                'Tailwind CSS & DaisyUI: Styling framework for fast and responsive design.',
                'React leaflet to show the delivered location'
            ],
            backend: [
                'Node.js: JavaScript runtime for the server-side application.',
                'Express.js: Web application framework.',
                'MongoDB: NoSQL database for data storage.',
                'JWT: For secure token-based authentication.',
                'Cookie Parser: Middleware to parse cookies.'
            ],
            firebase: [
                'Authentication with Email/password and Google-based authentication.'
            ]
        },
        challengesFaced: 'Implementing real-time updates for delivery status and handling complex state management.',
        futurePlans: 'Real Time parcel Tracking of the rider and delivery Truck and send updates using message and gmail.'
    },
    {
        id: 2,
        name: 'BetterPick',
        description: 'BetterPick is a custom website to recommend user to chosoe their desired and value for money product.The product could be anthing like technological product,cosmetics or anything',
        image: 'https://i.ibb.co.com/6cvnpGdB/Screenshot-2025-02-14-194100.png',
        liveLink: 'https://assignment-11-b34c0.web.app/',
        clientLink: 'https://github.com/JubairAnjumRony/BetterPick-clientside',
        serverLink: 'https://github.com/JubairAnjumRony/BetterPick-serverside',
        technologiesUsed: {
            frontend: [
                'React: A JavaScript library for building user interfaces.',
                'React Router Dom: For navigation and routing.',
                'Axios: For API communication.',
                'Framer Motion: Animation library for enhancing UI transitions.',
                'Tailwind CSS & DaisyUI: Styling framework for fast and responsive design.',
                'Backend Api to fetch and store data from database'

            ],
            backend: [
                'Node.js: JavaScript runtime for the server-side application.',
                'Express.js: Web application framework.',
                'MongoDB: NoSQL database for data storage.',
                'JWT: For secure token-based authentication.',
                'Cookie Parser: Middleware to parse cookies.'
            ],
            firebase: [
                'Authentication with Email/password and Google-based authentication.'
            ]
        },
        challengesFaced: '',
        futurePlans: 'Integrating AI-based job recommendations and enhancing recommendation parsing functionality.'
    },
    {
        id: 3,
        name: 'SportyBros',
        description: 'SportyBros is a custom website made for sports enthusiast people.Here sport lover people can get their all sports equipments under one shop..',
        image: 'https://i.ibb.co.com/B5CYQVRy/Screenshot-2025-02-14-194401.png ',
        liveLink: 'https://assignment-10-55618.web.app/',
        clientLink: 'https://github.com/JubairAnjumRony/SportyBros-client',
        serverLink: 'https://github.com/masud2005/A10-sports-equipment-store-server',
        details: 'Detailed description of the Dance School project, challenges faced, improvements planned, etc.',
        technologiesUsed: {
            frontend: [
                'React: A JavaScript library for building user interfaces.',
                'React Router Dom: For navigation and routing.',
                'Axios: For API communication.',
                'Framer Motion: Animation library for enhancing UI transitions.',
                'Tailwind CSS & DaisyUI: Styling framework for fast and responsive design.',
                'SweetAlert2: For customizable alerts.'
            ],
            backend: [
                'Node.js: JavaScript runtime for the server-side application.',
                'Express.js: Web application framework.',
                'MongoDB: NoSQL database for data storage.',
                'JWT: For secure token-based authentication.',
                'Cookie Parser: Middleware to parse cookies.'
            ],
            firebase: [
                'Authentication with Email/password and Google-based authentication.'
            ]
        },
        challengesFaced: 'Managing inventory efficiently and implementing role-based access control.',
        futurePlans: 'Adding an automated stock tracking system and integrating payment options for equipment purchases.'
    }
    
];


const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleViewDetails = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <section className="py-16 -mt-10 text-white" id="projects">
            <div className="container mx-auto px-4 overflow-hidden">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: .5 }}
                >
                    <h2 className="text-center text-4xl font-semibold ">My Projects</h2>
                    <p className='text-center text-lg font-medium mb-12 pt-4'>Design & Development</p>
                </motion.div>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectData.map((project) => (
                        <ProjectCard key={project.id} project={project} onViewDetails={handleViewDetails} />
                    ))}
                </motion.div>

                {selectedProject &&
                    <ProjectDetailsModal project={selectedProject} onClose={handleCloseModal} />
                }
            </div>
        </section>
    );
};

export default ProjectsSection;
