import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/productActions";
import {
  addItem,
  incrementQuantity,
  decrementQuantity,
} from "../redux/slices/cartSlice";
import {
  Box,
  Text,
  Image,
  Heading,
  Button,
  Stack,
  Flex,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const cartItems = useSelector((state) => state.cart.items);
  const product = products.find((item) => item._id === id); // Use _id for matching

  useEffect(() => {
    if (!products.length) {
      dispatch(getProducts());
    }
  }, [dispatch, products]);

  const handleAddToCart = () => {
    const existingItem = cartItems.find((item) => item._id === product._id);
    if (existingItem) {
      dispatch(incrementQuantity(product._id));
    } else {
      dispatch(addItem(product));
    }
  };

  const handleIncrement = () => {
    dispatch(incrementQuantity(product._id));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity(product._id));
  };

  if (!product) {
    return <Text>Loading...</Text>;
  }

  const cartItem = cartItems.find((item) => item._id === product._id);

  return (
    <Box p={32} bgGradient="linear(to-br, teal.300, blue.500)" borderRadius="lg" boxShadow="lg">
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-evenly"
        boxShadow="xl"
        rounded="lg"
        p={5}
        bg="white"
      >
        <Box p={4}>
          <Image
            src={product.url} // Use the correct field for the image URL
            alt={product.name}
            boxSize={{ base: "100%", md: "500px" }}
            objectFit="contain"
            borderRadius="md"
            borderWidth={2}
            borderColor="teal.500"
            mb={{ base: 4, md: 0 }}
          />
        </Box>
        <Box ml={{ md: 4 }} p={6} bg="white" borderRadius="md" boxShadow="lg">
          <Heading size="lg" color="teal.600">{product.name}</Heading>
          <Text fontWeight="bold" color="gray.600">Brand: {product.brand}</Text>
          <Text fontSize="2xl" color="teal.500" mt={2}>
            Price: ${product.price}
          </Text>

          {/* Stock Availability */}
          <Text mt={2} fontWeight="bold" color={product.inStock ? "green.500" : "red.500"}>
            {product.inStock ? "In Stock" : "Out of Stock"}
          </Text>

          {/* Product Rating */}
          <HStack spacing={1} mt={2}>
            {Array.from({ length: 5 }, (_, i) => (
              <Icon
                key={i}
                as={StarIcon}
                color={i < Math.round(product.totalRating) ? "yellow.400" : "gray.300"}
                boxSize={5}
              />
            ))}
            <Text color="gray.500">({product.ratings.length})</Text>
          </HStack>

          {/* Product Description */}
          <Text mt={4} fontSize="lg" color="gray.700">
            {product.description}
          </Text>

          {cartItem ? (
            <Stack direction="row" align="center" mt={4}>
              <Button colorScheme="teal" onClick={handleDecrement}>-</Button>
              <Text fontWeight="bold">{cartItem.quantity}</Text>
              <Button colorScheme="teal" onClick={handleIncrement}>+</Button>
            </Stack>
          ) : (
            product.inStock && ( // Only show button if in stock
              <Button colorScheme="teal" onClick={handleAddToCart} mt={4} size="lg">
                Add to Cart
              </Button>
            )
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default SingleProduct;
