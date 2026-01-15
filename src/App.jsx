import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-[#020617] min-h-screen text-slate-300 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

      {/* Footer / Copyright */}
      <footer className="py-6 text-center text-slate-600 text-sm bg-[#0B1120]">
        <p>© {new Date().getFullYear()} Anshika Sharma. All rights reserved.</p>
      </footer>
    </div>
  );
}
