import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";


/* {
  title: "Photo Gallery",
  description:
    "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
  getImageSrc: () => require("../images/photo3.jpg"),
  link: 'https://summmyy.github.io/'
},
{
  title: "Event planner",
  description:
    "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
  getImageSrc: () => require("../images/photo4.jpg"),
  link: 'https://summmyy.github.io/'
},
{
    title: "Calculator",
    description:
      "A simple calculator built using react and chakra UI, which allows me and my nerd friends to make calculations while looking at a nice UI.",
    getImageSrc: () => require("../images/photo1.jpg"),
    link: 'https://summmyy.github.io/React-Calculator/'
  },
 */
const projects = [
  {
    title: "Little Lemon",
    description:
      "A restaurant with a beautiful looking webiste and a responsive table booking page, it also has a sign up and login page.",
    getImageSrc: () => require("../images/restaurant.jpg"),
    link: 'https://littlelemons.vercel.app/'
  },
  {
    title: "Penny Pal",
    description:
      "A personal finance tracking app which allows you monitor your finances while giving you a visualization of your data.",
    getImageSrc: () => require("../images/PennyPal.jpg"),
    link: 'https://pennypal.vercel.app/'
  },
  {
    title: "Destined For Greatness",
    description:
      "A game that decides your fate. Play now and see where your path leads",
    getImageSrc: () => require("../images/DFG.jpeg"),
    link: 'https://destined-for-greatnesss.vercel.app'
  },
  {
    title: "Bill Paying Bot",
    description:
      "An automated bot that pays my monthly phone bill, created using selenium and chrome driver",
    getImageSrc: () => require("../images/photo1.jpg"),
    link: 'https://github.com/summmyy?tab=repositories'
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <SimpleGrid
        columns={{base:1,xl:2 ,'2xl': 2}}
        spacing={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            link={project.link}
          />
        ))}
      </SimpleGrid>
    </FullScreenSection>
  );
};

export default ProjectsSection;
