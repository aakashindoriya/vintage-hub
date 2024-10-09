import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import Slider from '../component/Slider';
import { CarouselData } from '../component/CarouselData';
import FeaturedProducts from '../component/FeaturedProducts';


const Home = () => {
  return (
    <>
      <Box>
        {/* Slider Section */}
        <Box as='section' id='Slider-Section' bg="gray.100">
          <Slider i={CarouselData} />
        </Box>

        {/* Featured Products Section with Wavy Background */}
        <Box position="relative" mt={10}>
          <Box
            position="absolute"
            top="-80px"
            left={0}
            width="100%"
            height="120px"
            bgGradient="linear(to-r, teal.300, blue.400)"
            zIndex={-1}
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)', // Creating the wave shape
            }}
          />
          <Box p={10} bg="white" zIndex={1} position="relative">
            <FeaturedProducts />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
