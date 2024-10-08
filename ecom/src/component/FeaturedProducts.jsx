import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Grid, Heading, SimpleGrid, Fade } from '@chakra-ui/react';
import ProductCard from './product/ProductCard';

function FeaturedProducts() {
  const [featureData, setFeatureData] = useState([]);
  
  const fetchData = async () => {
    const response = await axios.get('https://fakestoreapi.com/products?limit=4');
    setFeatureData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box textAlign="center">
      {/* Animated Heading */}
      <Fade in>
        <Heading
          fontWeight={600}
          fontSize={['2xl', '3xl', '4xl']}
          mb={6}
          color="teal.600"
          // textShadow="1px 1px #000"
        >
          Featured Products
        </Heading>
      </Fade>

      <SimpleGrid columns={[1, 2, 3, 4]} spacing={8}>
        {featureData.map((product) => (
          <ProductCard key={product.id} item={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default FeaturedProducts;
