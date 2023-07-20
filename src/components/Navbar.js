import {
  Box
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


const linksData = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "IT Services", href: "/ItServices" },
  { name: "Portfolio", href: "/portfolio" },
];

export default function Navbar() {
  const navigate = useNavigate()

  const path = window.location.pathname

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

        <div style={{ fontWeight: "400" }} className={` ${path === "/" ? "text-[#fdfdfd]" : "text-[#161616]"} h-[100px] bg-transparent mx-24 lg:text-sm flex justify-between place-items-center`}>
          <div className="flex place-items-center gap-2">
            <img className="h-[43px]" src={path === "/" ? "./First-Page//nixxol logo white.png" : "./First-Page//nixxol logo black.png"} alt="..." />
            {/* <img src="./First-Page//nix-logo.JPG" />jk */}
          </div>
          <div className="flex justify-between gap-16">
            {
              linksData.map((list, index) => {
                return (
                  <>
                    <div className={`${list.href === path ? "font-bold" : "cursor-pointer"} `} key={index}
                      onClick={() => navigate((list.href === path) ? null : list.href)
                      }>
                      {list.name}
                    </div>
                  </>
                )
              })
            }
          </div>
          <div className="grid text-right content-center">
            <span>nixxsol@gmail.com</span>
            <span>(09)887532131</span>
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

