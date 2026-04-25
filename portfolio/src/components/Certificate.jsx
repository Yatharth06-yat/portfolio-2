import React from 'react'
import c1 from '../assets/cer.png'
import '../style/Certificate.css'
import c2 from '../assets/c2.png'
import c3 from '../assets/c3.png'
import yc from "../assets/yc.png"
import c6 from "../assets/c6.png"
import c7 from "../assets/c7.png"
import c8 from "../assets/c8.png"
import c9 from "../assets/c9.png"
export default function Certificate() {
  return (
    <>
    <h2>Certificate</h2>
    <div className="certificate-container">
    <div className="certificate-grid">
      <img src={c3} />
      <img src={c2} />
      <img src={c1} />
      <img src={yc} />
      <img src={c6} />
      <img src={c7} />
      <img src={c8} />
      <img src={c9} />
    </div>
  </div>
  </>
  )
}
