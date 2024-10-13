import Hero from "./hero";
import Projects from "./projects";
import About from "./about";
import Service from "./service";
import Footer from "./footer";

const main = () => {
  document.title = "John Lloyd Butay | Career Portfolio";
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Service />
      <Footer />
    </div>
  );
};

export default main;
