import React from "react";
import { Avatar, Heading, SimpleGrid, VStack, Box, Text, Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import summy from "../images/Summy.jpg"

const greeting = "Hello, I am Sunmi! 👋🏾";
const bio1 = "A Software Developer";
const bio2 = "specialised in React";
const bio3 = "who loves learning new things."
// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.

const breakpoints = {
  base: "0em", // 0px
  sm: "30em", // ~480px. em is a relative unit and is dependant on the font-size.
  md: "48em", // ~768px
  lg: "62em", // ~992px
  xl: "80em", // ~1280px
  "2xl": "96em", // ~1536px
};

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    
  >
  <SimpleGrid columns={{base:1,xl:2 ,'2xl': 2}} padding={2}>
    <Box paddingLeft={{xl : 200,'2xl':200}}>
      {/* <Avatar
        name='Sunmi Oye' 
        src='https://media.licdn.com/dms/image/D5603AQFspU7XsdnW9A/profile-displayphoto-shrink_800_800/0/1665945380320?e=1699488000&v=beta&t=TCTEGUpnfmPv-kkmnAcidiYqqBdfjITuZc7QylmeLb4' 
        bg='teal.500' 
        size={{base : '2xl',xl:'2xl','2xl':'2xl'}}
        /> */}
      <Image 
      src="https://media.licdn.com/dms/image/D5603AQFspU7XsdnW9A/profile-displayphoto-shrink_800_800/0/1665945380320?e=1699488000&v=beta&t=TCTEGUpnfmPv-kkmnAcidiYqqBdfjITuZc7QylmeLb4"
      borderRadius='full'
      boxSize={{base : '150px',xl:'300px','2xl':'300px'}}
      />
    </Box>
    <Box>
      <Heading>
        Hello, I am Sunmi! 👋🏾
      </Heading>
      <br/>
      <VStack>
      <Text >
      I'm a passionate Software Developer with an insatiable curiosity and a deep love for learning new things. This digital collection is a window into my world, showcasing a range of coding projects and my interests in diverse topics like technology, finance, and games. Join me on this journey of exploration and discovery!
      </Text>
      </VStack>
    </Box>
    </SimpleGrid>
  </FullScreenSection>
);

export default LandingSection;
