import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, Text, useToast } from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { postData } from '../redux/actions/fireStoreActions';

const Contact = () => {
    const { register, handleSubmit,reset, formState: { errors, isSubmitting } } = useForm();
    const toast=useToast()
    const onSubmit =async (values) => {
         await postData(values)
         toast({
            title: 'Thanks.',
            description: "Your message has been successfully submitted!",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
         return reset()
    };

    const wordCountValidation = (value) => {
        const wordCount = value.trim().split(/\s+/).length; // Split by whitespace
        return wordCount >= 10 || 'Message must contain at least 10 words';
    };

    return (
        <Box p={4} maxW="md" borderWidth={1} borderRadius="lg" boxShadow="lg">
            <Text fontSize={"2xl"} textAlign={"center"}>Contact Us!</Text>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={!!errors.name}>
                    <FormLabel>Enter Name</FormLabel>
                    <Input 
                        id="name"
                        placeholder='Name'
                        {...register('name', {
                            required: 'This is required',
                            minLength: { value: 4, message: 'Minimum length should be 4' },
                        })}
                    />
                    <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
                </FormControl>
                
                <FormControl isInvalid={!!errors.email} mt={4}>
                    <FormLabel>Enter Email</FormLabel>
                    <Input 
                        id="email"
                        placeholder='Enter Email'
                        type='email'
                        {...register("email", {
                            required: "Email is required",
                            validate: {
                                maxLength: (v) =>
                                    v.length <= 50 || "The email should have at most 50 characters",
                                matchPattern: (v) =>
                                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                                    "Email address must be a valid address",
                            },
                        })}
                    />
                    <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                </FormControl>
                
                <FormControl isInvalid={!!errors.message} mt={4}>
                    <FormLabel>Message</FormLabel>
                    <Input 
                        id="message"
                        placeholder='Enter Message'
                        type='text'
                        {...register("message", {
                            required: "Message is required",
                            validate: wordCountValidation,
                        })}
                    />
                    <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
                </FormControl>
                
                <FormControl isInvalid={!!errors.phone} mt={4}>
                    <FormLabel>Phone</FormLabel>
                    <Input 
                        id="phone"
                        placeholder='Enter Phone'
                        type='tel' // Use 'tel' for better input handling
                        {...register("phone", {
                            required: "Phone is required",
                            validate: {
                                maxLength: (v) => v.length === 10 || "Phone number must be exactly 10 digits",
                                matchPattern: (v) =>
                                    /^(?:\+91|91|0)?[789]\d{9}$/.test(v) ||
                                    "Phone number must be valid",
                            },
                        })}
                    />
                    <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
                </FormControl>
                
                <Button mt={4} colorScheme='teal' width={'full'} isLoading={isSubmitting} type='submit'>
                    Submit
                </Button>
            </form>
        </Box>
    );
};

export default Contact;
