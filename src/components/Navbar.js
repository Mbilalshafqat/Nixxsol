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
  { name: "Home", href: "" },
  { name: "IT Services", href: "/ItServices" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  // const HomeButton = ({ children, href }) => {
  //   const path = window.location.pathname;
  //   return path === "/SecondPage" || path === "/ForthPage" || path === "/ThirdPage" || path === "/FifthPage" ? (
  //     <NavLink children={children} href={href} />
  //   ) : null;
  // };

  const path = (link) => {
    const path = window.location.pathname;
    console.log(link)
    if (path === "" && link === "") return null
    else return link
  }

  return (
    <>
      <Box
      //bg={useColorModeValue("white", "gray.800")} px={4}
      >
        {/* <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <img src='./logo.svg' alt="" />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {linksData.map(link => (
                <NavLink key={link.name} href={link.href}>{link.name}</NavLink>
              ))}
              <Menu>
                <MenuButton rounded={"md"} cursor={"pointer"}>
                  Services&#9660;
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
        </Flex> */}

        {/* -------------------------- NAVBAR FIGMA -----------------------*/}

        <div className="h-[70px] bg-transparent mx-24 border text-white flex justify-between place-items-center">
          <div className="flex place-items-center gap-2">
            <img className="h-[43px]" src="./First-Page//Vector.png" alt="..." />
            <img className="h-[22px]" src="./First-Page//Group 2.png" alt="..." />
            {/* <img src="./First-Page//nix-logo.JPG" />jk */}
          </div>
          <div className="text-white flex justify-between gap-8 lg:text-sm font-normal">
            {
              linksData.map((list, index) => {
                return (
                  <>
                    <span className="text-decoration-none text-white" key={index}>
                      <Link to={() => path(list.href)}>
                        {list.name}
                      </Link>
                    </span>
                  </>
                )
              })
            }
          </div>
          <div>
            <span>hell</span>
          </div>
        </div>



        {/* -------------------------- NAVBAR FIGMA -----------------------*/}






        {/* {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {linksData.map(link => (
                <NavLink key={link.name} href={link.href}>{link.name}</NavLink>
              ))}
              <Menu>
                <MenuButton rounded={"md"} cursor={"pointer"}>
                  Services&#9660;
                </MenuButton>
                <MenuList>
                  <MenuItem as={Link} href="/fifthPage">UI/UX Designs</MenuItem>
                  <MenuItem as={Link} href="/sixthPage">Game Development</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Box>
        ) : null} */}
      </Box>
    </>
  );
}

