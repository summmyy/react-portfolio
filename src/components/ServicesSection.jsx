import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";
import general_programming from "../images/general_programming.avif";
import web_dev from "../images/web_dev.jpg";
import algo_design from "../images/algo_design.png";
import Automation from "../images/Automation.jpg";


const services = [
  {
    title: "General Programming",
    description:
      "I help with general programming tasks, from debugging to writing code from scratch. ",
    getImageSrc: general_programming, 
  },
  {
    title: "Web Development",
    description:
      "I build beautiful websites and web applications that are responsive and user-friendly.",
    getImageSrc: web_dev,

  },
  {
    title: "Algorithm Design",
    description:
      "I help with algorithm design and implementation, from simple to complex problems.",
    getImageSrc: algo_design,
  },
  {
    title: "Automation",
    description:
      "I help with automating tasks, from web scraping to creating bots.",
    getImageSrc: Automation,
  },
];

const ServicesSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Services
      </Heading>
      <SimpleGrid
        columns={{base:1,xl:2 ,'2xl': 2}}
        spacing={8}
      >
        {services.map((service) => (
          <Card
            key={service.title}
            title={service.title}
            description={service.description}
            imageSrc={service.getImageSrc}
          />
        ))}
      </SimpleGrid>
    </FullScreenSection>
  );
};

export default ServicesSection;
