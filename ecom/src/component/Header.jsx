import { Box, Flex, Heading, Text, Button, Avatar, Select, IconButton, Collapse } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectCurrency } from "../redux/slices/currencySlice";
import { useEffect, useState } from "react";
import { getCurrency } from "../redux/actions/currencyActions";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { logout } from "../redux/slices/AuthSlice";
// import { useEffect, useState } from 'react';
// import { auth } from '../../../firebase.config';
// import { signOut, updatePassword, onAuthStateChanged } from 'firebase/auth';

const Header = () => {
    
    const dispatch = useDispatch();
    const { selectedRate } = useSelector((store) => store.currency);
    const navigate = useNavigate()
    const [currencyState, setCurrentState] = useState('USD');
    const [isOpen, setIsOpen] = useState(false);
    let {user}=useSelector((s)=>s.auth)
    // user=user?.user
    console.log(user)
    useEffect(() => {
        dispatch(selectCurrency(currencyState));
    }, [currencyState]);
    
    

    useEffect(() => {
        dispatch(getCurrency());
    }, []);

    const randomColor = () => {
        const colors = ["red", "green", "blue", "orange", "purple", "teal"];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <Box as="nav" bg="rgba(255, 255, 255, 0.1)" backdropFilter="blur(10px)" position="fixed" width="100%" zIndex="1000" color="black" p={4}>
            <Flex justify="space-between" align="center" maxW="7xl" mx="auto">
                <Heading size="lg" letterSpacing="tight">
                    <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                        Vintage Hub
                    </Link>
                </Heading>
                <IconButton
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    onClick={() => setIsOpen(!isOpen)}
                    variant="outline"
                    aria-label="Toggle Menu"
                    colorScheme="black"
                    display={{ md: "none" }}
                />
                <Flex spacing={8} gap={4} alignItems="center" flexWrap="wrap" display={{ base: isOpen ? "flex" : "none", md: "flex" }}>
                    <Link to="/products">
                        <Text _hover={{ color: "red" }} color="black">Products</Text>
                    </Link>
                    <Link to="/cart">
                        <Text _hover={{ color: "red" }} color="black">Cart</Text>
                    </Link>
                    <Link to="/contact">
                        <Text _hover={{ color: "red" }} color="black">Contact</Text>
                    </Link>
                    <Link to="/blogs">
                        <Text _hover={{ color: "red" }} color="black">Blogs</Text>
                    </Link>
                    <Link to="/about">
                        <Text _hover={{ color: "red" }} color="black">About</Text>
                    </Link>

                    {user && user.uid ? (
                        <>
                            <Avatar
                                bg={randomColor()}
                                name={user.email}
                                cursor="pointer"
                                onClick={() => navigate("/profile")}
                            />
                            <Button colorScheme="red" onClick={() => {
                                dispatch(logout())
                                navigate('/login');
                            }}>Log Out</Button>
                        </>
                    ) : (
                        <Button as={Link} to="/login">
                            Login/Sign Up
                        </Button>
                    )}
                    <Select w='9em' value={currencyState} onChange={(e) => {
                        setCurrentState(e.target.value);
                    }} >
                        <option value="USD">USD</option>
                        <option value="INR">INR</option>
                        <option value="AUD">AUD</option>
                    </Select>
                </Flex>
            </Flex>

            {/* Collapse component for the menu */}
            <Collapse in={isOpen} animateOpacity>
                <Flex direction="column" align="center" display={{ md: "none" }}>
                    <Link to="/products">
                        <Text _hover={{ color: "red" }} color="black">Products</Text>
                    </Link>
                    <Link to="/cart">
                        <Text _hover={{ color: "red" }} color="black">Cart</Text>
                    </Link>
                    <Link to="/contact">
                        <Text _hover={{ color: "red" }} color="black">Contact</Text>
                    </Link>
                    <Link to="/blogs">
                        <Text _hover={{ color: "red" }} color="black">Blogs</Text>
                    </Link>
                    <Link to="/about">
                        <Text _hover={{ color: "red" }} color="black">About</Text>
                    </Link>
                    {user && user.uid ? (
                        <>
                            <Avatar
                                bg={randomColor()}
                                name={user.email}
                                cursor="pointer"
                                onClick={() => navigate("/profile")}
                            />
                            <Button colorScheme="red" onClick={() => {
                                
                                navigate('/login');
                            }}>Log Out</Button>
                        </>
                    ) : (
                        <Button as={Link} to="/login">
                            Login/Sign Up
                        </Button>
                    )}
                </Flex>
            </Collapse>

            {/* <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>User Profile</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack spacing={4}>
                            <FormControl>
                                <FormLabel>Username</FormLabel>
                                <Input value={firstName} readOnly />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <Input value={user?.email} readOnly />
                            </FormControl>
                            <FormControl>
                                <FormLabel>New Password</FormLabel>
                                <Input
                                    type="password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    placeholder="Enter new password"
                                />
                            </FormControl>
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={handlePasswordReset}>
                            Reset Password
                        </Button>
                        <Button colorScheme="red" onClick={handleLogout}>
                            Logout
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal> */}
        </Box>
    );
};

export default Header;
