import Hero from "./hero";
import Projects from "./projects";
import About from "./about";
import Services from "./services";
import Contact from "./contact";
import Service from "./service";

const main = () => {
  document.title = "John Lloyd Butay | Career Portfolio"
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Service />
      <Contact />
    </div>
  );
};

export default main;
