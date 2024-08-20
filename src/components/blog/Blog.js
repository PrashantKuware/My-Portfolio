import React from "react";
import Title from "../home/Title";
import { blogImgOne } from "../../assets";
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
        </div>

        <div className="px-6">
          {/* <BlogCard
            image={blogImgThree}
            title="July 13, 2020"
            subTitle="Designer Conference at Florida, USA 2020"
            category="Documentation"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Blog;
