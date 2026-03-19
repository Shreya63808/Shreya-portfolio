import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-6xl z-50 bg-[#161b22]/70 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl px-6 py-3"
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
    >

      <div className="flex justify-between items-center text-gray-200">

        <h1 className="text-primary font-bold text-xl tracking-widest drop-shadow-[0_0_8px_rgba(255,102,178,0.5)] cursor-pointer">
          SHREYA
        </h1>

        <div className="flex gap-8 font-medium">

          <a href="#about" className="hover:text-primary transition-colors hover:scale-110">About</a>
          <a href="#education" className="hover:text-primary transition-colors hover:scale-110">Education</a>
          <a href="#experience" className="hover:text-primary transition-colors hover:scale-110">Experience</a>
          <a href="#skills" className="hover:text-primary transition-colors hover:scale-110">Skills</a>
          <a href="#projects" className="hover:text-primary transition-colors hover:scale-110">Projects</a>

        </div>

      </div>

    </motion.nav>
  );
}