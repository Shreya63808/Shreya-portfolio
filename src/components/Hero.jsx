import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 md:px-20 relative bg-transparent overflow-hidden">

      {/* LEFT */}
      <motion.div 
        className="max-w-2xl text-center md:text-left z-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="text-gray-400 text-lg uppercase tracking-widest font-medium">Hello, I'm</p>

        <h1 className="text-6xl md:text-8xl font-extrabold text-[#FF66B2] mt-2 drop-shadow-[0_0_20px_rgba(255,102,178,0.4)]">
          Shreya Mohanty
        </h1>

        <TypeAnimation
          sequence={["Aspiring Data Analyst", 2000, "AI/ML Enthusiast", 2000]}
          wrapper="span"
          speed={50}
          className="text-2xl text-pink-300 block mt-4 font-semibold"
          repeat={Infinity}
        />

        <p className="mt-8 text-lg text-gray-400 max-w-lg leading-relaxed">
          Passionate about data, machine learning, and building impactful solutions that drive innovation.
        </p>

        <p className="mt-6 text-base md:text-lg text-gray-300 max-w-lg leading-relaxed italic">
          "Try and fail, but never fail to try."
        </p>

        <div className="mt-10 flex flex-col items-center md:items-start gap-8">
          <a
            href="https://drive.google.com/file/d/14koxfHYo0T2VwGlKd0IrGa6Wd-8y8U-V/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="bg-[#FF66B2] hover:bg-[#FF3399] text-white px-10 py-3 rounded-full font-bold shadow-[0_0_15px_rgba(255,102,178,0.4)] transition-all duration-300 transform hover:scale-105"
          >
            Resume
          </a>

          {/* Social Icons Row */}
          <div className="flex gap-6 items-center">
            <a href="https://github.com/Shreya63808" target="_blank" rel="noreferrer" className="text-pink-300 hover:text-white transition-all transform hover:scale-125">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/shreya-mohanty-325563349?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="text-pink-300 hover:text-white transition-all transform hover:scale-125">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://www.instagram.com/shreya060904?igsh=a3Q0NnlqNTg1Z3dp" target="_blank" rel="noreferrer" className="text-pink-300 hover:text-white transition-all transform hover:scale-125">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </a>
          </div>
        </div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div 
        className="relative mt-10 md:mt-0 z-10"
        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-[#FF66B2] blur-[100px] opacity-20 rounded-full animate-pulse"></div>
        <img
          src={profile}
          className="relative w-80 h-80 md:w-[420px] md:h-[420px] object-cover rounded-full border-4 border-[#FF66B2]/50 shadow-[0_0_30px_rgba(255,102,178,0.3)] filter contrast-110"
          alt="Profile"
        />
      </motion.div>

    </section>
  );
}