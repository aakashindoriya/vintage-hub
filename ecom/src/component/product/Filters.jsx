import { Box, Checkbox, Select } from "@chakra-ui/react"

const Filters = ({filterState,handleFilterChange,products}) => {
  return (
    <Box display="flex" justifyContent="space-between" mb={6}>
                <Select 
                   value={filterState.category}
                   name="category"
                    placeholder="Select category"
                    onChange={handleFilterChange}
                >  <option value={""}>all</option>
                    {
                        products?.map((el)=><option key={el._id} value={el.category} >{el.category}</option>)
                    }
                    
                </Select>
                <Select 
                    placeholder="Select rating"
                    value={filterState.rating}
                    name="rating"
                    onChange={handleFilterChange}
                >
                    <option value="1">1 Star</option>
                    <option value="2">2 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="5">5 Stars</option>
                </Select>
                <Select 
                    placeholder="Select brand"
                    value={filterState.brand}
                    name="brand"
                    onChange={handleFilterChange}
                >
                    <option value={""}>all</option>
                    {
                        products?.map((el)=><option key={el._id} value={el.brand} >{el.brand}</option>)
                    }
                </Select>
                <Checkbox value={filterState.inStock} name="inStock" onChange={handleFilterChange}>InStock</Checkbox>
            </Box>
  )
}

export default Filters