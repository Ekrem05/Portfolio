import LinkedIn from "./Icons/LinkedIn";
import Github from "./Icons/Github";
import Moon from "./Icons/Moon";
import Sun from "./Icons/Sun";

export default function Navigation({ onThemeChange, theme }) {
  return (
    <header className="flex flex-col justify-center">
      <div className="w-3/5 self-center h-[320px] bg-gradient-to-r from-[#59C173] via-[#a17fe0] to-[#5D26C1] opacity-40 blur-[100px] rounded-ful  absolute "></div>
      <nav className=" relative text-secondaryText top-10 mx-auto z-10 w-full max-w-[1024px]">
        <ul className="flex items-center bg-navBg  py-3 px-4 justify-between rounded-2xl">
          <li>
            <h2 className="font-bold text-lg uppercase text-primaryText">
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
                <a className="navBtn" href="">
                  <LinkedIn />
                </a>
                <a className="navBtn" href="">
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
    </header>
  );
}
