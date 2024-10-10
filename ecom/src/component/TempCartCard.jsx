import React from 'react'

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

function TempCartCard({ product }) {
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
                            backgroundImage: `url(${product.image})`,

                            filter: 'blur(15px)',
                            zIndex: -1,
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
                            {symbol+" "}{(+product.price*seletedRate).toFixed(2)}
                            </Text>
                        </Stack>
                        <Stack direction="row" align="center" spacing={4}>
                            <Button onClick={() => handleDecrement(product.id)}>-</Button>
                            <Text>{product.quantity}</Text>
                            <Button onClick={() => handleIncrement(product.id)}>+</Button>
                            <Button colorScheme="red" onClick={() => handleRemove(product.id)}>
                                Remove
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Center>
        </>
    )
}

export default TempCartCard
