import { Box, Heading, Text, Stack, Button, Flex } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getSingleBlog } from '../../redux/actions/blogActions';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

function SingleBlog() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams(); // Get the blog ID from the URL
    const [searchParams] = useSearchParams(); // Get search params

    const currentPage = parseInt(searchParams.get('page')) || 1; // Get current page from search params

    const { singleBlog, singleBlogLoading, singleBlogError } = useSelector(state => state.blog);

    useEffect(() => {
        if (id) {
            console.log(`Fetching blog with ID: ${id}`);
            dispatch(getSingleBlog(id)); // Fetch the single blog using the ID
        }
    }, [dispatch, id]);

    

    return (
        <Flex
            align="center"
            justify="center"
            height="100vh" // Full viewport height
            bg="gray.50" // Optional background color
        >
            <Box
                maxW="7xl"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                shadow="md"
                bg="white"
                className="w-full"
                p={6} // Padding for the Box
            >
                <Stack spacing={4}>
                    <Heading size="lg" className="text-gray-800">
                        {singleBlog.title}
                    </Heading>
                    <Text fontSize="lg" color="gray.600">
                        {singleBlog.body}
                    </Text>
                </Stack>
                <Box p={4} display="flex" justifyContent="flex-end">
                    <Button 
                        colorScheme="blue" 
                        onClick={() => navigate(`/blogs?page=${currentPage}`)} // Navigate back to the blogs with the current page
                    >
                        Back to Blogs
                    </Button>
                </Box>
            </Box>
        </Flex>
    );
}

export default SingleBlog;
