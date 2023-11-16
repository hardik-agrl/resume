import React from "react";
// import photo from './image/1ms19ec046.jpg'
import photo from "./image/Screenshot 2023-11-16 205204.png";

export default function Photo() {
  return (
    <div>
      <img src={photo}  height={100} width={100} alt=""/>
    </div>
  );
}
