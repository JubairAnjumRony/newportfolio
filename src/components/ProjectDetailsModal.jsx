const ProjectDetailsModal = ({ project, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40 overflow-hidden px-5 md:px-20">
            <div className="relative bg-gradient-to-r from-[#040b22] to-[#011947] p-3 md:p-6 rounded-lg max-w-[1280px] mx-auto text-white shadow-xl max-h-[90vh] overflow-y-auto border border-blue-500">

                {/* Close Icon */}
                <button
                    onClick={onClose}
                    className="fixed top-1 right-1 md:top-2 md:right-2 z-50 text-white bg-red-500 hover:bg-red-700 rounded-full px-5 py-3 transition duration-300"
                >
                    <span className="text-2xl font-bold">×</span>
                </button>

                {/* Title Section */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-semibold">{project.name}</h2>
                </div>

                {/* Image Section */}
                <div className="mb-6">
                    <img
                        src={project.image}
                        alt={project.name}
                        className="w-full rounded-lg shadow-md"
                    />
                </div>

                {/* Project Description */}
                <div className="mb-4">
                    <p className="">{project.description}</p>
                </div>

                {/* Technologies Used Section */}
                <div className="mt-6">
                    <h3 className="text-2xl font-semibold mb-4">Technologies Used:</h3>
                    <div className="space-y-2">
                        <div className="font-semibold text-lg">Frontend:</div>
                        <ul className="list-disc pl-5">
                            {project.technologiesUsed.frontend.map((tech, index) => (
                                <li key={index} className="">{tech}</li>
                            ))}
                        </ul>
                        <div className="font-semibold text-lg mt-4">Backend:</div>
                        <ul className="list-disc pl-5">
                            {project.technologiesUsed.backend.map((tech, index) => (
                                <li key={index} className="">{tech}</li>
                            ))}
                        </ul>
                        <div className="font-semibold text-lg mt-4">Firebase:</div>
                        <ul className="list-disc pl-5">
                            {project.technologiesUsed.firebase.map((tech, index) => (
                                <li key={index} className="">{tech}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Project Description */}
                <div className="mb-4 mt-4">
                    <span className="text-lg block pb-1">Challenges Faced: </span>
                    <span className="">{project.challengesFaced}</span>
                </div>

                <div>
                    <span className="text-lg block pb-1">Future Plans: </span>
                    <span className="">{project.futurePlans}</span>
                </div>

                {/* Buttons Section */}
                <div className="mt-6 flex justify-center md:justify-between flex-wrap gap-4">
                    <a
                        href={project.liveLink}
                        target="_blank"
                        className="bg-green-600 text-white text-center px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300 mb-2 lg:mb-0 w-full sm:w-auto"
                    >
                        View Live Demo
                    </a>
                    <div className="flex gap-5">
                        <a
                            href={project.clientLink}
                            target="_blank"
                            className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition duration-300 mb-2 lg:mb-0 w-full sm:w-auto"
                        >
                            Client
                        </a>
                        <a
                            href={project.serverLink}
                            target="_blank"
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 mb-2 lg:mb-0 w-full sm:w-auto"
                        >
                            Server
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsModal;
