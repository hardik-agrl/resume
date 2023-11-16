import React from 'react'
import Education from './Education'
import Experience from './Experience'
import Certificate from './Certificate'
import Intro from './Intro'

export default function leftbar() {
  return (
    <>
    <div className="ml-7">
      {/* <div className="my-5"><Intro/></div> */}
      <div className="my-5 ml-7"><Education/></div>
      <div className="mt-10 ml-7"><Experience/></div>
      {/* <div className="my-5"><Certificate/></div> */}
      </div>
    </>
  )
}
