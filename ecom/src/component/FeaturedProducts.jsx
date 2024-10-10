import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Grid, Heading, SimpleGrid, Fade } from '@chakra-ui/react';
import ProductCard from './product/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/productActions';

function FeaturedProducts() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);
  // const [featureData, setFeatureData] = useState(products);
  

  useEffect(() => {
    dispatch(getProducts);
  }, [dispatch]);
  console.log(products)
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
        {products.slice(0,4).map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default FeaturedProducts;
