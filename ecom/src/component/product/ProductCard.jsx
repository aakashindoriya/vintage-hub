/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  addItem,
  incrementQuantity,
  decrementQuantity,
} from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  console.log(product);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      dispatch(incrementQuantity(product.id));
    } else {
      dispatch(addItem(product));
    }
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };
  const cartItem = cartItems.find((item) => item.id === product.id);
  return (
    <Center key={product.id} py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${product.image})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Link to={`/products/${product.id}`}>
            <Image
              rounded={"lg"}
              height={230}
              width={282}
              objectFit={"cover"}
              src={product.image}
              alt={product.title}
            />
          </Link>
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {product.brand}
          </Text>
          <Heading
            fontSize={"lg"}
            fontFamily={"body"}
            fontWeight={500}
            noOfLines={1}
          >
            {product.title}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              ${product.price}
            </Text>
            <Text textDecoration={"line-through"} color={"gray.600"}>
              ${product.originalPrice}
            </Text>
          </Stack>
          {cartItem ? (
            <Stack direction="row" align="center">
              <Button onClick={() => handleDecrement(product.id)}>-</Button>
              <Text>{cartItem.quantity}</Text>
              <Button onClick={() => handleIncrement(product.id)}>+</Button>
            </Stack>
          ) : (
            <Button colorScheme="teal" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </Button>
          )}
        </Stack>
      </Box>
    </Center>
  );
};

export default ProductCard;
