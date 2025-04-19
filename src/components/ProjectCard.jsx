
import { motion } from "framer-motion";

const ProjectCard = ({ project, onViewDetails }) => {
    // Split description into words and take the first 15 words
    const descriptionPreview = project.description.split(' ').slice(0, 15).join(' ') + (project.description.split(' ').length > 15 ? '...' : '');

    return (
        <div className="bg-[#041c50] hover:bg-transparent transition duration-300 border border-transparent hover:border-blue-500 text-white rounded-lg overflow-hidden shadow-lg flex flex-col">
            <motion.img
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={project.image} alt={project.name} className="w-full h-56 object-cover" />
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="p-4 flex-1">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="mb-4">{descriptionPreview}</p>
            </motion.div>
            <div
                className="flex justify-between -mt-5 p-4">
                <motion.button
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    onClick={() => onViewDetails(project)}
                    className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
                >
                    View Details
                </motion.button>
                <motion.a
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    href={project.liveLink}
                    target="_blank"
                    className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
                >
                    Live Demo
                </motion.a>
            </div>
        </div>
    );
};

export default ProjectCard;
