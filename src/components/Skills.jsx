import { motion } from "framer-motion";

const skillsData = [
    { category: "Programming", skills: ["Python"] },
    { category: "Machine Learning", skills: ["Classification", "Regression", "Clustering", "Feature Engineering", "Model Evaluation"] },
    { category: "Deep Learning", skills: ["ANN", "CNN", "RNN", "LSTM", "GRU", "Transformers", "BERT"] },
    { category: "NLP & GenAI", skills: ["Tokenization", "Embeddings", "Sentiment Analysis", "RAG", "LLMs", "AI Agents"] },
    { category: "Frameworks", skills: ["Scikit-learn", "TensorFlow", "Keras", "PyTorch"] },
    { category: "Backend & APIs", skills: ["FastAPI", "Flask", "REST APIs"] },
    { category: "Cloud & MLOps", skills: ["Docker", "CI/CD", "MLflow", "AWS/GCP"] },
    { category: "Databases", skills: ["PostgreSQL", "MySQL", "Vector Databases", "SQL"] },
    { category: "Tools", skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Streamlit", "Git", "GitHub"] },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-[#020617] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-all hover:bg-slate-900"
                        >
                            <h3 className="text-xl font-semibold text-cyan-400 mb-4">{category.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
