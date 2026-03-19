import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center px-10 md:px-20 bg-transparent py-16 overflow-hidden">

      <div className="w-full max-w-5xl">

        <motion.h2 
          className="text-5xl md:text-6xl font-bold text-primary drop-shadow-[0_0_10px_rgba(255,102,178,0.3)]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        <p className="mt-8 text-gray-400 text-lg max-w-3xl">
          A curated snapshot of the technologies and subjects I’ve worked with through coursework, internship, and projects.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              title: "Programming Languages",
              items: ["C++", "Python"],
            },
            {
              title: "Web Basics",
              items: ["HTML", "CSS"],
            },
            {
              title: "Databases",
              items: ["MySQL", "PostgreSQL"],
            },
            {
              title: "Tools & Technologies",
              items: ["Pandas", "NumPy", "MS Excel", "Power BI"],
            },
            {
              title: "Core Subjects",
              items: ["DBMS", "Operating Systems", "Computer Networks"],
            },
          ].map((cat, idx) => (
            <motion.div
              key={idx}
              className="group p-6 bg-[#161b22]/50 backdrop-blur-xl rounded-2xl border border-white/5 hover:border-primary/50 hover:bg-[#161b22]/80 transition-all duration-500 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-100 group-hover:text-primary transition-colors">
                {cat.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {cat.items.map((item) => (
                  <motion.span
                    key={item}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-[#0b0f19]/40 border border-white/10 text-gray-200 hover:border-primary/50 hover:text-primary transition-colors"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.15 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}