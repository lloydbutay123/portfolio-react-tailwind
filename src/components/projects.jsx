import React from "react";
import ContactPreview from "./contactPreview";
import ProjectsPreview from "./projectsPreview.jsx";

const projects = () => {
  document.title = "Projects | John Lloyd Butay";
  return (
    <section className="dark:bg-black">
      <div className="px-[40px]">
        <div className="py-40 flex items-center d font-bold">
          <h1 className="dark:text-white text-6xl md:text-[100px] uppercase">
            My Works
          </h1>
        </div>
      </div>
      <ProjectsPreview />
      <ContactPreview />
    </section>
  );
};

export default projects;
