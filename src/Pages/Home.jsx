import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Skills from "../components/Skills.jsx";
import Projects from "../components/Projects.jsx";
import Services from "../components/Services.jsx";
import Contact from "../components/Contact.jsx";

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
    </main>
  );
}

export default Home;