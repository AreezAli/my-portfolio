import React from "react";
import "./Services.css";
import Data from "./projects";
// import IMG from "../../assets/portfolio4.jpg";
const Services = () => {
  return (
    <section id="Projects">
      <h2>MY PROJECTS</h2>
      <div className="container portfolio_container">
        {Data.map((item) => {
          return (
            <article key={item.id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={item.IMG} alt="" />
              </div>
              <h3>{item.title}</h3>
              <div className="button">
                <a
                  href={item.link}
                  className="btn btn-primary"
                  rel="noreferrer"
                  target="_blank"
                >
                  LIVE DEMO
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
