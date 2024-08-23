import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
export default function CheckItOut({ href, label }) {
  const [isHovering, setIsHover] = useState(false);

  function toggle() {
    setIsHover((prev) => !prev);
  }
  return (
    <div className="flex gap-1 items-center">
      <a
        href=""
        className="text-active underline underline-offset-8"
        onMouseEnter={toggle}
        onMouseLeave={toggle}
      >
        {label}
      </a>
      <MdArrowOutward
        className={`text-active duration-200 ${
          isHovering
            ? "translate-x-0 translate-y-0 opacity-100 rotate-0 "
            : "-translate-x-3 translate-y-3 opacity-0  rotate-45"
        }`}
      />
    </div>
  );
}
