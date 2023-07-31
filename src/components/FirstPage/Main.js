import {
  Flex,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../Navbar";
import { AnimatePresence } from "framer-motion";

export default function SplitScreen() {
  const h = useBreakpointValue({
    xs: "320px",
    sm: "400px",
    md: "520px",
    lg: "550px",
    xl: "100vh",
  });

  const px = useBreakpointValue({
    xs: 4,
    sm: 6,
    md: 16,
    lg: "100px",
    xl: "150px",
  });

  const gap = useBreakpointValue({
    xs: "0",
    sm: "1rem",
    md: "1rem",
  });

  return (
    <>
      <>
        <Navbar />
      </>
      <Grid
        w={"full"}
        h={h}
        backgroundImage={"url(./First-page/rectangle.png)"}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
        templateRows="repeat(5, 1fr)"
        gap={gap}
      >
        <div className="h-[100px] sm:h-[70px]"></div>
        <GridItem rowSpan={4} px={px}>
          <Stack h={"full"} w={"full"} maxW={"lg"}>
            <div className="h-full">
              <span
                // style={{ fontWeight: "500" }}
                className="leading-[1.15] sm:leading-[1.25] xs:leading-[1.3]
                 xl:text-[75px] lg:text-[60px] md:text-[60px] sm:text-[40px] xs:text-[33px]
                text-left text-white flex place-items-center font-bold"
              >
                Bridging the <br /> gap between
                <br /> ideas and
                <br /> reality
              </span>
            </div>
          </Stack>
        </GridItem>
      </Grid>
    </>
  );
}
