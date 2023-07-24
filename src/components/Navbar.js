import {
  Box
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useWindowsDimension from "../hooks/useWindowsDimension";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";


const linksData = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "IT Services", href: "/it_services", children: [
      { name: "UI/UX Design", href: "ui_ux" },
      { name: "Game Devlopment", href: "game_devlopment" }
    ]
  },
  { name: "Portfolio", href: "/portfolio" },
];

export default function Navbar() {
  const navigate = useNavigate()
  const { width } = useWindowsDimension()
  const path = window.location.pathname

  const [hover, setHover] = useState();

  function handleItClick(list) {
    navigate((list === path) ? null : list);
    setHover(false);
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

        <div style={{ fontWeight: "400" }}
          className={` ${path === "/" ? "text-[#fdfdfd]" : "text-[#161616] shadow-md"}
          h-[100px] bg-transparent px-24 md:px-16 sm:px-6  xs:px-4 lg:text-sm md:text-xs flex justify-between place-items-center`}>
          {width > 880 ?
            <><div className="flex place-items-center">
              <img className="xl:h-[43px] lg:h-[40px] md:h-[35px]" src={path === "/" ? "./First-Page//nixxol logo white.png" : "./First-Page//nixxol logo black.png"} alt="..." />
            </div>
              <div className="flex justify-between gap-16">
                {
                  linksData.map((list, index) => {
                    return (
                      <>
                        <div onMouseOver={() => list.children ? setHover(true) : null} onMouseOut={() => list.children ? setHover(false) : null} key={index} className="relative flex place-items-center"
                        >
                          <div onClick={() => handleItClick(list.href)}
                            className={`${list.href === path ? "font-bold" : "cursor-pointer"} py-1 flex justify-between place-items-center gap-2`}>
                            <span>{list.name}</span>
                            {list.children ?
                              <span className="">
                                <ChevronDownIcon boxSize={5} className={`${hover ? "rotate-180 transition-all" : "transition-all"}`} />
                              </span>
                              : null}
                          </div>
                          {list.children && hover ? <div
                            className={`${hover ? "absolute transition-all rounded-[5px] bottom-[-230%] text-black bg-white w-[200%] shadow-md grid cursor-pointer text-sm opacity-100" : "opacity-0 bottom-[260%] transition-all"}`}>
                            {
                              list.children.map((child, index) => {
                                return (
                                  <>
                                    <div key={index} className={`px-2 py-2 text-left font-regular hover:font-medium hover:!px-4 hover:transition-all transition-all`} onClick={() => navigate(child.href)}>
                                      {child.name}
                                    </div>
                                  </>
                                )
                              })
                            }
                          </div> : null}
                        </div >
                      </>
                    )
                  })
                }
              </div>
              <div className="grid text-right content-center">
                <span>nixxsol@gmail.com</span>
                <span>(09)887532131</span>
              </div></> :
            <>
              <div className="flex place-items-center">
                <img className="xs:h-[28px] sm:h-[32px] md:h-[40px]" src={path === "/" ? "./First-Page//nixxol logo white.png" : "./First-Page//nixxol logo black.png"} alt="..." />
              </div>
              <div>
                <HamburgerIcon boxSize={6} />
              </div>
            </>
          }
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
      </Box >
    </>
  );
}

