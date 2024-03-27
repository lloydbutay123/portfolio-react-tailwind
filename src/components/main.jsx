import Hero from "./hero";
import ProjectsPreview from "./projectsPreview";
import Services from "./services";
import Quotes from "./quotes";
import ContactPreview from "../components/contactPreview";

const main = () => {
  document.title = "John Lloyd Butay | Career Portfolio"
  return (
    <div>
      <Hero />
      <Services />
      <ProjectsPreview />
      <Quotes />
      <ContactPreview />
    </div>
  );
};

export default main;
