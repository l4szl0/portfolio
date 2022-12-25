import React from "react";
import Image from "next/image";
import Link from "next/link";
import htmlImg from "../public/assets/skills/html.png";
import cssImg from "../public/assets/skills/css.png";
import reactImg from "../public/assets/skills/react.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] m-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-blue-600">
          Projects
        </p>
        <h2 className="py-8">What I Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="HTML Cím"
            backgroundImg={htmlImg}
            projectUrl="/property"
          />

          <ProjectItem
            title="CSS Cím"
            backgroundImg={cssImg}
            projectUrl="/property"
          />

          <ProjectItem
            title="React Cím"
            backgroundImg={reactImg}
            projectUrl="/property"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
