import Nav from "./nav";
import Hero from "./hero";
import Projects from "./projects";
import Services from "./services";
import Contact from "./contact";
import Footer from "./footer";
import Quotes from "./quotes";

const main = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Services />
      <Projects />
      <Quotes />
      <Contact />
      <Footer />
    </div>
  );
};

export default main;
