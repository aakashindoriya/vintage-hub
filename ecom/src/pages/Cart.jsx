import {
    Box,
    Text,
    Stack,
    Heading,
    Image,
    Center,
    Grid,
    useColorModeValue,
    Divider,
    Flex,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { incrementQuantity, decrementQuantity, removeItem } from "../redux/slices/cartSlice";
import { Navigate } from "react-router-dom";
import CartCard from "../component/product/CartCard";

const Cart = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const { seletedRate, symbol } = useSelector((store) => store.currency);

    const handleIncrement = (id) => dispatch(incrementQuantity(id));
    const handleDecrement = (id) => dispatch(decrementQuantity(id));
    const handleRemove = (id) => dispatch(removeItem(id));

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <Flex p={4} bg={useColorModeValue("gray.50", "gray.800")} flexDir={{base:'column',md:'row'}} alignItems='center'  minH="100vh">
           
            <Box flex={{base:'1',md:'1'}} w={{base:'400px', md:'700px'}}>
                <Heading textAlign="center" fontSize='2xl' mt={124} mb={6}>Shopping Cart</Heading>
                {cartItems.length === 0 ? (
                    <Center flexDirection="column" mt={10}>
                        <Image src="https://media.istockphoto.com/id/1352766190/vector/shopaholic-woman-running-with-an-empty-shopping-cart.jpg?s=612x612&w=0&k=20&c=2f0fEX7DqmYbkgY1l5w2-GLwCmLMTFLASnW-UyiPaX4=" alt="Empty Cart" w='90vw' h='80vh'/>
                        <Text fontSize="lg" mt={4}>Your cart is empty.</Text>
                    </Center>
                ) : (
                    <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6} px={4}>
                        {cartItems.map((item) => (
                            <CartCard key={item._id} product={item} />
                        ))}
                    </Grid>
                )}
            </Box>
            <Box w="300px" ml={6} p={4} borderRadius="md" bg="white" boxShadow="lg">
                <Heading size="md" textAlign="center" mt={124} mb={4}>Bill</Heading>
                <Divider />
                {cartItems.map((item) => (
                    <Flex justify="space-between" my={2} key={item._id}>
                        <Text>{item.name} (x{item.quantity})</Text>
                        <Text>{symbol}{(item.price * item.quantity * seletedRate).toFixed(2)}</Text>
                    </Flex>
                ))}
                <Divider my={4} />
                <Flex justify="space-between" fontWeight="bold">
                   
                    <Text>Total:</Text>
                    <Text>{symbol}{(totalPrice * seletedRate).toFixed(2)}</Text>
                </Flex>
            </Box>
        </Flex>
    );
};

export default Cart;
