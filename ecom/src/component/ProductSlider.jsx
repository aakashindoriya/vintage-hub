import React from 'react';
import Slider from 'react-slick'; 
import { Box, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

const CustomPrevArrow = (props) => (
    <IconButton 
        onClick={props.onClick} 
        aria-label="Previous" 
        icon={<ChevronLeftIcon />} 
        variant="outline" 
        position="absolute" 
        left="10px" 
        top="50%" 
        transform="translateY(-50%)"
        zIndex="1"
    />
);

const CustomNextArrow = (props) => (
    <IconButton 
        onClick={props.onClick} 
        aria-label="Next" 
        icon={<ChevronRightIcon />} 
        variant="outline" 
        position="absolute" 
        right="10px" 
        top="50%" 
        transform="translateY(-50%)"
        zIndex="1"
    />
);

const ProductSlider = ({ i }) => {
    const settings = {
        dots: true, 
        infinite: true,
        speed: 500,
        slidesToShow: 1, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, 
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <Slider {...settings}>
            {i.map((item, index) => (
                <Box 
                    key={index} 
                    display="flex" 
                    justifyContent="center" 
                    alignItems="center" 
                    height="400px" 
                >
                    <img 
                        src={item.img} 
                        alt={`Product image ${index + 1}`} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                </Box>
            ))}
        </Slider>
    );
};

export default ProductSlider;
