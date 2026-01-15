import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experienceData = [
    {
        role: "Data Science Intern",
        company: "RGEX Software Services, Jaipur",
        date: "Jan 2025 – Jan 2026",
        description: [
            "Performed EDA and predictive modeling on structured and unstructured datasets improving insight generation speed by 35% through feature engineering.",
            "Built ML models for fraud and risk forecasting, achieving up to 20% performance improvement in generated insights.",
            "Developed interactive dashboards and ML-driven applications, reducing stakeholder dependency on manual reporting.",
            "Collaborated with cross-functional teams to translate business problems into data-driven solutions.",
            "Tech Stack: Python, NLP, APIs, Real-Time Database, Docker, Pandas, scikit-learn, Git, GitHub"
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-[#0B1120] relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Work Experience</h2>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative border-l-2 border-slate-800 ml-4 md:ml-0 space-y-12">
                    {experienceData.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] top-0 w-5 h-5 bg-cyan-500 rounded-full border-4 border-[#0B1120]" />

                            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-all">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                            {exp.role}
                                        </h3>
                                        <p className="text-cyan-400 font-medium">{exp.company}</p>
                                    </div>
                                    <div className="mt-2 md:mt-0 flex items-center text-slate-500 text-sm">
                                        <Briefcase size={16} className="mr-2" />
                                        {exp.date}
                                    </div>
                                </div>

                                <ul className="list-disc list-outside ml-4 space-y-2 text-slate-400 leading-relaxed">
                                    {exp.description.map((item, idx) => (
                                        <li key={idx} className="marker:text-cyan-500/50">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
