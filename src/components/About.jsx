import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";

export default function About() {
    return (
        <section id="about" className="py-20 bg-[#0B1120] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="relative w-full aspect-[3/4] max-w-sm mx-auto rounded-2xl overflow-hidden bg-slate-800 border-2 border-slate-700 group shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10" />
                            <img
                                src={profileImg}
                                alt="Anshika Sharma"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />

                            {/* Decorative elements */}
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-500/20 blur-2xl rounded-full z-0"></div>
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 blur-2xl rounded-full z-0"></div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-semibold text-white mb-4">
                            AI & Data Science Engineer
                        </h3>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            I am an AI & Data Science Engineer with 1 year of experience in Data Analysis, Machine Learning, Deep Learning, and NLP-driven solutions.
                            I have a proven track record of transforming raw data into actionable insights and deploying data products at scale.
                        </p>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            My expertise spans across Statistics, ML modeling, visualization, and business-driven analytics. I enjoy building production-ready workflows
                            and have hands-on experience with cloud deployment.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="p-4 rounded-lg bg-slate-900 border border-slate-800">
                                <h4 className="text-cyan-400 font-bold text-xl mb-1">1+</h4>
                                <p className="text-slate-500 text-sm">Years Experience</p>
                            </div>
                            <div className="p-4 rounded-lg bg-slate-900 border border-slate-800">
                                <h4 className="text-cyan-400 font-bold text-xl mb-1">10+</h4>
                                <p className="text-slate-500 text-sm">Projects Completed</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
