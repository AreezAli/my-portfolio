import React from "react";
import "./Header.css";
import Cta from "./Cta";
import ME from "../../assets/me1.png";
import HeaderSocials from "./HeaderSocials";
import { useEffect } from "react";
import { useState } from "react";
const Header = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    if (window.innerWidth < 1024) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  // window.addEventListener("resize", handleShow);
  useEffect(() => {
    handleShow();
  }, []);
  return (
    <header id="Home" className={show ? "header_small" : "header"}>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Areez Ali</h1>
        <h5 className="text-light">WEB Developer</h5>
        <Cta />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#Footer" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
