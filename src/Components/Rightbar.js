import React from "react";
import Skills from "./Skills";
import Project from "./Project";
import Certificate from "./Certificate";
import Language from "./Language";
import Interest from "./Interest";


export default function rightbar() {
  return (
    <>
      {/* <div className="my-5"><About/></div> */}
      <div className="my-5">
        <Skills />
      </div>
      <div className="my-5">
        <Project />
      </div>
      <div className="my-5">
        <Certificate />
      </div>
      <div className="my-5">
        <Language />
      </div>
      <div className="my-5">
        {" "}
        <Interest />
      </div>
    </>
  );
}
