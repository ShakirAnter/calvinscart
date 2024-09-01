import React, { useEffect, useState } from "react";

const ToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset < 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  return (
    <div
      className={`fixed right-10 bottom-10 w-10 h-10 items-center justify-center rounded-full cursor-pointer  bg-primary ${
        showScroll ? "flex" : "hidden"
      }`}
      onClick={scrollTop}
    >
      <i className="fa-solid fa-chevron-up text-lg"></i>
    </div>
  );
};

export default ToTop;
