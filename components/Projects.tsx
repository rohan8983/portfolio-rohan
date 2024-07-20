import React from "react";
import InstaVCImg from "../public/assets/projects/PeoplelinkInstaVC.png";
import CryptoImg from "../public/assets/projects/crypto.jpg";
import NetflixImg from "../public/assets/projects/netflix.jpg";
import TwitchImg from "../public/assets/projects/twitch.jpg";

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
            title="InstaVC"
            tech="React JS"
            projectUrl="/instavc"
          />
          <ProjectItem
            backgroundImg={CryptoImg}
            title="Crypto"
            tech="React JS"
            projectUrl="/crypto"
          />
          <ProjectItem
            backgroundImg={NetflixImg}
            title="Netflix"
            tech="React JS"
            projectUrl="/nextflix"
          />
          <ProjectItem
            backgroundImg={TwitchImg}
            title="Twitch"
            tech="React JS"
            projectUrl="/twitch"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
