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
  { name: "About", href: "/SecondPage" },
  { name: "Projects", href: "/projects" },
  { name: "Team", href: "/team" },
];

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const hoverColor = useColorModeValue("purple.900");

  const NavLink = ({ children, href }) => (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: hoverColor,
      }}
      href={href}
    >
      {children}
    </Link>
  );

  const HomeButton = ({ children, href }) => {
    const path = window.location.pathname;
    return path === "/SecondPage" || path === "/team" ? (
      <NavLink children={children} href={href} />
    ) : null;
  };

  return (
    <>
      <Box bg={useColorModeValue("")} px={4}>
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
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
