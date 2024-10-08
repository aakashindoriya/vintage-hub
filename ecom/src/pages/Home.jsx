import { Box } from '@chakra-ui/react'
import React from 'react'
import Slider from '../component/Slider'
import { CarouselData } from '../component/CaraouselData'

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

// VITE_FIREBASE_API_KEY=AIzaSyA2z3rrtxUqm34wMI3Lu1hRRbCK_InHV20
// VITE_FIREBASE_AUTH_DOMAIN= vintage-hub-308b0.firebaseapp.com
// VITE_FIREBASE_PROJECT_ID= vintage-hub-308b0
// VITE_FIREBASE_STORAGE_BUCKET= vintage-hub-308b0.appspot.com
// VITE_FIREBASE_MESSAGE_SENDER_ID= 224367720453
// VITE_FIREBASE_APP_ID= 1:224367720453:web:7cc5b6708df484ea27046c
// VITE_FIREBASE_MEASUREMENTID= G-DBEQK5KW5P

// VITE_FAKE_STORE_API=https://fakestoreapi.com