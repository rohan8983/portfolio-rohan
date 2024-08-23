import React from "react";
import InstaVCImg from "../public/assets/projects/PeoplelinkInstaVC.png";
import hsbcInsuranceUK from "../public/assets/projects/hsbcInsuranceUK.png";
import LearningMate from "../public/assets/projects/LearningMate.png";
import feelitlive from "../public/assets/projects/feelitlive.png";
import zoonga from "../public/assets/projects/zoonga.png";
import liveSignBermuda from "../public/assets/projects/liveSignBermuda.png";

import { ProjectItem } from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            backgroundImg={InstaVCImg}
            title="PeopleLink"
            tech="ReactJS/NodeJS/MongoDB/JavaScript/HTML/CSS"
            projectUrl="/peoplelink"
          />
          <ProjectItem
            backgroundImg={hsbcInsuranceUK}
            title="HSBC Insurance UK/HK"
            tech="ReactJS/Java/AngularJS/Jest/HTML/CSS"
            projectUrl="/peoplelink"
          />
          <ProjectItem
            backgroundImg={LearningMate}
            title="LearningMate(Client)"
            tech="ReactJS/NodeJS/.Net/HTML/CSS/Jest"
            projectUrl="/peoplelink"
          />
          <ProjectItem
            backgroundImg={feelitlive}
            title="FeelitLIVE"
            tech="ReactJS/NextJS/NodeJS/MongoDB"
            projectUrl="/peoplelink"
          />
          <ProjectItem
            backgroundImg={zoonga}
            title="Zoonga"
            tech="ReactJS/NodeJS/TypeScript/HTML/CSS"
            projectUrl="/peoplelink"
          />
          <ProjectItem
            backgroundImg={liveSignBermuda}
            title="LiveSign Bermuda"
            tech="ReactJS/.Net/HTML/CSS/SQL"
            projectUrl="/peoplelink"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
