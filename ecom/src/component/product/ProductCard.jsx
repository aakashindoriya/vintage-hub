import { Box, Image, Text, Button, VStack } from '@chakra-ui/react';

function ProductCard({ item }) {
  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      boxShadow="2xl"
      _hover={{ transform: "scale(1.05)", transition: "0.4s ease-in-out" }}
      bg="rgba(255, 255, 255, 0.2)" // Glassmorphism background effect
      backdropFilter="blur(10px)" // Blurring effect for glass feel
      maxW="sm"
      h="500px" // Adjusted height for a more spacious layout
      mx="auto"
      display="flex"                
      flexDirection="column"
      justifyContent="space-evenly"
      border="1px solid rgba(255, 255, 255, 0.3)" // Light border to enhance the glass effect
      p={4}
    >
      <Box display="flex" justifyContent="center">
        <Image
          src={item.image}
          alt={item.title}
          w="70%"
          borderRadius="md"
        />
      </Box>
      <VStack p="4" spacing="3" alignItems="flex-start" mt={2}>
        <Text
          fontWeight="bold"
          fontSize="2xl"
          noOfLines={1}
          bgClip="text"
          bgGradient="linear(to-r, teal.400, blue.400)"
        >
          {item.title}
        </Text>
        <Text fontSize="lg" color="gray.700">
          ${item.price}
        </Text>
        <Button
          colorScheme="teal"
          variant="solid"
          w="full"
          size="md"
          _hover={{ bg: "teal.500" }}
          boxShadow="0px 8px 15px rgba(0, 150, 136, 0.2)"
        >
          Add to Cart
        </Button>
      </VStack>
    </Box>
  );
}

export default ProductCard;
