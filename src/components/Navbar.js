import { useNavigate } from "react-router-dom";
import useWindowsDimension from "../hooks/useWindowsDimension";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { RiArrowDropDownFill } from "react-icons/ri";


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

export default function Navbar({ top }) {
  const navigate = useNavigate()
  const { width } = useWindowsDimension()
  const path = window.location.pathname

  const [hover, setHover] = useState();
  const [open, setOpen] = useState(false);
  const [openChild, setOpenChild] = useState(false);

  useEffect(() => {
    if (["ui_ux", "game_devlopment"].includes(path)) { setOpenChild(true); console.log(path, openChild) };
  }, [open]);

  function handleItClick(list) {
    navigate((list === path) ? null : list);
    setHover(false);
  }

  return (
    <>
      {/* -------------------------- NAVBAR FIGMA -----------------------*/}
      <div style={{ fontWeight: "400" }}
        className={` ${(path === "/" || top) ? "text-[#fdfdfd] bg-transparent absolute top-0 left-0 right-0" : "text-[#161616] shadow-md"}
          h-[100px] sm:h-[70px] bg-transparent px-24 md:px-16 sm:px-6 xs:px-4 lg:text-sm md:text-xs flex justify-between place-items-center`}>
        {width > 880 ?
          <><div className="flex place-items-center">
            <img onClick={() => navigate(path === "/" ? null : "/")} className="cursor-pointer xl:h-[43px] lg:h-[40px] md:h-[35px]" src={path === "/" ? "./First-Page//nixxol logo white.png" : "./First-Page//nixxol logo black.png"} alt="..." />
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
              <img onClick={() => navigate(path === "/" ? null : "/")} className="xs:h-[28px] sm:h-[32px] md:h-[40px]" src={path === "/" ? "./First-Page//nixxol logo white.png" : "./First-Page//nixxol logo black.png"} alt="..." />
            </div>
            <div
              onClick={(e) => {
                setOpen(true);
                e.preventDefault();
              }}
            >
              <HamburgerIcon boxSize={6} />
            </div>
          </>
        }
      </div>

      <div
        className={`${open && width < 880
          ? "bg-transparent flex fixed top-0 left-0 right-0 bottom-0 z-[99999]"
          : "!h-0 -top-full !w-0 !p-0"
          }`}
      >
        <AnimatePresence>
          {open && width < 880 && (
            <>
              {" "}
              <motion.div
                key={"menu"}
                initial={{ width: "0%", padding: 0 }}
                animate={{ width: "75%" }}
                exit={{ width: "0%", padding: "0 important" }}
                className="h-[100%] top-0 overflow-hidden bg-white shadow-md flex flex-col pt-2 px-1 absolute z-[99999]"
              >
                {linksData.map((list, index) => {
                  return (
                    <>
                      <div
                        key={index}
                        onClick={() => {
                          list.children
                            ? setOpenChild(!openChild)
                            : navigate(list.href);
                        }}
                        className={`${open ? "opacity-100 customTransition" : "hidden"} ${path === list.href
                          ? "!bg-[rgba(0,0,0,0.2)] font-medium"
                          : ""
                          } pl-5 py-3 w-[100%] md:text-2xl flex justify-between pr-3`}
                      >
                        <span
                          onClick={() => {
                            setTimeout(navigate(list.href), 1000);
                            setOpen(false);
                            setOpenChild(false);
                          }}
                        >
                          {list.name}
                        </span>
                        {list.children ? (
                          <>
                            <div>
                              <RiArrowDropDownFill
                                color="black"
                                className={`${openChild
                                  ? "rotate-180 customTransition"
                                  : "rotate-0 customTransition"
                                  } sm:text-[24px] md:text-[28px]`}
                              />
                            </div>
                          </>
                        ) : null}
                      </div>
                      <div
                        className={`${openChild
                          ? "h-auto transition-transform flex flex-col"
                          : "h-0 transition-transform"
                          }`}
                      >
                        {list.children && (
                          <div
                            className={`${openChild
                              ? "h-auto customTransition pl-6 md:text-2xl pr-6"
                              : "!h-0 customTransition !m-0 !p-0"
                              } flex flex-col  w-[100%]`}
                          >
                            {list?.children?.map((child, index) => {
                              return (
                                <>
                                  <div
                                    key={index}
                                    onClick={() => {
                                      navigate(child.href);
                                      setOpen(false);
                                    }}
                                    style={path === child.href ? { backgroundColor: "rgba(0,0,0,0.5" } : null}
                                    className={`${openChild
                                      ? "block p-2 customTransition opacity-100 overflow-hidden"
                                      : "!p-0 customTransition opacity-0 overflow-hidden"
                                      }`}
                                  >
                                    {console.log(path === child.href)}
                                    {child.name}
                                  </div>
                                </>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </>
                  );
                })}
              </motion.div>
              <motion.div
                key={"sub-menu"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: "all 0.2s ease-in" }}
                exit={{ opacity: 0 }}
                className="absolute !bg-[rgba(0,0,0,0.5)] top-0 h-[100%] backdrop-blur-sm w-[100%] z-[9999]"
                onClick={() => {
                  setOpen(false);
                  setOpenChild(false);
                }}
              >
                <div className="text-white absolute top-4 right-5">
                  <IoMdClose
                    size={32}
                    className="text-white md:!text-[38px] focus:!text-red-800"
                  />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
      {/* -------------------------- NAVBAR FIGMA -----------------------*/}
    </>
  );
}

