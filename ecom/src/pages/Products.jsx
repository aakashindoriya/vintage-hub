import { useEffect, useState } from "react";
import { Box, Spinner, Text, Button } from "@chakra-ui/react";
import { ProductCarouselData } from "../component/ProductCarouselData";
import ProductCard from "../component/product/ProductCard"; 
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/productActions"; 
import ProductSlider from "../component/ProductSlider";
import Filters from "../component/product/Filters";
import { filter } from "../redux/slices/productSlice";
import Pagination from "../component/product/Pagination";

let init={
    category:"", rating:0, pricerange:{min:0,max:15000},brand:"",inStock:""
}
const Products = () => {
    const dispatch = useDispatch();
    const { products, loading, error,filtered } = useSelector((state) => state.product);
    const [filterState,setFilterState]=useState(init)
    const itemsPerPage = 5; 
    const [currentPage, setCurrentPage] = useState(0);
    
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);
    useEffect(()=>{
        dispatch(filter({products,...filterState}))
    },[filterState])


    function handleFilterChange(e){
        if(e.target.name==="inStock"){
            setFilterState({...filterState,inStock:e.target.checked})
        }else if(e.target.name==="rating"){
            setFilterState({...filterState,rating:Number(e.target.value)})
        }else{
            setFilterState({...filterState,[e.target.name]:(e.target.value)})
        }
    }
    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <Spinner />
            </Box>
        );
    }

    if (error) {
        return (
            <Text color="red.500" textAlign="center">
                Error fetching products.
            </Text>
        );
    }

    if (!products || !products.length) {
        return <Text>No products found.</Text>;
    }
    const totalPages = Math.ceil((filtered.length?filtered.length:products.length) / itemsPerPage);

    return (
        <Box>
            <Box as="section" id="Slider-Section" mb={10}>
                <ProductSlider i={ProductCarouselData} />
            </Box>

            {/* Filter and Search UI */}
            <Filters products={products} filterState={filterState} handleFilterChange={handleFilterChange} />

            {/* Product Grid */}
            <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6} p={10} mt={-8}>
            { 
                filtered.length? filtered.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((product) => (
                    <ProductCard key={product.id} product={product} />
                )) : products.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            }
               
            </Box>
            <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages} />
        </Box>
    );
};

export default Products;
