/*export const metadata = {
  title: 'Portfolio - Uses',
  description: 'The uses page of my portfolio.',
}
*/
"use client";
import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Text from "../../components/Text/Text.jsx";
import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
import UseCard from "../../components/UseCard/UseCard.jsx";
import UsesSection from "../../components/UsesSection/UsesSection.jsx";
import { useState } from "react";

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
  heading: "Uses",
  body: "This section contains the Uses that we can give to all of the tools that we have built, that we have worked on and stuff we would like to see in our own repository in the case that we choose the best of our work to show.",
  };

const items = [
  {
    groupName: 'Workstation',
    items: [
      {
        title: '16” MacBook Pro, M1 Max, 64GB RAM (2022)',
        description:
          'I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations.',
      },
      {
        title: 'Dell UltraSharp U2717D',
        description:
          'I have two of these monitors and they’re great. I’ve had them for years and they’ve been rock solid.',
      },
      {
        title: 'Keychron K2',
        description:
          'I’ve been using this keyboard for a few years now and I love it. It’s wireless, has a great feel, and the battery lasts forever.',
      },
      {
        title: 'Logitech MX Master 3',
        description:
          'I’ve been using this mouse for a few years now and it’s great. It’s wireless, has a great feel, and the battery lasts forever.',
      },
      {
        title: 'Audio-Technica ATH-M50x',
        description:
          'I’ve been using these headphones for a few years now and they’re great. They’re comfortable, sound good, and are built like a tank.',
      },
      {
        title: 'Rain Design mStand',
        description:
          'I’ve been using this stand for my MacBook Pro for a few years now and it’s great. It’s sturdy, looks good, and keeps my laptop cool.',
      },
    ],
  },
  {
    groupName: 'Development',
    items: [
      {
        title: 'Visual Studio Code',
        description:
          'I use VS Code for all of my development work. It’s fast, has great extensions, and is highly customizable.',
      },
      {
        title: 'iTerm2 + Oh My Zsh',
        description:
          'I use iTerm2 as my terminal and Oh My Zsh as my shell. It’s a great combination. I use the Agnoster theme with the Fira Code font.',
      },
    ],
  },
  {
    groupName: 'Design',
    items: [
      {
        title: 'Figma',
        description:
          'I use Figma for all of my design work. It’s fast, has great collaboration features, and is highly customizable.',
      },
      {
        title: 'Whimsical',
        description:
          'I use Whimsical for all of my wireframing and flowcharting. It’s fast, has great collaboration features, and is highly customizable.',
      },
    ],
  },
  {
    groupName: 'Productivity',
    items: [
      {
        title: 'Notion',
        description:
          'I use Notion for all of my note-taking and knowledge management. It’s fast, has great collaboration features, and is highly customizable.',
      },
      {
        title: 'Alfred',
        description:
          'I use Alfred for all of my productivity needs. It’s fast, has great features, and is highly customizable.',
      },
    ],
  },
];

export default function Uses() {
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
                                <div className="flex justify-center w-full padding-4">
                                  <UsesSection items={items} />
                                  </div>
    <div className={"page"}>
                     <header>{/* placeholder */}</header>
                     <main>{/* placeholder */}</main>
                     <Footer links={links} />
                   </div>
</>  );
}
