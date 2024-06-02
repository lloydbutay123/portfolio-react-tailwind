import React from "react";
import ContactPreview from "./contactPreview";
import ProjectsPreview from "./projectsPreview.jsx";

const projects = () => {
  document.title = "Projects | Hanz Ivan Sanchez";
  return (
    <section className="dark:bg-black">
      <ProjectsPreview />
      <ContactPreview />
    </section>
  );
};

export default projects;
