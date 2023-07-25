import { useNavigate } from "react-router-dom";
import useWindowsDimension from "../../hooks/useWindowsDimension";
import { ChevronDownIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RiArrowDropDownFill } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";

const linksData = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "IT Services",
    href: "/it_services",
    children: [
      { name: "UI/UX Design", href: "/ui_ux" },
      { name: "Game Devlopment", href: "/game_devlopment" },
    ],
  },
  { name: "Portfolio", href: "/portfolio" },
];

export default function TopNavbar() {
  const [open, setOpen] = useState(false); // to open the menu in samll screens
  const [openChild, setOpenChild] = useState(false); // to open the sub-menu in samll screens

  const navigate = useNavigate();
  const { width } = useWindowsDimension();
  const path = window.location.pathname;

  // handles the click events on link
  const [hover, setHover] = useState();
  function handleItClick(list) {
    navigate(list === path ? null : list);
    setHover(false);
  }

  // handles the static navbar
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setShowNavbar(
        currentScrollPos < 110 || currentScrollPos <= prevScrollPos
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    if (["/ui_ux", "/game_devlopment"].includes(path)) setOpenChild(true);
  }, [open]);

  return (
    <>
      {/* -------------------------- NAVBAR FIGMA -----------------------*/}

      <div
        className={`${
          !showNavbar
            ? "fixed !top-0 sm:!top-0 right-0 left-0 h-[100px] sm:h-[70px] w-[100%] !z-[99999] !bg-white customTransition"
            : "hidden customTransition"
        }`}
      >
        <div
          style={{ fontWeight: "400" }}
          className={`text-[#161616] shadow-md
            h-[100%] bg-transparent px-24 md:px-16 sm:px-6  xs:px-4 lg:text-sm md:text-xs flex justify-between place-items-center`}
        >
          {width > 880 ? (
            <>
              <div className="flex place-items-center">
                <img
                  onClick={() => navigate(path === "/" ? null : "/")}
                  className="cursor-pointer xl:h-[43px] lg:h-[40px] md:h-[35px]"
                  src={"./First-Page//nixxol logo black.png"}
                  alt="..."
                />
              </div>
              <div className="flex justify-between gap-16">
                {linksData.map((list, index) => {
                  return (
                    <>
                      <div
                        onMouseOver={() =>
                          list.children ? setHover(true) : null
                        }
                        onMouseOut={() =>
                          list.children ? setHover(false) : null
                        }
                        key={index}
                        className="relative flex place-items-center"
                      >
                        <div
                          onClick={() => handleItClick(list.href)}
                          className={`${
                            list.href === path ? "font-bold" : "cursor-pointer"
                          } py-1 flex justify-between place-items-center gap-2`}
                        >
                          <span>{list.name}</span>
                          {list.children ? (
                            <span className="">
                              <ChevronDownIcon
                                boxSize={5}
                                className={`${
                                  hover
                                    ? "rotate-180 customTransition"
                                    : "customTransition"
                                }`}
                              />
                            </span>
                          ) : null}
                        </div>
                        {list.children && hover ? (
                          <div
                            className={`${
                              hover
                                ? "absolute customTransition z-[999999] rounded-[5px] bottom-[-230%] text-black bg-white w-[200%] shadow-md grid cursor-pointer text-sm opacity-100"
                                : "opacity-0 bottom-[270%] customTransition"
                            }`}
                          >
                            {list.children.map((child, index) => {
                              return (
                                <>
                                  <div
                                    key={index}
                                    className={`px-2 py-2 text-left font-regular hover:font-medium hover:!px-4 hover customTransition customTransition`}
                                    onClick={() => navigate(child.href)}
                                  >
                                    {child.name}
                                  </div>
                                </>
                              );
                            })}
                          </div>
                        ) : null}
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="grid text-right content-center">
                <span>nixxsol@gmail.com</span>
                <span>(09)887532131</span>
              </div>
            </>
          ) : (
            <>
              <div className="flex place-items-center">
                <img
                  onClick={() => navigate(path === "/" ? null : "/")}
                  className="xs:h-[28px] sm:h-[32px] md:h-[40px]"
                  src={"./First-Page//nixxol logo black.png"}
                  alt="..."
                />
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
          )}
        </div>
      </div>
      <div
        className={`${
          open && width < 880
            ? "bg-transparent flex fixed top-0 left-0 right-0 bottom-0 z-[99999]"
            : ""
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
                className="h-[100%] bg-white shadow-md flex flex-col pt-2 px-1 absolute z-[99999]"
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
                        className={`
                        ${open ? "" : "hidden"}
                         ${
                           path === list.href
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
                                className={`${
                                  openChild
                                    ? "rotate-180 customTransition"
                                    : "rotate-0 customTransition"
                                } sm:text-[24px] md:text-[28px]`}
                              />
                            </div>
                          </>
                        ) : null}
                      </div>
                      <div
                        className={`${
                          openChild
                            ? "h-auto transition-transform flex flex-col"
                            : "h-0 transition-transform"
                        }`}
                      >
                        {list.children && (
                          <div
                            className={`
                            ${open?"":"!hidden"} ${
                              openChild
                                ? "h-auto customTransition pl-6 md:text-2xl pr-6"
                                : "!h-0 customTransition !m-0 !p-0"
                            } flex flex-col w-[100%]`}
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
                                    style={
                                      path === child.href
                                        ? {
                                            backgroundColor: "rgba(0,0,0,0.2)",
                                          }
                                        : null
                                    }
                                    className={`
                                    ${
                                      openChild
                                        ? "block p-2 customTransition opacity-100 overflow-hidden"
                                        : "!p-0 customTransition opacity-0 overflow-hidden"
                                    }`}
                                  >
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
                className="absolute !bg-[rgba(0,0,0,0.5)] h-[100%] backdrop-blur-sm w-[100%] z-[9999]"
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
