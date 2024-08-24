import { useEffect, useState } from "react";
export default function Certificate({ label, img, href, trigger }) {
  const [isHovering, setIsHover] = useState(false);

  function toggle() {
    setIsHover((prev) => !prev);
  }
  useEffect(() => {
    trigger({
      show: isHovering,
      img: img,
    });
  }, [isHovering]);
  return (
    <div className="flex gap-10">
      <a
        href={href}
        onMouseEnter={toggle}
        target="_blank"
        onMouseLeave={toggle}
      >
        {label}
      </a>
    </div>
  );
}
