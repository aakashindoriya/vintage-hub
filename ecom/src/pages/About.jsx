import React from 'react';
import { Box, Flex, Heading, Text, Stack, Image } from '@chakra-ui/react';

const About = () => {
    return (
        <>
            <Box bg="gray.50" p={8}>
                <br />
                <br />
                <br />
                <Flex direction="column" align="center" mb={12}>
                    <Heading as="h1" size="2xl" mb={4}>
                        About Vintage Hub
                    </Heading>
                    <Text fontSize="lg" color="gray.600" textAlign="center">
                        Your go-to destination for unique vintage items, curated with love.
                    </Text>
                </Flex>

                <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-around">
                    <Image
                        src="https://via.placeholder.com/400x300"
                        alt="Vintage Collection"
                        borderRadius="md"
                        boxShadow="lg"
                        mb={{ base: 4, md: 0 }}
                    />
                    <Stack spacing={4} maxW="600px" textAlign="left">
                        <Text fontSize="lg" color="gray.700">
                            At Vintage Hub, we believe that every item has a story to tell. Our curated collection features handpicked vintage pieces, from clothing to home decor, that embody timeless style and character.
                        </Text>
                        <Text fontSize="lg" color="gray.700">
                            Founded in 2023, our mission is to make sustainable shopping accessible and enjoyable. We source our products from local artisans and reputable suppliers, ensuring quality and authenticity in every piece.
                        </Text>
                        <Text fontSize="lg" color="gray.700">
                            Join us on our journey to revive the charm of yesteryears while promoting eco-friendly practices. Discover the beauty of vintage with Vintage Hub!
                        </Text>
                    </Stack>
                </Flex>

                <Flex direction="column" align="center" mt={12}>
                    <Heading as="h2" size="xl" mb={4}>
                        Our Values
                    </Heading>
                    <Text fontSize="lg" color="gray.600" textAlign="center" mb={4}>
                        We are committed to quality, sustainability, and customer satisfaction.
                    </Text>
                    <Stack direction="row" spacing={6} align="center">
                        <Box bg="teal.500" p={4} borderRadius="md" boxShadow="md" color="white">
                            <Text fontWeight="bold">Quality</Text>
                            <Text>Handpicked vintage items that stand the test of time.</Text>
                        </Box>
                        <Box bg="teal.500" p={4} borderRadius="md" boxShadow="md" color="white">
                            <Text fontWeight="bold">Sustainability</Text>
                            <Text>Promoting eco-friendly practices through vintage shopping.</Text>
                        </Box>
                        <Box bg="teal.500" p={4} borderRadius="md" boxShadow="md" color="white">
                            <Text fontWeight="bold">Customer Satisfaction</Text>
                            <Text>Your happiness is our priority, and we strive to deliver excellence.</Text>
                        </Box>
                    </Stack>
                </Flex>
            </Box>
        </>
    );
};

export default About;
