import Hero from "./hero";
import ProjectsPreview from "./projectsPreview";
import Services from "./services";
import Footer from "./footer";
import Quotes from "./quotes";
import ContactPreview from "../components/contactPreview";

const main = () => {
  return (
    <div>
      <Hero />
      <Services />
      <ProjectsPreview />
      <Quotes />
      <ContactPreview />
      <Footer />
    </div>
  );
};

export default main;
