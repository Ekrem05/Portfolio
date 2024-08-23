import { Link } from "react-router-dom";
import Links from "./Links";
export default function Footer() {
  const handleMouseEnter = () => {
    console.log("Hovered over a link");
  };
  return (
    <footer className="relative bottom-0 pb-10 z-20 mt-32 flex flex-col gap-16 border-t border-t-mutedGray pt-10 px-4 text-primaryText bg-">
      <ul className="flex flex-col gap-16 ">
        <li className="flex flex-col gap-4">
          <h5 className="text-xl font-bold">Links</h5>
          <Link to={""} className="text-mutedGray">
            About
          </Link>
          <Link to={""} className="text-mutedGray">
            Education
          </Link>
          <Link to={""} className="text-mutedGray">
            Contacts
          </Link>
        </li>
        <li className="flex flex-col gap-4">
          <h5 className="text-xl font-bold">Find me on</h5>
          <Links
            href={"https://www.linkedin.com/in/ekrem-beytula-5b010b263/"}
            label={"LinkedIn"}
          />
          <Links href={"https://github.com/Ekrem05"} label={"GitHub"} />

          <p className="text-mutedGray">Email: ekrem.beytula.dev@gmail.com</p>
        </li>
      </ul>
      <section>
        <p>
          &copy; {new Date().getFullYear()} Ekrem Beytula. All Rights Reserved
        </p>
      </section>
      <div className=" self-center h-[220px] bg-gradient-to-r from-[#59C173] via-[#a17fe0] to-[#5D26C1] opacity-40 blur-[90px] bottom-0 w-full -z-10   absolute "></div>
    </footer>
  );
}
