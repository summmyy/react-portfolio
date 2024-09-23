import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Heading,
    Box,
    Text,
    VStack

 } from '@chakra-ui/react';
import LandingSection from '../components/LandingSection';

const About = () => {
  return (
    <div>
      <Header />
      <LandingSection />
      <Footer />
    </div>
  );
}

export default About;