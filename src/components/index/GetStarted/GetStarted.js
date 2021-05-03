import React from "react";
import "./getstarted.css";
import ButtonComponent from "../../Button/Button";

//
export default function GetStarted() {
  return (
    <div className="container get-started">
      <h3 className="section-caption">
      Pro manager provides you with complete solutions for managing your entire employee life cycle.
      </h3>
      <ButtonComponent text="Get Started" link="/"/>
    </div>
  );
}
