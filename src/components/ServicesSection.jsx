import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";


const services = [
  {
    title: "General Programming",
    description:
      "I help with general programming tasks, from debugging to writing code from scratch. ",
    getImageSrc: "src/images/general_programming.avif", 
  },
  {
    title: "Web Development",
    description:
      "I build beautiful websites and web applications that are responsive and user-friendly.",
    getImageSrc: "src/images/web_dev.jpg",

  },
  {
    title: "Algorithm Design",
    description:
      "I help with algorithm design and implementation, from simple to complex problems.",
    getImageSrc: "src/images/algo_design.png",
  },
  {
    title: "Automation",
    description:
      "I help with automating tasks, from web scraping to creating bots.",
    getImageSrc: "src/images/Automation.jpg",
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
