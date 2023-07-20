import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Grid,
  useBreakpointValue
} from "@chakra-ui/react"
import React from "react"
import Navbar from "../Navbar"

export default function SplitScreen() {
  return (
    <>
      <Grid
        w={'full'}
        h={'90vh'}
        backgroundImage={
          'url(./First-page/rectangle.png)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
        templateRows={'repeat(5, 1fr)'}
      >
        <React.Fragment>
          <Navbar />
        </React.Fragment>
        <Stack direction={{ base: "column", md: "row" }}>
          <Flex px={24} flex={1} align={"center"}>
            <Stack spacing={6} w={"full"} maxW={"lg"}>
              <Heading fontSize={{ base: "5xl", md: "xl", lg: "67px" }} align={"left"}>
                <br />{" "}
                <Text color={"white"} as={"span"}>
                  Bridging the gap between ideas and reality
                </Text>{" "}
              </Heading>
            </Stack>
          </Flex>
        </Stack>
      </Grid>
    </>
  )
}

