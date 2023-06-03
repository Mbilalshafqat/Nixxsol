import { Box, Text, Image, Button, Input, useBreakpointValue, Flex } from "@chakra-ui/react";
import { HiLocationMarker } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";
import { AiOutlineTwitter, AiOutlineInstagram, AiFillFacebook } from "react-icons/ai";
import { MdEmail, MdMail } from "react-icons/md";

const Footer = () => {
  const flexDirection = useBreakpointValue({ base: "column", md: "row" });
  const iconSize = useBreakpointValue({ base: "40px", md: "22px" });
  const textTopMargin = useBreakpointValue({ base: "0.7rem", md: "0" });

  return (
    <Flex direction="column" mt="1rem">
      <Flex position="absolute" mt="1rem" ml="2rem">
        <Image src="./logo.svg" />
      </Flex>
      <Flex
        bgColor="white"
        color="black"
        pt="5rem"
        pb="3rem"
        px="3rem"
        alignItems="center"
        flexWrap="wrap"
      >
        {/* phone email address */}
        <Flex direction="column" spacing="1rem" flex={{ base: "1", md: "auto" }}>
          <Flex>
            <BsTelephoneFill style={{ fontSize: "22px", alignSelf: "center" }} />
            <Box ml="1rem" pt="0.9rem">
              <Text>+92 300 1234567</Text>
            </Box>
          </Flex>
          <Flex>
            <MdMail style={{ fontSize: "22px", alignSelf: "center" }} />
            <Box ml="1rem" pt="0.7rem">
              <Text>info@nixxsol.com</Text>
            </Box>
          </Flex>
          <Flex>
          <HiLocationMarker style={{ fontSize: iconSize, alignSelf: "justify", marginTop:"6px" }} />            <Box ml="-1rem">
          <Box ml="-1rem" mt={textTopMargin}>
              <Text w="50%" mt={0.2} style={{textAlign:"left", marginLeft:"42px"}}>
                Lorem ipsum dolor sit amet consectetur. Dui libero lectus pulvinar mattis a.
              </Text>
            </Box>
            </Box>
          </Flex>
        </Flex>
        {/* stay in connection */}
        <Flex
          direction="column"
          gap="1rem"
          flex={{ base: "1", md: "auto" }}
          mt={{ base: "2rem", md: "0" }}
        >
          <Flex justifyContent="space-between">
            <Text _hover={{ cursor: "pointer" }}>About</Text>
            <Text _hover={{ cursor: "pointer" }}>Services</Text>
            <Text _hover={{ cursor: "pointer" }}>Portfolio</Text>
            <Text _hover={{ cursor: "pointer" }}>Contact us</Text>
          </Flex>
          <Text fontWeight={700} fontSize="24px" mt="1rem">
            Stay in Connection
          </Text>
          <Flex
            bgColor="#272727"
            p="0.5rem"
            borderRadius="8px"
            justifyContent="space-between"
            alignItems="center"
            gap="0.5rem"
          >
            <Input type="text" placeholder="Email Address" border="none" />
            <Button
              p="0.5rem 1rem"
              bgColor="#E92129"
              color="white"
              _hover={{ backgroundColor: "" }}
            >
              Contact Us
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Flex py="1.5rem" px="3rem" justifyContent="space-between">
        <Text>© 2022 Nixxsol All Rights Reserved.</Text>
        <Flex gap="1rem">
          <AiFillFacebook />
          <AiOutlineTwitter />
          <AiOutlineInstagram />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
