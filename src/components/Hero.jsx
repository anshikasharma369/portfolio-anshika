import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center bg-[#020617] overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-cyan-400 font-semibold tracking-wide uppercase mb-4">Hello, I am</h2>
                    <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 tracking-tight">
                        Anshika <span className="text-slate-400">Sharma</span>
                    </h1>
                    <h2 className="text-2xl sm:text-4xl text-slate-300 font-medium h-[60px] mb-8">
                        <span style={{ color: '#00d2ff', fontWeight: 'bold' }}>
                            <Typewriter
                                words={['AI & Data Science Engineer', 'Machine Learning Expert', 'NLP Practitioner', 'Deep Learning Enthusiast']}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h2>
                    <p className="max-w-2xl text-slate-400 text-lg sm:text-xl leading-relaxed mb-10">
                        Transforming raw data into actionable insights and deploying scalable AI solutions.
                        Strong foundation in Statistics, ML modeling, and cloud-ready workflows.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noreferrer"
                            className="px-8 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20 transition-all font-semibold text-center"
                        >
                            Check Resume
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            className="px-8 py-3 rounded-full border border-slate-700 text-white hover:border-slate-500 transition-all font-semibold text-center"
                        >
                            LinkedIn Profile
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
