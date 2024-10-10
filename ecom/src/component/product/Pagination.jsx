import { Box, Button } from '@chakra-ui/react'
import React from 'react'

const Pagination = ({setCurrentPage,currentPage,totalPages}) => {
  return (
    <Box mt={6} display="flex" justifyContent="center" alignItems="center">
                <Button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))} disabled={currentPage === 0}>
                    Previous
                </Button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <Button 
                        key={index} 
                        onClick={() => setCurrentPage(index)} 
                        variant={currentPage === index ? "solid" : "outline"}
                        mx={1}
                    >
                        {index + 1}
                    </Button>
                ))}
                <Button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))} disabled={currentPage === totalPages - 1}>
                    Next
                </Button>
            </Box>
  )
}

export default Pagination