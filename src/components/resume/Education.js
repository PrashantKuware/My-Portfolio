import React from "react";
import ResumeTitle from "./ResumeTitle";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2023 - 2025"
          title=" Master Of Computer Application"
          subTitle="Birla Institute Of Technology, Mesra"
          des="CGPA: 7.14/10"
        />
        <ResumeCard
          badge="2016 - 2019"
          title=" Batchlor Of Science"
          subTitle=" Devi Ahilya Vishwavidyalaya, Indore"
          des="Percentage: 67.75%"
        />
        <ResumeCard
          badge="2015 - 2016"
          title="Senior Secondary (Class XII)"
          subTitle="Government HS School, Vijay Nagar, Indore"
          des=" Percentage: 74.20%"
        />
      </div>
    </div>
  );
};

export default Education;
