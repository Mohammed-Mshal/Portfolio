import React, { useEffect, useState } from "react";
import "./scrollToTop.css";
import { AiOutlineArrowUp } from "react-icons/ai";
function ScrollToTop(props) {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener(`scroll`, () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener(`scroll`);
    };
  }, []);
  return (
    <button
      className={`btn fs-5 position-fixed scroll_top ${
        show && "show"
      } border-0`}
      style={{ backgroundColor: `#685bcd`, color: `#fff` }}
      onClick={() => window.scrollTo(0, 0)}
    >
      <AiOutlineArrowUp />
    </button>
  );
}

export default ScrollToTop;
