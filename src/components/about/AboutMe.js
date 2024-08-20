import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! I'm Prashant Kuware</h2>
          <p className="text-base leading-6 ">
            I'm a Web Developer and Programmer skilled in Java, JavaScript, and
            proficient in data structures and algorithms. currently pursuing my
            masters in computer application from Birla Institute of Technology
            MESRA Ranchi.<br></br> My passion lies in transforming intricate concepts
            into elegant solutions, whether it's through coding or crafting
            intuitive user interfaces. With a keen eye for detail and a knack
            for problem-solving, I aim to deliver websites that are not only
            visually appealing but also user-friendly and efficient.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Age:</span>
            24
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Residence:</span>
            Indore
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Phone:</span>
            +91-9685525430
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Email:</span>
            nittprashant6070@gmail.com
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Address:</span>
            Madhya Pradesh, India
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
