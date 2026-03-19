import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center px-10 md:px-20 bg-transparent py-20 overflow-hidden">

      <div className="w-full max-w-6xl mx-auto text-center">

        <motion.h2 
          className="text-5xl md:text-6xl font-bold text-primary mb-16 drop-shadow-[0_0_10px_rgba(255,102,178,0.3)]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 mt-12">

          {[
            {
              title: "CHURN PREDICTION SYSTEM",
              desc: (
                <>
                  Developed a machine learning model to predict customer churn and identify high-risk users.
                  <br />
                  Performed data preprocessing, feature engineering, and trained models using Logistic Regression
                  <br />
                  and Random Forest to generate actionable insights.
                  <br />
                  <br />
                  This project helps businesses take proactive steps to improve customer retention and optimize growth strategies.🔥
                </>
              ),
            },
            {
              title: "PERSONAL CHAT ASSISTANT",
              desc: (
                <>
                  Built a Python-based intelligent chat assistant capable of handling user queries and automating responses.
                  <br />
                  Implemented rule-based logic and functional modules to simulate human-like interactions and improve response efficiency.
                  <br />
                  <br />
                  The system enhances user experience by providing quick, consistent, and automated assistance.
                </>
              ),
            },
            {
              title: "AI-BASED SMART TRAFFIC MANAGEMENT",
              desc: (
                <>
                  Designed an AI-driven traffic management system to reduce congestion and optimize traffic flow at intersections.
                  <br />
                  Applied machine learning techniques to dynamically control signal timings based on real-time vehicle data.
                  <br />
                  <br />
                  This solution improves traffic efficiency, reduces waiting time, and supports smarter urban moblity planning
                </>
              ),
            },
          ].map((p, i) => (
            <motion.div 
              key={i} 
              className="group p-10 bg-[#161b22]/50 backdrop-blur-xl rounded-3xl border border-white/5 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(255,102,178,0.15)] cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-100 group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="text-gray-400 mt-4 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}