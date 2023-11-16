import React from "react";
// import photo from './image/1ms19ec046.jpg'
import photo from "./image/Screenshot 2023-11-16 205204.png";

export default function Photo() {
  return (
    <div className="text-center">
    <img src={photo} class="rounded mx-auto d-block " alt="..."></img>
    </div>
  );
}
