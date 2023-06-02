import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";


const linksData = [
  { name: "Home", href: "/FirstPage" },
  { name: "IT Services", href: "/SecondPage" },
  { name: "About", href: "/ThirdPage" },
  { name: "Portfolio", href: "/ForthPage" },
  ];

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const NavLink = ({ children, href }) => (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={href}
    >
      {children}
    </Link>
  );

  const HomeButton = ({ children, href }) => {
    const path = window.location.pathname;
    return path === "/SecondPage" || path === "/ForthPage" || path === "/ThirdPage" || path === "/FifthPage"  ? (
      <NavLink children={children} href={href} />
    ) : null;
  };

  return (
    <>
      <Box bg={useColorModeValue("white", "gray.800")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <img src='./logo.svg' alt=""/>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {linksData.map(link => (
                link.name === "Home" ?
                <HomeButton key={link.name} href={link.href}>{link.name}</HomeButton> :
                <NavLink key={link.name} href={link.href}>{link.name}</NavLink>
              ))}
              <Menu>
                <MenuButton as={Button} rounded={"md"} cursor={"pointer"}>
                  Services
                </MenuButton>
                <MenuList>
                  <MenuItem as={Link} href="/fifthPage">UI/UX Designs</MenuItem>
                  <MenuItem as={Link} href="/sixthPage">Game Development</MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>


            <Stack as={"nav"} spacing={4}>
              {linksData.map(link => (
                link.name === "Home" ?
                <HomeButton key={link.name} href={link.href}>{link.name}</HomeButton> :
                <NavLink key={link.name} href={link.href}>{link.name}</NavLink>
              ))}
              <Menu>
                <MenuButton as={Button} rounded={"md"} cursor={"pointer"}>
                  IT Service
                </MenuButton>
                <MenuList>
                  <MenuItem as={Link} href="/service1">Service 1</MenuItem>
                  <MenuItem as={Link} href="/service2">Service 2</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
