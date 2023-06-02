import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue
  } from "@chakra-ui/react"
  
  export default function SplitScreen() {
    return (
        <Flex
        w={'full'}
        h={'70vh'}
        backgroundImage={
          'url(./First-page/rectangle.png)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
        fontFamily={'Proxima Nova'}>
      <Stack minH={"60vh"} direction={{ base: "column", md: "row" }}>
     
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            
            <Heading fontSize={{ base: "3xl", md: "xl", lg: "7xl" }} align={"left"}>
            
              <br />{" "}
              <Text color={"white"} as={"span"}>
              Bridging the gap between ideas and reality
              </Text>{" "}
            </Heading>
        
          </Stack>
        </Flex>
       
      </Stack>
      </Flex>
    )
  }
  