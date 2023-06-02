import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function SplitScreen() {
    const stats = [
        { id: "1", num: "100", text: "Happy Clients" },
        { id: "2", num: "05", text: "Years in business" },
        { id: "3", num: "50", text: "Total Members" },
      ];
      const statList = stats.map(item=>{
        return (
          <Flex direction="column" fontFamily={"sans-serif"} alignItems={"center"} key={item.id}>
            <Text fontWeight={800} fontSize={"35px"}>
              {item.num}
              <Text as="span" color="#E92129">
                +
              </Text>
            </Text>
            <Text>{item.text}</Text>
          </Flex>
        );
      })
    return (
      <Stack minH={'70vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={5} flex={1} align={'center'} justify={'center'} fontFamily={'Proxima Nova'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '7xl' }}>
             
              <Text as={'span'}>
               About Company
              </Text>{' '}
            </Heading>
          
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
             
            </Stack>
          </Stack>
        </Flex>
        <Flex  direction={"column"}
        flex="1"
        justifyContent={"justify"}
        gap={"1rem"}>
        <Text fontSize={"30px"} fontFamily={"sans-serif"} pt={32}>
          Lorem ipsum dolor sit amet consectetur. Vestibulum nascetur vitae
          sapien{" "}
        </Text>
        <Text pr={4} fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            The project board is an exclusive resource for contract work. It's
            perfect for freelancers, agencies, and moonlighters.
          </Text>
          <Flex justifyContent={'space-between'} pr='3rem'>
          {statList}
        </Flex>
        </Flex>
      </Stack>
    );
  }