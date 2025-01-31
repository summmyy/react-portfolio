import React from "react";
import FullScreenSection from "../components/FullScreenSection";
import { Box, 
    Heading,
    SimpleGrid,
    Text,
    VStack
} from "@chakra-ui/react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import project from "../images/projects_img.jpeg";
import services from "../images/services_img.jpeg";
import contact from "../images/contact_img.jpeg";
import aboutMe from "../images/aboutMe_img.jpeg";
import { useNavigate as navigate } from "react-router-dom";


const pages = [
  {
    title: "Projects",
    description:
      "Come check out some of the projects I've worked on. From websites to web applications, I've done it all.",
    getImageSrc: project, 
    link: () => navigate('/projects')
  },
  {
    title: "Services",
    description:
      "I build beautiful websites and web applications that are responsive and user-friendly. I also help with general programming tasks, from debugging to writing code from scratch.",
    getImageSrc: services,
    link: () => navigate('/services')
  },
  {
    title: "Contact",
    description:
      "Feel free to reach out to me for any inquiries or collaborations. I'm always open to new opportunities.",
    getImageSrc: contact,
    link: () => navigate('/contact')
  },
  {
    title: "About Me",
    description:
      "Learn more about me and my journey. Uncover the story behind the code and the person behind the screen.",
    getImageSrc: aboutMe,
    link: () => navigate('/about')
  },
];

const Homepage = () => {
  return (
    <div>
    <Header />
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
        <Box>
        <Heading>
            Mission Statement
        </Heading>
        <br/>
        <VStack>
        <Text >
            My mission is to leverage technology to create innovative solutions that improve everyday life. I am dedicated to continuous learning and applying my skills to solve real-world problems, making a positive impact one line of code at a time.
        </Text>
        </VStack>
        </Box>

      <Heading as="h1" id="projects-section">
        Site Nav
      </Heading>
      <SimpleGrid
        columns={{base:1,xl:2 ,'2xl': 2}}
        spacing={8}
      >
        {pages.map((page) => (
          <Card
            key={page.title}
            title={page.title}
            description={page.description}
            imageSrc={page.getImageSrc}
            link={page.link}
          />
        ))}
      </SimpleGrid>
    </FullScreenSection>
    <Footer />
    </div>
  );
};

export default Homepage;
