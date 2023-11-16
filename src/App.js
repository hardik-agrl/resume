// import logo from './logo.svg';
import "./App.css";
import Topbar from "./Components/Topbar";
import Leftbar from "./Components/Leftbar";

import Rightbar from "./Components/Rightbar";

function App() {
  return (
    <>
      {/* <div className="container"> */}
      {/* <nav class="navbar bg-body-tertiary ">
        <div className="text-center">Resume</div>
      </nav> */}
      <h1 className='text-center'>Resume</h1>
      <Topbar />
      <hr></hr>
      <div className="row">
        <div class="d-flex justify-content-around">
          <div className="col-md-6 ">
            <Leftbar />
          </div>
          <div className="col-md-6">
            <Rightbar />
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default App;
