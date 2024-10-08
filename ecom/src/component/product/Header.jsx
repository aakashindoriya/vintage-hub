import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    return (
        <Box as="nav" bg="gray.800" color="white" p={4}>
            <Flex justify="space-around" align="center" maxW="7xl" mx="auto">
                <Heading size="lg" letterSpacing="tight">
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                        Vintage Hub
                    </Link>
                </Heading>
                <Flex spacing={8} gap={4} alignItems='center'>
                    <Link to='/products'>
                        <Text as="span" _hover={{ textDecoration: 'underline' }}>
                            Products
                        </Text>
                    </Link>
                    <Link to='/cart'>
                        <Text as="span" _hover={{ textDecoration: 'underline' }}>
                            Cart()
                        </Text>
                    </Link>
                    <Link to='/contact'>
                        <Text as="span" _hover={{ textDecoration: 'underline' }}>
                            Contact
                        </Text>
                    </Link>
                    <Link to='/blogs'>
                        <Text as="span" _hover={{ textDecoration: 'underline' }}>
                            Blogs
                        </Text>
                    </Link>
                    <Link to='/about'>
                        <Text as="span" _hover={{ textDecoration: 'underline' }}>
                            About
                        </Text>
                    </Link>
                    <Button onClick={navigate('/')}>
                        Login/SignUp
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
}

export default Header;
