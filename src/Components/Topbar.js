import React from "react";
import Intro from "./Intro";
import Photo from './Photo'
import About from "./About";

export default function Topbar() {
  return (
    <div className="">
      <div className="d-flex justify-content-BETWEEN">
        <div className=" ms-2">
          <Intro />
        </div>
        <div className="ms-auto ">

        <Photo/>
        </div>
        <div className="ms-auto p-2">
          <About />
        </div>
        {/* <About/> */}
      </div>
    </div>
  );
}
