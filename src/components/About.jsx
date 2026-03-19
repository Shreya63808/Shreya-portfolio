import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center px-10 md:px-20 bg-transparent py-20">

      <div className="max-w-5xl">

        <motion.h2 
          className="text-5xl md:text-6xl font-bold text-[#FF66B2] relative inline-block drop-shadow-[0_0_10px_rgba(255,102,178,0.3)]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
          <span className="block h-1.5 w-24 bg-gradient-to-r from-[#FF66B2] to-transparent mt-3 rounded-full"></span>
        </motion.h2>

        <motion.p
          className="mt-10 text-xl md:text-2xl text-gray-300 leading-relaxed max-w-6xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I am a final-year MCA student, nearing graduation, with a strong foundation in Python programming and a growing understanding of AI and Machine Learning. I have worked on some major projects which enhanced my problem-solving, analytical thinking, and real-world development skills. I am passionate about building intelligent solutions and continuously improving my technical abilities
        </motion.p>

      </div>

    </section>
  );
}