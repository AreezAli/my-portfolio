import React from "react";
// import CV from "../../assets/cv.pdf";
const Cta = () => {
  const handleClick = () => {
    alert("WILL UPLOAD SOON. \n THANK YOU");
  };
  return (
    <div className="cta">
      <a
        onClick={handleClick}
        href="#Home"
        /*href={CV} download */
        className="btn"
      >
        Download CV
      </a>
      <a href="#Contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default Cta;
