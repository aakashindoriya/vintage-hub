import React, { useEffect, useState } from "react";
import {
    Box,
    Grid,
    Spinner,
    Text,
    Button,
    Stack,
    Image,
    Center,
    useColorModeValue,
    Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/productActions";
// import { addToCart } from "../redux/actions/cartActions";

const Products = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.product);
    
    const [page, setPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const indexOfLastItem = page * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

    const handleNextPage = () => {
        if (page < Math.ceil(products.length / itemsPerPage)) {
            setPage((prev) => prev + 1);
        }
    };

    const handlePrevPage = () => {
        if (page > 1) {
            setPage((prev) => prev - 1);
        }
    };

    const handleAddToCart = (product) => {
        dispatch(addToCart(product)); 
    };

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <Spinner />
            </Box>
        );
    }

    if (error) {
        return (
            <Text color="red.500" textAlign="center">
                Error fetching products.
            </Text>
        );
    }

    if (!products || !products.length) {
        return <Text>No products found.</Text>;
    }

    return (
        <Box p={6}>
            <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
                {currentProducts.map((product) => (
                    <Center key={product.id} py={12}>
                        <Box
                            role={'group'}
                            p={6}
                            maxW={'330px'}
                            w={'full'}
                            bg={useColorModeValue('white', 'gray.800')}
                            boxShadow={'2xl'}
                            rounded={'lg'}
                            pos={'relative'}
                            zIndex={1}
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
                                    backgroundImage: `url(${product.image})`,
                                    filter: 'blur(15px)',
                                    zIndex: -1,
                                }}
                                _groupHover={{
                                    _after: {
                                        filter: 'blur(20px)',
                                    },
                                }}
                            >
                                <Image
                                    rounded={'lg'}
                                    height={230}
                                    width={282}
                                    objectFit={'cover'}
                                    src={product.image}
                                    alt={product.title}
                                />
                            </Box>
                            <Stack pt={10} align={'center'}>
                                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                                    {product.brand} 
                                </Text>
                                <Heading fontSize={'lg'} fontFamily={'body'} fontWeight={500} noOfLines={1}>
                                    {product.title}
                                </Heading>
                                <Stack direction={'row'} align={'center'}>
                                    <Text fontWeight={800} fontSize={'xl'}>
                                        ${product.price}
                                    </Text>
                                    <Text textDecoration={'line-through'} color={'gray.600'}>
                                        ${product.originalPrice} 
                                    </Text>
                                </Stack>
                                <Button 
                                    colorScheme="teal" 
                                    onClick={() => handleAddToCart(product)}
                                >
                                    Add to Cart
                                </Button>
                            </Stack>
                        </Box>
                    </Center>
                ))}
            </Grid>
            <Box mt={6} display="flex" justifyContent="space-between">
                <Button onClick={handlePrevPage} disabled={page === 1}>
                    Previous
                </Button>
                <Button onClick={handleNextPage} disabled={page === Math.ceil(products.length / itemsPerPage)}>
                    Next
                </Button>
            </Box>
        </Box>
    );
};

export default Products;
