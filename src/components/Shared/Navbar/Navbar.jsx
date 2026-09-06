"use client";
import Image from "next/image";
import NavLink from "./NavLink";
import { useEffect, useState } from "react";
import logo from "../../../../public/assets/logo/logo.webp";
import mainLogo from "../../../../public/assets/logo/main-logo.webp";
import { BsWhatsapp } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { TfiEmail } from "react-icons/tfi";
import { FaSquareXTwitter, FaFacebookF, FaLinkedinIn, FaSquareWhatsapp } from "react-icons/fa6";
import { BsTelephonePlus } from "react-icons/bs";
import SubMenuBar from "./SubMenuBar";
import SubMenuForMobile from "./SubMenuForMobile";
import SafeEmailLink from "../SafeEmailLink";
import MenuLink from "./MenuLink";
import GoogleTranslate from "../GoogleTranslate/GoogleTranslate";

const Navbar = ({ allCategories }) => {
  const [navToggle, setNavToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isRoot, setIsRoot] = useState(true);
  const [openSubMenus, setOpenSubMenus] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setIsRoot(pathname === "/");
  }, [pathname]);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSubMenu = () => {
    setOpenSubMenus(!openSubMenus);
  };
  const navData = {
    menu1: { path: "/", title: "Home", subMenu: "" },
    menu2: { path: "/product", title: "Product", subMenu: "isMenu" },
    menu3: { path: "/about", title: "About Us", subMenu: "" },
    menu4: { path: "/process", title: "Process", subMenu: "" },
    menu5: { path: "/portfolio", title: "Portfolio", subMenu: "" },
    menu6: { path: "/news", title: "News", subMenu: "" },
    menu7: { path: "/contact", title: "Contact", subMenu: "" }
  };
  const keys = ["menu1", "menu2", "menu3", "menu4", "menu5", "menu6", "menu7"];

  return (
    <nav
      className={`z-40 w-full fixed left-0 right-0 py-2 lg:py-0  ${isSticky
        ? "top-0 bg-white nav_shadow"
        : `top-0 bg-white ${isRoot && "md:bg-[#00000000]"} navber_border`
        }`}
    >
      <div className="hidden md:block">
        <div className="w-full grid grid-cols-2 py-1 md:py-1 px-10 bg-secondary">
          <div className="flex items-center justify-start gap-8 w-full">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://api.whatsapp.com/send?phone=+86-13902617335&text=Hello,%20I'm%20interested%20in%20your%20services.%20Could%20you%20share%20more%20details?"
              className="flex text-sm items-center hover:text-red-600 transition gap-2 text-white"
            >
              <span className="">
                <BsTelephonePlus />
              </span>
              <span>+86-13902617335</span>
            </a>
            <SafeEmailLink
              className="flex text-sm hover:underline hover:text-red-600 transition items-center gap-2 text-white"
            >
              <span className="">
                <TfiEmail />
              </span>
              <SafeEmailLink textOnly={true} />
            </SafeEmailLink>
          </div>
          <div className="flex items-center justify-end gap-3">
            <span className="text-white text-sm">Follow Us  :</span>
            <a
              target="blank"
              href="https://x.com/KYD_Precision"
              className="flex items-center justify-center p-2 hover:bg-primary transition text-white  text-sm md:text-base rounded-full "
            >
              <FaSquareXTwitter />
            </a>
            <a
              target="blank"
              href="https://www.facebook.com/guangdongkyd"
              className="flex items-center justify-center p-2 hover:bg-primary transition text-white  text-sm md:text-base rounded-full "
            >
              <FaFacebookF />
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/company/guangdong-kyd-medical-mask-machinery/"
              className="flex items-center justify-center p-2 hover:bg-primary transition text-white  text-sm md:text-base rounded-full "
            >
              <FaLinkedinIn />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://api.whatsapp.com/send?phone=+86-13902617335&text=Hello,%20I'm%20interested%20in%20your%20services.%20Could%20you%20share%20more%20details?"
              className="flex items-center justify-center p-2 hover:bg-primary transition text-white text-sm md:text-base rounded-full"
            >
              <BsWhatsapp />
            </a>
          </div>
        </div>
      </div>
      <div
        className={`main_container flex justify-between items-center ${isSticky ? "" : ""
          }`}
      >
        {/*Larges Device Logo  here >>>>>>>>>>>>>>>> */}
        <div className="nav_logo_side hidden md:block">
          {isRoot ? (
            <NavLink href="/">
              <Image
                src={isSticky ? mainLogo : logo}
                alt="logo"
                width={400}
                className="w-20"
                priority
              />
            </NavLink>
          ) : (
            <NavLink href="/">
              <Image
                src={mainLogo}
                alt="logo"
                width={400}
                className="w-20"
                priority
              />
            </NavLink>
          )}
        </div>
        {/* Only for mobile device Logo  */}
        <div className="nav_logo_side md:hidden">
          <NavLink href="/">
            <Image src={mainLogo} alt="logo" width={400} className="w-20" priority />
          </NavLink>
        </div>

        {/* Center NavMenu Design (Desktop) */}
        <div className="hidden lg:flex items-center justify-center flex-1 mx-2 xl:mx-6">
          <ul
            className={`nav_manu flex text-sm uppercase items-center justify-center gap-1 xl:gap-3 px-1 whitespace-nowrap ${isSticky
              ? " text-[#010749]"
              : `text-[#010749] ${isRoot && "md:text-white"}`
              }`}
          >
            {keys?.map((key, index) => (
              <li key={index} className="mx-1 xl:mx-2 py-6 whitespace-nowrap flex items-center">
                <NavLink
                  href={navData[key].path}
                  className="inline-flex items-center gap-1.5 whitespace-nowrap"
                >
                  <span className="whitespace-nowrap">{navData[key].title}</span>
                  {navData[key].subMenu == "isMenu" && (
                    <span className="arrow"></span>
                  )}
                </NavLink>
                {navData[key].subMenu == "isMenu" && (
                  <SubMenuBar
                    allCategories={allCategories}
                    setNavToggle={setNavToggle}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right side controls (Desktop Language switcher & Mobile toggle) */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <GoogleTranslate />
          </div>

          <label className="swap-rotate swap bg-white rounded-full h-8 w-8 lg:hidden cursor-pointer flex items-center justify-center shadow-xs">
            <input
              checked={navToggle}
              onChange={() => setNavToggle((pre) => !pre)}
              type="checkbox"
            />
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>
      </div>

      {/* Mobile Backdrop Overlay */}
      {navToggle && (
        <div
          onClick={() => setNavToggle(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity"
        />
      )}

      {/* Separate Mobile Drawer */}
      <div
        className={`fixed top-0 ${navToggle ? "left-0" : "-left-full"
          } w-[85%] max-w-[320px] h-screen bg-white shadow-2xl flex flex-col justify-between transition-all duration-300 z-50 p-5 overflow-y-auto lg:hidden`}
      >
        {/* Mobile Drawer Header */}
        <div className="flex items-center justify-between pb-4 mb-2 border-b border-gray-100">
          <NavLink href="/" onClick={() => setNavToggle(false)}>
            <Image src={mainLogo} alt="logo" width={100} className="w-16" priority />
          </NavLink>
          <button
            onClick={() => setNavToggle(false)}
            className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
          >
            <IoClose size={22} />
          </button>
        </div>

        {/* Mobile Navigation List */}
        <div className="flex-grow overflow-y-auto">
          <ul className="mobile_nav_menu font-medium text-[15px] flex flex-col gap-1 text-[#010749]">
            {keys?.map((key, index) => (
              <li key={index} className="rounded-xl overflow-hidden">
                {navData[key].subMenu == "isMenu" ? (
                  <div>
                    <div
                      onClick={() => toggleSubMenu()}
                      className="flex items-center justify-between p-3 px-4 hover:bg-gray-50 cursor-pointer rounded-xl transition-colors"
                    >
                      <span>{navData[key].title}</span>
                      {openSubMenus ? (
                        <span className="text-lg text-primary">
                          <IoIosArrowUp />
                        </span>
                      ) : (
                        <span className="text-lg text-gray-400">
                          <IoIosArrowDown />
                        </span>
                      )}
                    </div>
                    {openSubMenus && (
                      <SubMenuForMobile
                        allCategories={allCategories}
                        setNavToggle={setNavToggle}
                        openSubMenus={openSubMenus}
                      />
                    )}
                  </div>
                ) : (
                  <MenuLink
                    onClick={() => setNavToggle(false)}
                    href={navData[key].path}
                    activeClassName="text-primary font-semibold bg-blue-50/60"
                    exact={navData[key].path === "/"}
                    className="block p-3 px-4 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    {navData[key].title}
                  </MenuLink>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Bottom Docked Language Switcher */}
        <div className="mt-auto pt-4 border-t border-gray-100">
          <GoogleTranslate />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
