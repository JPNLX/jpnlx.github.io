"use client";
import Navbar from "../components/Navbar/Navbar.jsx";
import Dropdown from "../components/Dropdown/Dropdown.jsx";
import ArticleCard from "../components/ArticleCard/ArticleCard.jsx";
import WorkWidget from "../components/WorkWidget/WorkWidget.jsx";
import SkillsWidget from "../components/SkillsWidget/SkillsWidget.jsx";
import SignupWidget from "../components/SignupWidget/SignupWidget.jsx";
import Footer from "../components/Footer/Footer.jsx";
import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher.jsx";
import ProjectCard from "../components/ProjectCard/ProjectCard.jsx";
import { useState } from "react";
//import "./globals.css";

/**export const metadata = {
  title: "Portfolio - Home",
  description: "Home page of my portfolio.",
};**/

const articles = [
  {
    date: "Nov 15, 2021",
    title: "Everything you need to know about React",
    content:
      "The ability to build stuff in React is one of the hottest skills to have today in software engineering. There is a lot of demand for React developers among startups as well as MNCs.",
    link: "https://medium.com/the-research-nest/everything-you-need-to-know-about-react-ab24da4275ea",
  },
  {
    date: "Sep 2, 2020",
    title: "The Missing Introduction to React",
    content:
      "React is the world’s most popular JavaScript framework, but it’s not cool because it’s popular. It’s popular because it’s cool. Most React introductions jump right into showing you examples of how to use React, and skip the “why”.",
    link: "https://medium.com/javascript-scene/the-missing-introduction-to-react-62837cb2fd76",
  },
];

const skills = [
  { name: "HTML", proficiency: 60, icon: "html5.png" },
  { name: "CSS", proficiency: 50, icon: "css3.png" },
  { name: "JavaScript", proficiency: 75, icon: "javascript.png" },
];

const links = [
  {
    title: "Home",
    url: "/home",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Uses",
    url: "/uses",
  },
];

const darkClassTest = "dark:bg-gray-900 dark:text-white";

export default function Home() {
  // Only for the dropdown component
  const handlePreview = () => {
    console.log("Preview");
  };
  const handleEdit = () => {
    console.log("Edit");
  };
  const handleClone = () => {
    console.log("Clone");
  };
  const handleDelete = () => {
    console.log("Delete");
  };

  return (
    <>
      <div className="relative w-full my-8" style={{ minHeight: 40 }}>
        <div className="flex justify-center">
          <Navbar
            options={[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/projects", label: "Projects" },
              { path: "/uses", label: "Uses" },
            ]}
          />
        </div>
        <div className="absolute" style={{ left: "88%", top: "50%", transform: "translateY(-50%)" }}>
          <ThemeSwitcher />
        </div>
      </div>

      {/* <div>
        <Dropdown onPreview={handlePreview} onEdit={handleEdit} onClone={handleClone} onDelete={handleDelete} />
      </div> */}

      <div className={`flex flex-col md:flex-row gap-8 justify-center`}>
        <ProjectCard
          name={"Ensign College"}
          logo={"/ensign.png"}
          content={
            "Working with the Product Team to discover strong solutions for a digital product to support hourly-based external recruiting services. Our platform is built on top of firebase technologies, including Firestore, Cloud Functions (NodeJS + Typescript), Sveltekit, and Typesense."
          }
          link={"https://www.ensign.edu/"}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-start w-full max-w-5xl mx-auto my-8">
        <div className={"articles flex-1 mx-auto"}>
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              date={article.date}
              title={article.title}
              content={article.content}
              link={article.link}
            />
          ))}
        </div>
        <div className="flex-1 flex flex-col gap-5 mx-auto">
          <SignupWidget
            title={"Stay up to date"}
            content={"Get notified when I publish something new, and unsubscribe at any time."}
          />
          <WorkWidget
            title={"Work"}
            content={"My work experience."}
            experiences={[
              {
                logo: "/slack.png",
                organization: "Slack",
                jobTitle: "Software Engineer",
                startYear: 2016,
                endYear: null,
              },
              {
                logo: "/spotify.png",
                organization: "Spotify",
                jobTitle: "Software Engineer",
                startYear: 2014,
                endYear: 2015,
              },
              {
                logo: "/audible.png",
                organization: "Audible",
                jobTitle: "Software Engineer",
                startYear: 2012,
                endYear: 2013,
              },
              {
                logo: "/microsoft.png",
                organization: "Microsoft",
                jobTitle: "Software Engineer",
                startYear: 2010,
                endYear: 2011,
              },
            ]}
          />
          <SkillsWidget
            title={"Skills"}
            content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi."}
            skills={skills}
          />
        </div>
      </div>
      <div className={"page"}>
        <header>{/* placeholder */}</header>
        <main>{/* placeholder */}</main>
        <Footer links={links} />
      </div>
    </>
  );
}
