import React from 'react';
import { Box, Heading, Text, Stack } from '@chakra-ui/react';

function BlogCard({ data, onClick }) {
    return (
        <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            shadow="md"
            bg="white"
            textAlign='left'
            onClick={onClick}
            cursor="pointer"
        >
            <Stack p={4}>
                <Heading size="md" className="text-gray-800">
                    {data.title}
                </Heading>
                <Text color="gray.600">
                    {data.body.substring(0, 100)}...
                </Text>
            </Stack>
        </Box>
    );
}

export default BlogCard;
