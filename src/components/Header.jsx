import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Text } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: sunmioye@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/summmyy",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/sunmioye/",
  },
];

const Header = () => { 
  const headerRef = useRef(null); 
  
  useEffect(() => { 
    let prevScrollPos = window.scrollY; 
  
    const handleScroll = () => { 
      const currentScrollPos = window.scrollY; 
      const headerElement = headerRef.current; 
      if (!headerElement) { 
        return; 
      } 
      if (prevScrollPos > currentScrollPos) { 
        headerElement.style.transform = "translateY(0)"; 
      } else { 
        headerElement.style.transform = "translateY(-200px)"; 
      } 
      prevScrollPos = currentScrollPos; 
    } 
    window.addEventListener('scroll', handleScroll) 
  
    return () => { 
      window.removeEventListener('scroll', handleScroll) 
    } 
  }, []); 
  
  const handleClick = (anchor) => () => { 
    const id = `${anchor}-section`; 
    const element = document.getElementById(id); 
    if (element) { 
      element.scrollIntoView({ 
        behavior: "smooth", 
        block: "start", 
      }); 
    } 
  }; 
  return ( 
    <Box 
      // position="fixed" 
      top={0} 
      left={0} 
      right={0} 
      translateY={0} 
      transitionProperty="transform" 
      transitionDuration=".3s" 
      transitionTimingFunction="ease-in-out" 
      backgroundColor="#18181b" 
      ref={headerRef} 
    > 
      <Box color="white" maxWidth={{base : '100vw','2xl':"1280px"}} > 
        <HStack 
          px={{base : 1.5,xl : 110,'2xl' : 72}} 
          py={4} 
          justifyContent={{xl: "space-between",'2xl' : "space-between" }}
          alignItems="center" 
        > 
          <nav> 
            <HStack spacing={8} width='30vw'> 
            <Text fontSize="2xl" fontWeight="bold"> <a href="/"> Sunmi Oye </a></Text>
              {socials.map(({ icon, url }) => (
                <a
                  key={url} 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                > 
                  <FontAwesomeIcon icon={icon} size="2x" key={url} /> 
                </a> 
              ))} 
            </HStack> 
          </nav> 
          <nav> 
            <HStack 
            spacing={8} 
            width='100vw'
            px={{base : 1.5,xl : 450,'2xl' : 72}}
            > 

              <ChakraLink as={ReactRouterLink} to = '/projects' >
                <Text fontSize='xl'  _hover={{ cursor : 'pointer'}} >  Projects </Text>
              </ChakraLink>

              <ChakraLink as={ReactRouterLink} to = '/contact' >
                <Text fontSize='xl'  _hover={{ cursor : 'pointer'}} >  Contact </Text>
              </ChakraLink>

              <ChakraLink as={ReactRouterLink} to = '/services' >
                <Text fontSize='xl'  _hover={{ cursor : 'pointer'}} >  Services </Text>
              </ChakraLink>

              <ChakraLink as={ReactRouterLink} to = '/about' >
                <Text fontSize='xl' _hover={{ cursor : 'pointer'}} >  About </Text>
              </ChakraLink>

              {/* <a href="/projects" > 
                Projects 
              </a> 
              <a href="/contact" > 
                Contact Me 
              </a> 
              <a href="/services" > 
                Services 
              </a> 
              <a href="/about" > 
                About 
              </a>  */}
            </HStack> 
          </nav> 
        </HStack> 
      </Box> 
    </Box> 
  ); 
 }; 
 
 export default Header; 