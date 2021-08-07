import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './HomeSection.css';

function HomeSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
  return (
    // <div
    //   className="home-container"
    //   style={{ background: `url(${backgroundImage})` }}
    // >
    //   <div className="get-started">
    //     <h1>Start reading, start inspiring</h1>
    //     <p>What are you waiting for?</p>
    //     <div className="hero-btns">
    //       <Button
    //         className="btns"
    //         buttonStyle="btn--outline"
    //         buttonSize="btn--large"
    //       >
    //         GET STARTED
    //       </Button>
    //     </div>
    //   </div>
    // </div>
    <div
      className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
    >
      <div className="container">
        <div
          className="row home__hero-row"
          style={{
            display: "flex",
            flexDirection: imgStart === "start" ? "row-reverse" : "row",
          }}
        >
          <div className="col">
            <div className="home__hero-text-wrapper">
              <div className="top-line">{topLine}</div>
              <h1 className={lightText ? "heading" : "heading dark"}>
                {headline}
              </h1>
              <p
                className={
                  lightTextDesc
                    ? "home__hero-subtitle"
                    : "home__hero-subtitle dark"
                }
              >
                {description}
              </p>
              <Link to="/sign-up">
                <Button buttonSize="btn--wide" buttonColor="blue">
                  {buttonLabel}
                </Button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="home__hero-img-wrapper">
              <img src={img} alt={alt} className="home__hero-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;