import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
export default function Links({ href, label }) {
  const [isHovering, setIsHover] = useState(false);

  function toggle() {
    setIsHover((prev) => !prev);
  }
  return (
    <div className="flex items-center gap-1 ">
      <a
        href={href}
        target="_blank"
        className="text-mutedGray"
        onMouseEnter={toggle}
        onMouseLeave={toggle}
      >
        {label}
      </a>
      <MdArrowOutward
        className={`text-primaryText duration-200 ${
          isHovering
            ? "translate-x-0 translate-y-0 opacity-100 rotate-0 "
            : "-translate-x-3 translate-y-3 opacity-0  rotate-45"
        }`}
      />
    </div>
  );
}
