import { useNavigate } from "react-router-dom";
import useWindowsDimension from "../../hooks/useWindowsDimension";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";

const linksData = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "IT Services",
    href: "/it_services",
    children: [
      { name: "UI/UX Design", href: "ui_ux" },
      { name: "Game Devlopment", href: "game_devlopment" },
    ],
  },
  { name: "Portfolio", href: "/portfolio" },
];

export default function TopNavbar() {
  const navigate = useNavigate();
  const { width } = useWindowsDimension();
  const path = window.location.pathname;

  const [hover, setHover] = useState();

  function handleItClick(list) {
    navigate(list === path ? null : list);
    setHover(false);
  }

  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setShowNavbar(
        currentScrollPos < 200 || currentScrollPos <= prevScrollPos
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      {/* -------------------------- NAVBAR FIGMA -----------------------*/}
      <div
        className={`${
          !showNavbar
            ? "fixed !top-0 sm:!top-0 right-0 left-0 h-[80px] w-[100%] !z-[99999] !bg-white transition-all"
            : "hidden transition-all"
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
                  className="xl:h-[43px] lg:h-[40px] md:h-[35px]"
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
                                    ? "rotate-180 transition-all"
                                    : "transition-all"
                                }`}
                              />
                            </span>
                          ) : null}
                        </div>
                        {list.children && hover ? (
                          <div
                            className={`${
                              hover
                                ? "absolute transition-all rounded-[5px] bottom-[-230%] text-black bg-white w-[200%] shadow-md grid cursor-pointer text-sm opacity-100"
                                : "opacity-0 bottom-[270%] transition-all"
                            }`}
                          >
                            {list.children.map((child, index) => {
                              return (
                                <>
                                  <div
                                    key={index}
                                    className={`px-2 py-2 text-left font-regular hover:font-medium hover:!px-4 hover:transition-all transition-all`}
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
                  className="xs:h-[28px] sm:h-[32px] md:h-[40px]"
                  src={"./First-Page//nixxol logo black.png"}
                  alt="..."
                />
              </div>
              <div>
                <HamburgerIcon boxSize={6} />
              </div>
            </>
          )}
        </div>
      </div>
      {/* -------------------------- NAVBAR FIGMA -----------------------*/}
    </>
  );
}
