import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
  HStack,
  Icon,
  Tooltip,
} from "@chakra-ui/react";
import {
  addItem,
  incrementQuantity,
  decrementQuantity,
} from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";

const ProductCard = ({ product }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const {isAuth }= useSelector((state)=> state.auth)
  console.log(isAuth)
  const { seletedRate, symbol } = useSelector((store) => store.currency);
  // console.log(selectedRate, "from product card");

  // Check if the user is logged in
  const user = JSON.parse(localStorage.getItem('user'));

  const handleAddToCart = (product) => {
    if(isAuth){
      const existingItem = cartItems.find((item) => item._id === product._id);
      if (existingItem) {
        dispatch(incrementQuantity(product._id));
      } else {
        dispatch(addItem(product));
      }
    }
    else{
      alert("Please login to add product to cart")
    }
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const cartItem = cartItems.find((item) => item._id === product._id);

  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"400px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"lg"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
        transition="transform 0.2s"
        _hover={{ transform: "scale(1.05)" }}
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
            backgroundImage: `url(${product.url})`,
            filter: "blur(15px)",
            zIndex: -1,
            borderRadius: 'lg',
          }}
        >
          <Link to={`/products/${product._id}`}>
            <Image
              rounded={"lg"}
              height={230}
              width={282}
              objectFit={"cover"}
              src={product.url}
              alt={product.title}
            />
          </Link>
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {product.brand}
          </Text>
          <Heading fontSize={"lg"} fontFamily={"body"} fontWeight={500} noOfLines={1}>
            {product.title}
          </Heading>
          <Text
            fontSize="sm"
            textAlign="center"
            mb={2}
            bg={useColorModeValue('gray.100', 'gray.700')}
            p={2}
            rounded="md"
          >
            {product.description.length > 50 ? `${product.description.slice(0, 50)}...` : product.description}
          </Text>
          <HStack spacing={1} justifyContent="center" mt={1}>
            {Array.from({ length: 5 }, (_, i) => (
              <Icon
                key={i}
                as={StarIcon}
                color={i < Math.round(product.totalRating) ? "yellow.400" : "gray.300"}
                boxSize={5}
              />
            ))}
          </HStack>
          <Stack direction={"row"} align={"center"} justify={"center"} mt={2}>
            <Text fontWeight={800} fontSize={"xl"}>
              {symbol + " "}{(+product.price * seletedRate).toFixed(2)}
            </Text>
          </Stack>
          {cartItem ? (
            <Stack direction="row" align="center" mt={3}>
              <Button onClick={() => handleDecrement(product._id)}>-</Button>
              <Text fontWeight={600}>{cartItem.quantity}</Text>
              <Button onClick={() => handleIncrement(product._id)}>+</Button>
            </Stack>
          ) : (
            <Stack direction="column" align="center" mt={3}>
              
                <Button
                  onClick={() => handleAddToCart(product)}
                  size="lg"
                  width="full"
                  bg="rgba(189, 195, 199, 0.1)"
                  backdropFilter="blur(40px)"// Blur effect for the glass
                  color="black" // Text color
                  _hover={{
                    bg: "rgba(189, 195, 199, 0.9)", // Slightly more opaque on hover
                    borderColor: "rgba(255, 255, 255, 0.6)", // Border color change on hover
                  }}
                  boxShadow="md" // Optional: add some shadow for depth
                >
                  Add to Cart
                </Button>
            </Stack>
          )}
        </Stack>
      </Box>
    </Center>
  );
};

export default ProductCard;
