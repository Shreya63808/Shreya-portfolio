import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center px-10 md:px-20 bg-transparent py-20"
    >
      <div className="w-full max-w-5xl space-y-8">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-primary drop-shadow-[0_0_10px_rgba(255,102,178,0.3)]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="group p-8 bg-[#161b22]/50 backdrop-blur-xl rounded-2xl border border-white/5 hover:border-primary/50 hover:bg-[#161b22]/80 transition-all duration-500 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-100 group-hover:text-primary transition-colors">
            AI/ML Intern - ODISHA COMPUTER APPLICATION CENTER
          </h3>

          <p className="text-gray-400 mt-3 text-lg leading-relaxed">
            Completed a hands-on internship focused on artificial intelligence and machine learning, working on real-world datasets and problem statements.
          </p>

          <ul className="mt-6 space-y-3 text-gray-300 text-lg list-disc pl-6">
            <li>Performed data preprocessing, cleaning, and exploratory data analysis using Python to extract meaningful insights.</li>
            <li>Built and evaluated basic machine learning models to solve practical business and analytical problems.</li>
            <li>Applied analytical thinking to interpret data and support data-driven decision-making.</li>
            <li>Gained practical exposure to working with structured datasets and industry-relevant tools.</li>
          </ul>

          <p className="text-gray-300 mt-6 text-lg leading-relaxed">
            This experience strengthened my understanding of machine learning workflows and enhanced my ability to translate data into actionable insights.
          </p>

          <a
            href="https://drive.google.com/file/d/1WsHhW5eiSBHUbsKuTX7UYmuHbstfFHlC/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center bg-[#FF66B2] hover:bg-[#FF3399] text-white px-10 py-3 rounded-full font-bold shadow-[0_0_15px_rgba(255,102,178,0.4)] transition-all duration-300 transform hover:scale-105"
          >
            View Internship Certificate
          </a>
        </div>
      </div>
    </section>
  );
}

