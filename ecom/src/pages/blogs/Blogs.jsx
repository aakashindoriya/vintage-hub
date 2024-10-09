import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid, Text, Button, HStack } from '@chakra-ui/react';
import BlogCard from './BlogCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlogs } from '../../redux/actions/blogActions';
import { useNavigate, useSearchParams } from 'react-router-dom';

const LIMIT = 10;

const Blogs = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams(); // Get query parameters
    const { blogs } = useSelector(state => state.blog);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const pageParam = parseInt(searchParams.get('page')) || 1; // Get current page from search params or default to 1
        setCurrentPage(pageParam); // Update current page state
        dispatch(getAllBlogs()); // Fetch blogs
    }, [dispatch, searchParams]); // Add searchParams to dependency array

    const startIndex = (currentPage - 1) * LIMIT;
    const currentBlogs = blogs.slice(startIndex, startIndex + LIMIT);
    const totalPages = Math.ceil(blogs.length / LIMIT);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    const handleBlogClick = (id) => {
        navigate(`/blogs/${id}?page=${currentPage}`); // Include current page in the URL
    };

    return (
        <Box textAlign='center'>
            <Text fontSize="2xl" mb={4}>Blogs</Text>
            <SimpleGrid columns={[1, 2, 3, 4]} spacing={4} p={4}>
                {currentBlogs.map((blog) => (
                    <BlogCard
                        key={blog.id}
                        data={blog}
                        onClick={() => handleBlogClick(blog.id)}
                    />
                ))}
            </SimpleGrid>
            <HStack justify="center" mt={4}>
                <Button onClick={handlePrevPage} isDisabled={currentPage === 1}>
                    Previous
                </Button>
                <Text>
                    Page {currentPage} of {totalPages}
                </Text>
                <Button onClick={handleNextPage} isDisabled={currentPage === totalPages}>
                    Next
                </Button>
            </HStack>
        </Box>
    );
};

export default Blogs;
