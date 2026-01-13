import React from "react";
import {
  workImgOne,
  workImgThree,
  workImgFour,
  workImgSix,
  workImgNine,
  workImgTen,
  workImgEleven,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <a
            href="https://ai-enabled-finance-tracking-platefo.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectsCard
              title="FinTrack"
              category="Website"
              image={workImgNine}
            />
          </a>

          <a
            href="https://something-unique-b7146.web.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectsCard
              title="Medico App"
              category="Website"
              image={workImgThree}
            />
          </a>


          <ProjectsCard
            title="QR Code Generator"
            category="API Uses"
            image={workImgOne}
          />
        </div>
        <div className="px-6">
          <a
            href="https://intervuepollingappbfrontend.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectsCard
              title="Real Time Poll & Chat App- Intervue"
              category="Website"
              image={workImgEleven}
            />
          </a>
          <ProjectsCard
            title="BookShop"
            category="Website"
            image={workImgTen}
          />
          <ProjectsCard
            title="Chatting Application"
            category="Socket IO"
            image={workImgSix}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
