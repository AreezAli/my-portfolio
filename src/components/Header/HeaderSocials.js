import React from "react";
import { BsLinkedin, BsFacebook, BsGithub } from "react-icons/bs";
const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://facebook.com/" target="_blank" rel="noreferrer">
        <BsFacebook />
      </a>
      <a href="https://github.com/" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
