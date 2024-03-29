import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);
  const [theme, setTheme] = useState(null);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };


  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);


  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="fixed w-full top-0 z-10 h-[80px] drop-shadow-lg bg-[#02383C]  text-black dark:text-white">
      <div className=" flex justify-between items-center w-full h-full shadow-lg cursor-pointer">
        {/* logo image */}
        <div className="lg:flex items-center md:hidden flex px-10">
          <img
            src="https://res.cloudinary.com/dpokiomqq/image/upload/v1671902954/regizlogo_2_ey8kjj.png"
            className="w-16"
          />
          <h3 className="text-[#FEFEFF] text-3xl font-sans">Regiz</h3>
        </div>
        {/* Links for desxtop */}
        <ul className="gap-8 lg:mx-40 md:mx-[80px] xxl:mx-[900px]  uppercase md:flex hidden lg:flex mt-3">
          <a href="#">
            <li className="line hover:text-[#66CC7B] text-[#fff] cursor-pointer ">
              Home
            </li>
          </a>
          <a href="#">
            <li className="line mb-2 hover:text-[#66CC7B] text-[#fff] cursor-pointer ">
              About
            </li>
          </a>
          <a href="#">
            <ul>
              <div className="dropdown relative">
                <button
                  className="
                        dropdown-toggle
                        px-3
                        hover:text-[#66CC7B] text-[#FEFEFF]
                        link
                        font-medium
                        leading-tight
                        no-underline	
                        uppercase
                        transition
                        duration-150
                        ease-in-out
                        flex                        
                        items-center
                        whitespace-nowrap
                      "
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SERVICE
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="caret-down"
                    className="w-2 ml-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                    ></path>
                  </svg>
                </button>
                <ul
                  className="dropdown-menu min-w-max absolute hidden bg-white cursor-pointer text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <Link
                      to="feature"
                      smooth={true}
                      duration={500}
                      className="
                            dropdown-item
                            text-sm
                            py-2
                            cursor-pointer
                            px-4
                            font-normal
                            block                           
                            w-full
                            whitespace-nowrap
                            bg-transparent
                            text-gray-700
                            hover:bg-gray-100
                          "
                    >
                      Features
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="benefit"
                      smooth={true}
                      duration={500}
                      className="
                            dropdown-item
                            text-sm
                            py-2
                            px-4
                            font-normal
                            block                           
                            w-full
                            whitespace-nowrap
                            bg-transparent
                            text-gray-700
                            hover:bg-gray-100
                          "
                    >
                      Benefit
                    </Link>
                  </li>
                </ul>
              </div>
            </ul>
          </a>
          <a href="#">
            <div className="dropdown relative">
              <button
                className="
                        dropdown-toggle
                        px-3
                        hover:text-[#66CC7B] text-[#FEFEFF]
                        link
                        font-medium
                        leading-tight
                        no-underline	
                        uppercase
                        transition
                        duration-150
                        ease-in-out
                        flex
                        
                        items-center
                        whitespace-nowrap
                      "
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                PAGES
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-down"
                  className="w-2 ml-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  ></path>
                </svg>
              </button>
              <ul
                className="
                        dropdown-menu
                        min-w-max
                        absolute
                        hidden
                        bg-white
                        cursor-pointer
                        text-base
                        z-50
                        float-left
                        py-2
                        list-none
                        text-left
                        rounded-lg
                        shadow-lg
                        mt-1
                        m-0
                        bg-clip-padding
                        border-none
                      "
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link
                    to="how"
                    smooth={true}
                    duration={500}
                    className="
                            dropdown-item
                            text-sm
                            py-2
                            px-4
                            font-normal
                            block
                            w-full
                            uppercase
                            whitespace-nowrap
                            bg-transparent
                            text-gray-700
                            hover:bg-gray-100
                          "
                  >
                    How it works
                  </Link>
                </li>
                <li>
                  <Link
                    to="Regiscoin"
                    smooth={true}
                    duration={500}
                    className="
                            dropdown-item
                            text-sm
                            py-2
                            px-4
                            font-normal
                            block
                            w-full
                            uppercase
                            whitespace-nowrap
                            bg-transparent
                            text-gray-700
                            hover:bg-gray-100
                          "
                  >
                    Regiscoin
                  </Link>
                </li>
                <li>
                  <Link
                    to="team"
                    smooth={true}
                    duration={500}
                    className="
                            dropdown-item
                            text-sm
                            py-2
                            px-4
                            font-normal
                            block
                            w-full
                            whitespace-nowrap
                            bg-transparent
                            text-gray-700
                            hover:bg-gray-100
                          "
                  >
                    TEAM
                  </Link>
                </li>
                <li>
                  <Link
                    to="persona"
                    smooth={true}
                    duration={500}
                    className="
                            dropdown-item
                            text-sm
                            py-2                            
                            uppercase
                            px-4
                            font-normal
                            block
                            w-full
                            whitespace-nowrap
                            bg-transparent
                            text-gray-700
                            hover:bg-gray-100
                          "
                  >
                    Persona
                  </Link>
                </li>
                <li>
                  <Link
                    to="faq"
                    smooth={true}
                    duration={500}
                    className="
                            dropdown-item
                            text-sm
                            py-2
                            px-4                           
                            font-normal
                            block
                            w-full
                            whitespace-nowrap
                            bg-transparent
                            text-gray-700
                            hover:bg-gray-100
                          "
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </a>
          <a href="#">
            <li className="line mb-2 hover:text-[#66CC7B] text-[#fff] cursor-pointer ">
              <Link to="roadmap" smooth={true} duration={500}>
                Roadmap
              </Link>
            </li>
          </a>
          <a href="#">
            <li className="line mb-2 hover:text-[#66CC7B] text-[#fff] cursor-pointer ">
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </a>

          <button
            type="button"
            onClick={handleThemeSwitch}
            className="fixed z-10 right-2 top-2 bg-[#3CC3A9] text-lg px-3 py-2 mt-3 mx-10 mb-8  rounded-md"
          >
            {theme === "dark" ? (
              <div className="text-white">
                <ion-icon name="sunny"></ion-icon>{" "}
              </div>
            ) : (
              <div className="">
                <ion-icon name="moon"></ion-icon>
              </div>
            )}
          </button>
        </ul>

        <div className="md:hidden pr-8 cursor-pointer" onClick={handleClick}>
          {!nav ? (
            <FiMenu className="w-10 h-10  px-2 py-2 rounded-md text-white" />
          ) : (
            <AiOutlineClose className="text-[#FF1700] w-10 h-10  px2 py-2 rounded-md" />
          )}
        </div>

        {/* mobile navbar */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute w-full  shadow-full mt-[429px] cursor-pointer bg-white shadow "
          }
        >
          <div className="flex flex-col">
            <li className="w-full mb-3 text-[#000101] hover:bg-[#02383C] py-2 px-2 hover:text-white leading-6 text-base uppercase cursor-pointer">
              <a href="/">Home</a>
            </li>

            <li className="w-full mb-3 text-[#000101] hover:bg-[#02383C] py-2 px-2 hover:text-white leading-6 text-base uppercase">
              <Link
                onClick={handleClose}
                to="about"
                smooth={true}
                offset={-50}
                duration={500}
              >
                About
              </Link>
            </li>

            <div className="w-full mb-3 text-[#000101] hover:bg-[#02383C] py-2 px-2 hover:text-white leading-6 text-base uppercase">
              <div>
                <div className="dropdown relative">
                  <button
                    className="
                                  dropdown-toggle
                                  px-3                         
                                  text-black
                                  font-medium
                                  leading-tight
                                  uppercase        
                                  transition
                                  duration-150
                                  ease-in-out
                                  flex
                                  hover:text-white
                                  mt-0
                                  items-center
                                  whitespace-nowrap
                                "
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    SERVICE
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="caret-down"
                      className="w-2 ml-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                      ></path>
                    </svg>
                  </button>
                  <ul
                    className="
                                  dropdown-menu
                                  min-w-max
                                  absolute
                                  bg-white
                                  text-base
                                  z-50                        
                                  float-left
                                  py-2
                                  list-none
                                  text-left
                                  rounded-lg
                                  shadow-lg
                                  mt-1
                                  hidden
                                  m-0
                                  bg-clip-padding
                                  border-none
                                "
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <Link
                        onClick={handleClose}
                        to="feature"
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className=" dropdown-item
                                      text-sm
                                      py-2
                                      px-4
                                      font-normal
                                      block
                                      w-full
                                      whitespace-nowrap
                                      bg-transparent
                                    text-gray-700
                                    hover:bg-gray-100"
                      >
                        Features
                      </Link>
                    </li>

                    <li>
                      <Link
                        onClick={handleClose}
                        to="benefit"
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className=" dropdown-item
                                      text-sm
                                      py-2
                                      px-4
                                      font-normal
                                      block
                                      w-full
                                      whitespace-nowrap
                                      bg-transparent
                                      text-gray-700
                                      hover:bg-gray-100"
                      >
                        BENEFIT
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full mb-3 text-[#000101] hover:bg-[#02383C] py-2 px-2 hover:text-white leading-6 text-base uppercase">
              <div>
                <div className="dropdown relative">
                  <button
                    className="
                                  dropdown-toggle
                                  px-3                         
                                  text-black
                                  font-medium
                                  leading-tight
                                  uppercase        
                                  transition
                                  duration-150
                                  ease-in-out
                                  flex
                                  hover:text-white
                                  mt-0
                                  items-center
                                  whitespace-nowrap
                                "
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    PAGES
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="caret-down"
                      className="w-2 ml-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                      ></path>
                    </svg>
                  </button>
                  <ul
                    className="
                                  dropdown-menu
                                  min-w-max
                                  absolute
                                  bg-white
                                  text-base
                                  z-50                     
                                  float-left
                                  py-2
                                  list-none
                                  text-left
                                  rounded-lg
                                  shadow-lg
                                  mt-1
                                  hidden
                                  m-0
                                  bg-clip-padding
                                  border-none
                                "
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <Link
                        onClick={handleClose}
                        to="Regiscoin"
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className=" dropdown-item
                                      text-sm
                                      py-2
                                      px-4
                                      font-normal
                                      block
                                      w-full
                                      uppercase
                                      whitespace-nowrap
                                      bg-transparent
                                      text-gray-700
                                      hover:bg-gray-100"
                      >
                        Regiscoin
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleClose}
                        to="how"
                        smooth={true}
                        offset={-50}
                        duration={500}
                        class=" dropdown-item
                                      text-sm
                                      py-2
                                      px-4
                                      font-normal
                                      block
                                      w-full
                                      uppercase
                                      whitespace-nowrap
                                      bg-transparent
                                      text-gray-700
                                      hover:bg-gray-100"
                      >
                        How it works
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleClose}
                        to="team"
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className=" dropdown-item
                                      text-sm
                                      py-2
                                      px-4
                                      font-normal
                                      block
                                      w-full
                                      whitespace-nowrap
                                      bg-transparent
                                      text-gray-700
                                      hover:bg-gray-100"
                      >
                        TEAM
                      </Link>
                    </li>

                    <li>
                      <Link
                        onClick={handleClose}
                        to="persona"
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className=" dropdown-item
                                      text-sm
                                      py-2
                                      px-4
                                      font-normal
                                      block
                                      w-full
                                      uppercase
                                      whitespace-nowrap
                                      bg-transparent
                                      text-gray-700
                                      hover:bg-gray-100"
                      >
                        Persona
                      </Link>
                    </li>

                    <li>
                      <Link
                        onClick={handleClose}
                        to="faq"
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className=" dropdown-item
                                      text-sm
                                      py-2
                                      uppercase
                                      px-4
                                      font-normal
                                      block
                                      w-full
                                      whitespace-nowrap
                                      bg-transparent
                                      text-gray-700
                                      hover:bg-gray-100"
                      >
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <li className="w-full mb-3 text-[#000101] hover:bg-[#02383C] py-2 px-2 hover:text-white leading-6 text-base uppercase">
              <Link
                onClick={handleClose}
                to="roadmap"
                smooth={true}
                offset={-100}
                duration={500}
              >
                Roadmap
              </Link>
            </li>

            <li className="w-full text-[#000101] hover:bg-[#02383C] py-2 px-2 hover:text-white leading-6 text-base uppercase">
              <Link
                onClick={handleClose}
                to="contact"
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact
              </Link>
            </li>

            <button
              type="button"
              onClick={handleThemeSwitch}
              className="w-12 bg-[#02383C] text-lg px-2 py-2 m-3 rounded-md"
            >
              {theme === "dark" ? (
                <div className="text-white">
                  <ion-icon name="sunny"></ion-icon>{" "}
                </div>
              ) : (
                <div className="text-white">
                  <ion-icon name="moon"></ion-icon>
                </div>
              )}
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
