import React from "react";
// import photo from './image/1ms19ec046.jpg'
import photo from "./image/pic.png";

export default function Photo() {
  return (
    <div className="text-center">
    <img height={180}  width={200}  src={photo} class="rounded mx-auto d-block   " alt="..."></img>
    </div>
  );
}
