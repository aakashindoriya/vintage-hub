


import {
    Box,
    Button,
    Text,
    Stack,
    Heading,
    Image,
    Center,
    Grid,
    useColorModeValue,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { incrementQuantity, decrementQuantity, removeItem } from "../redux/slices/cartSlice";
import { Navigate } from "react-router-dom";
import TempCartCard from "../component/TempCartCard";
import ProductCard from "../component/product/ProductCard";
import CartCard from "../component/product/CartCard";

const Cart = () => {
    const user = JSON.parse(localStorage.getItem('user'));
  
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
  const { seletedRate, symbol } = useSelector((store) => store.currency)

    const handleIncrement = (id) => {
        dispatch(incrementQuantity(id));
    };

    const handleDecrement = (id) => {
        dispatch(decrementQuantity(id));
    };

    const handleRemove = (id) => {
        dispatch(removeItem(id));
    };

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <Box p={6}>
            <Heading mb={4}>Shopping Cart</Heading>
            {cartItems.length === 0 ? (
                <Text>Your cart is empty.</Text>
            ) : (
                <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
                    {cartItems.map((item) => (
                        <CartCard key={item.id} product={item}/>
                    ))}
                </Grid>
            )}
            <Text fontWeight="bold" mt={4}>Total Price: {symbol}{(totalPrice*seletedRate).toFixed(2)}</Text>
        </Box>
    );
};

export default Cart;