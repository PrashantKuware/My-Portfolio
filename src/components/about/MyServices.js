import React from "react";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="I specialize in crafting high-quality websites using HTML, CSS, JavaScript, React.js, and Express.js. My designs prioritize modern aesthetics, seamless functionality, and exceptional user experience for professional-grade results."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Data structures and algorithms"
        subTitle="Proficient in data structures & algorithms, mastering problem-solving with efficiency & precision for robust software development. Expertise ensures optimized solutions."
      />
    
    </div>
  );
};

export default MyServices;
