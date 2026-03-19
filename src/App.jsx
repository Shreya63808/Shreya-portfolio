import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Background from "./components/Background";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative isolate bg-[#0b0f19] text-gray-100 min-h-screen">

      {/* Background (behind everything) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Background />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 space-y-0">

        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />

      </main>
      <Footer />

    </div>
  );
}