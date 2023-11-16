import React from 'react'
import Intro from './Intro'
// import Photo from './Photo'
import About from './About'

export default function Topbar() {
  return (
    <div className='container'>
     <div className="d-flex justify-content-around">
     <div className="col-md-6 my-3">
      <Intro/>
      </div> 
     <div className="col-md-6 my-3">
      <About/>
      </div> 
      {/* <Photo/> */}
      {/* <About/> */}
      </div>
    </div>
  )
}
