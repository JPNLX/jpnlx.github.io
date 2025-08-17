"use client";
import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Text from "../../components/Text/Text.jsx";
import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
import { useState } from "react";

// export const metadata = {
//   title: "Portfolio - Projects",
//   description: "The projects page of my portfolio.",
// };

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

const text = {
  heading: "Projects",
  body: "Here are some of the projects I have worked on. After generating your fancy text symbols, you can copy and paste the to most websites and text processors. You could use it to generate a fancy Agario name (yep, weird text in agario is probably generated using a fancy text converter similar to this), to generate a creative-looking instagram, facebook, tumblr, or twitter post, for showing up n00bs on Steam, or just for sending messages full of beautiful text to your buddies.",
};

const projects = [
  {
    name: "Project A",
    logo: "/ensign.png",
    content:
      "Working with the Product Team to discover strong solutions for a digital product to support hourly-based external recruiting services. Our platform is built on top of firebase technologies, including Firestore, Cloud Functions (NodeJS + Typescript), Sveltekit, and Typesense.",
    link: "https://www.ensign.edu/",
  },
  {
    name: "Project B",
    logo: "/ensign.png",
    content:
      "Working with the Product Team to discover strong solutions for a digital product to support hourly-based external recruiting services. Our platform is built on top of firebase technologies, including Firestore, Cloud Functions (NodeJS + Typescript), Sveltekit, and Typesense.",
    link: "https://www.ensign.edu/",
  },
  {
    name: "Project C",
    logo: "/ensign.png",
    content:
      "Working with the Product Team to discover strong solutions for a digital product to support hourly-based external recruiting services. Our platform is built on top of firebase technologies, including Firestore, Cloud Functions (NodeJS + Typescript), Sveltekit, and Typesense.",
    link: "https://www.ensign.edu/",
  },
  {
    name: "Project D",
    logo: "/ensign.png",
    content:
      "Working with the Product Team to discover strong solutions for a digital product to support hourly-based external recruiting services. Our platform is built on top of firebase technologies, including Firestore, Cloud Functions (NodeJS + Typescript), Sveltekit, and Typesense.",
    link: "https://www.ensign.edu/",
  },
  {
    name: "Project E",
    logo: "/ensign.png",
    content:
      "Working with the Product Team to discover strong solutions for a digital product to support hourly-based external recruiting services. Our platform is built on top of firebase technologies, including Firestore, Cloud Functions (NodeJS + Typescript), Sveltekit, and Typesense.",
    link: "https://www.ensign.edu/",
  },
  {
    name: "Project F",
    logo: "/ensign.png",
    content:
      "Working with the Product Team to discover strong solutions for a digital product to support hourly-based external recruiting services. Our platform is built on top of firebase technologies, including Firestore, Cloud Functions (NodeJS + Typescript), Sveltekit, and Typesense.",
    link: "https://www.ensign.edu/",
  },
];

export default function Projects() {
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
      <div className="flex justify-center w-full padding-4">
        <div className="text-left w-full max-w-2xl">
          <Text heading={text.heading} body={text.body} />
        </div>
      </div>

      <div className="flex justify-center w-full mb-20">
        <div className="flex flex-wrap gap-8 justify-center w-full max-w-7xl m-10">
          {projects.map((project, index) => (
            <div key={index} className="min-w-[400px] flex-1">
              <ProjectCard name={project.name} logo={project.logo} content={project.content} link={project.link} />
            </div>
          ))}
        </div>
      </div>

      <div className="page">
        <header>{/* placeholder */}</header>
        <main>{/* placeholder */}</main>
        <Footer links={links} />
      </div>
    </>
  );
}
