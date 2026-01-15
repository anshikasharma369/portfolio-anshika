import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";

const projectsData = [
    {
        title: "AI Agent WhatsApp Chat Bot",
        description: "Built a data-driven chat agent handling 1,000+ daily queries. Integrated OpenAI API for NLP-based intent detection, reducing response time from hours to seconds with 95% classification accuracy.",
        tech: ["OpenAI API", "NLP", "Python", "APIs"],
        links: { github: "https://github.com", live: "#" }
    },
    {
        title: "IMDB Movie Review Sentiment Analysis",
        description: "Performed sentiment classification modeling using LSTMs for large-scale text data. Developed a detailed dashboard for insights and an interactive prediction app for real-time user input.",
        tech: ["LSTM", "Python", "Dashboards", "Deep Learning"],
        links: { github: "https://github.com", live: "#" }
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-[#020617] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 hover:-translate-y-2 transition-all duration-300 group"
                        >
                            <div className="p-6 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-slate-800 rounded-lg text-cyan-400 group-hover:text-cyan-300 transition-colors">
                                        <Folder size={24} />
                                    </div>
                                    <div className="flex gap-4 text-slate-400">
                                        <a href={project.links.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                                            <Github size={20} />
                                        </a>
                                        <a href={project.links.live} className="hover:text-white transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs font-medium text-slate-500 font-mono">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
