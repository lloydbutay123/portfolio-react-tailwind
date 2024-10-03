import Hero from "./hero";
import Projects from "./projects";
import About from "./about";
import Services from "./services";
import Contact from "./contact";

const main = () => {
  document.title = "John Lloyd Butay | Career Portfolio"
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default main;
