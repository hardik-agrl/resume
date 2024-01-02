import React from "react";

export default function Experience() {
  return (
    <>
      {/* <div className="card" >
  <img className="card-img-top" src="..." alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div> */}

      <div className="container my-5">
        <h2>WORK EXPERIENCE</h2>
        <ul>
          <h3>Software Engineer Intern</h3>
          Tantragyaan Solutions 03/2023 - 06/2023, Bangalore,Karnataka
          <ul >
            <h3 className="my-3">Front-End Development</h3>
            <li >
              
              Developed and maintained an interactive UI page for monitoring
              health matrices like Blood pressure and Oxygen rate using React
              JS, JavaScript, and Bootstrap libraries.
              
            </li>
            <li>
              This includes features like live search, interactive forms for
              appointments or consultations, and real-time updates for medical
              information.
            </li>
            <li>
              {" "}
              Optimized the rendering time of the components by leveraging React
              Hooks.
            </li>
          </ul>
          <ul>
            <h3 className="my-3">Android App Development</h3>
            <li>
              Developed a register login page from scratch using java that
              allows new user to create new accounts and subsequently log into
              their accounts
            </li>
            <li>Used Google firebase and Database to store the data</li>
          </ul>
        </ul>
      </div>
    </>
  );
}
