/* eslint-disable react/prop-types */
import React from 'react'
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
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    addItem,
    incrementQuantity,
    decrementQuantity,
} from "../../redux/slices/cartSlice";

function CartCard({ product }) {
    
    const dispatch = useDispatch();
    const { seletedRate, symbol } = useSelector((store) => store.currency);
    const cartItems = useSelector((state) => state.cart.items);
    const handleAddToCart = (product) => {
        const existingItem = cartItems.find((item) => item._id === product._id);
        if (existingItem) {
          dispatch(incrementQuantity(product._id));
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
    
    //   const cartItem = cartItems.find((item) => item.id === product.id);
    
    return (
        <>
            <Center key={product.id} py={12}>
                <Box
                    role={'group'}
                    p={6}
                    maxW={'400px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'lg'}
                    rounded={'lg'}
                    pos={'relative'}
                    zIndex={1}
                    transition="transform 0.2s"
                    _hover={{ transform: 'scale(1.05)' }}
                >
                    <Box
                        rounded={'lg'}
                        mt={-12}
                        pos={'relative'}
                        height={'230px'}
                        _after={{
                            transition: 'all .3s ease',
                            content: '""',
                            w: 'full',
                            h: 'full',
                            pos: 'absolute',
                            top: 5,
                            left: 0,
                            backgroundImage: `url(${product.url})`,

                            filter: 'blur(15px)',
                            zIndex: -1,
                        }}
                    >
                        <Link to={`/products/${product._id}`}>
                            <Image
                                rounded={'lg'}
                                height={230}
                                width={282}
                                objectFit={'cover'}
                                src={product.url}
                                alt={product.title}
                            />
                        </Link>
                    </Box>
                    <Stack pt={10} align={'center'}>
                        <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                            {product.brand}
                        </Text>
                        <Heading fontSize={'lg'} fontFamily={'body'} fontWeight={500} noOfLines={1}>
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
                            {product.description.length > 50 ? `${product.description.slice(0, 50)}...` : product.description} {/* Limiting description length */}
                        </Text>
                        <Stack direction={'row'} align={'center'}>
                            <Text fontWeight={800} fontSize={'xl'}>
                                {symbol + " "}{(+product.price * seletedRate).toFixed(2)}
                            </Text>
                        </Stack>
                        <Stack direction="row" align="center" spacing={4}>
                            <Button onClick={() => handleDecrement(product._id)}>-</Button>
                            <Text>{product.quantity}</Text>
                            <Button onClick={() => handleIncrement(product._id)}>+</Button>
                            <Button colorScheme="red" onClick={() => handleRemove(product._id)}>
                                Remove
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Center>
        </>
    )
}

export default CartCard;