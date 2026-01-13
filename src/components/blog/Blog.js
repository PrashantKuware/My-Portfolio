import React from "react";
import Title from "../home/Title";
import { blogImgOne,blogImgFour, blogImgFive, blogImgSix } from "../../assets";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Certification" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <a
            href="https://drive.google.com/file/d/1HpWBskAQgimrHTuEtSY81v0yOKobyAdr/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BlogCard
              image={blogImgOne}
              title="August 20, 2024"
              subTitle="Udemy-2024 Web Development Bootcamp"
              category="Web-Development"
            />
          </a>
          <a
            href="https://drive.google.com/file/d/12-7GeIu2p34jp7LELj5ToMNC92cb0Spx/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BlogCard
              image={blogImgFive}
              title="June 06, 2025"
              subTitle="Oracle- Databases for Developers"
              category="SQL Database"
            />
          </a>
        </div>
        <div className="px-6">
          <a
            href="https://drive.google.com/file/d/1JqLQ_wvbSVw1x2F7YRfs8xQCTffM5F5i/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BlogCard
              image={blogImgFour}
              title="May 30, 2025"
              subTitle="Naukri.com AINCAT-2025 AIR-40"
              category="Aptitude Test"
            />
          </a>
          <a
            href="https://drive.google.com/file/d/1auAVDqQwpRyEyG9wCXOSvjfc4fBxbxpo/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BlogCard
              image={blogImgSix}
              title="June 10, 2025"
              subTitle="JPMorgan Chase & Co.- Software Engineering"
              category="Job Simulation"
            />
          </a>
        </div>

        
      </div>
    </div>
  );
};

export default Blog;
