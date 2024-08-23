import LinkedIn from "./Icons/LinkedIn";
import Github from "./Icons/Github";
import Moon from "./Icons/Moon";
import Sun from "./Icons/Sun";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
export default function Navigation({ onThemeChange, theme }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen((prev) => !prev);
  }
  return (
    <header className=" sm:flex flex-col justify-center">
      <div className="w-3/5 self-center h-[320px] bg-gradient-to-r from-[#59C173] via-[#a17fe0] to-[#5D26C1] opacity-40 blur-[100px] rounded-ful  absolute "></div>
      <nav className="hidden sm:block relative text-secondaryText top-10 mx-auto z-10 w-full max-w-[1024px]">
        <ul className="flex items-center bg-navBg  py-3 px-4 justify-between rounded-2xl">
          <li>
            <h2 className="nameLogo font-extrabold text-lg uppercase text-primaryText tracking-tighter">
              Ekrem Beytula
            </h2>
          </li>
          <li className="basis-96">
            <ul className="flex justify-between text-md">
              <li className="navBtn">Home</li>
              <li className="navBtn">Work</li>
              <li className="navBtn">About</li>
              <li className="navBtn">Contact</li>
            </ul>
          </li>
          <li className="basis-28 ">
            <ul className="flex gap-3">
              <li className="flex  gap-2">
                <a
                  className="navBtn"
                  href="https://www.linkedin.com/in/ekrem-beytula-5b010b263/"
                >
                  <LinkedIn />
                </a>
                <a className="navBtn" href="https://github.com/Ekrem05">
                  <Github />
                </a>
              </li>
              <li>
                <p>|</p>
              </li>
              <li className="navBtn" onClick={onThemeChange}>
                {theme === "dark" ? <Sun /> : <Moon />}
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <nav className="block sm:hidden  relative text-secondaryText top-0 mx-auto z-10 w-full max-w-[1024px] ">
        <ul className="flex backdrop-blur-[100px] items-center bg-navBg  py-3 px-4 justify-between rounded-2xl">
          <li>
            <h2 className="nameLogo font-extrabold text-lg uppercase text-primaryText tracking-tighter">
              Ekrem Beytula
            </h2>
          </li>
          <li>
            {!isOpen ? (
              <FaBars
                className="hover:cursor-pointer size-5"
                onClick={toggleDropdown}
              />
            ) : (
              <IoMdClose
                className="hover:cursor-pointer size-5"
                onClick={toggleDropdown}
              />
            )}
          </li>
        </ul>
        <ul
          className={`absolute flex w-full p-10 ${
            isOpen ? "translate-y-0 " : "-translate-y-[1000px]"
          } flex-col backdrop-blur-[100px] items-center -translate-y-[1000px] duration-300 -z-10`}
        >
          <li className="w-full flex justify-center">
            <ul className="flex flex-col text-center text-md w-5/6 gap-5">
              <li className="navBtn bg-mobileTransparent text-primaryText py-3 rounded-lg">
                Home
              </li>
              <li className="navBtn bg-mobileTransparent text-primaryText py-3 rounded-lg">
                Work
              </li>
              <li className="navBtn bg-mobileTransparent text-primaryText py-3 rounded-lg">
                About
              </li>
              <li className="navBtn bg-mobileTransparent text-primaryText py-3 rounded-lg">
                Contact
              </li>
              <li className="navBtn bg-mobileTransparent text-primaryText py-3 rounded-lg">
                {theme === "dark" ? "Theme: Dark" : "Theme: Light"}
              </li>
            </ul>
          </li>

          <li className="navBtn" onClick={onThemeChange}></li>
        </ul>
      </nav>
    </header>
  );
}
