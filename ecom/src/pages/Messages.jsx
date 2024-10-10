// src/components/DisplayData.js
import { useEffect, useState } from 'react';
import { db } from '../../firebase.config';
import { collection, getDocs } from 'firebase/firestore';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

function Messages() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'contacts'));
      const contactsData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setData(contactsData);
    };
    fetchData();
  }, []);
console.log(data)
  return (
    <Box minH={"90vh"}>
        <Heading textAlign={"center"} m="5" >Messages</Heading>
      
        <Box>
            {
                data.map(contact => (
                    <Box key={contact.id} p="2" m="2" display={"grid"} alignItems={"center"} shadow={"lg"} pl="4" rounded={"md"}>
                        <Flex alignItems={"center"}>
                        <Text fontSize={"xl"} fontWeight={"bold"}>Name:</Text> <Text fontSize={"lg"}>{"   "+contact.name}</Text>
                        </Flex>
                        <Flex alignItems={"center"}>
                        <Text fontSize={"xl"} fontWeight={"bold"}>Email:</Text> <Text fontSize={"lg"}>{"   "+contact.email}</Text>
                        </Flex>
                        <Flex alignItems={"center"}>
                        <Text fontSize={"xl"} fontWeight={"bold"}>Message:</Text> <Text fontSize={"lg"}>{"   "+contact.message}</Text>
                        </Flex>
                    </Box>
                ))
            }
        </Box>
      
    </Box>
  );
}

export default Messages;
