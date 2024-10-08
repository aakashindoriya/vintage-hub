import { Box } from '@chakra-ui/react'
import React from 'react'
import Slider from '../component/Slider'
import { CarouselData } from '../component/CarouselData'

const Home = () => {
  return (
    <>
      <Box>
        <Box as='section' id='Slider-Section' >
          <Slider i={CarouselData} />
        </Box>
        {/* <FeaturedProducts /> */}
      </Box>
    </>
  )
}

export default Home


