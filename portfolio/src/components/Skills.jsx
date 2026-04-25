import React from 'react'
import js from '../assets/js.png'
import '../style/Skills.css'
import Py from '../assets/pyy.png'
import Re from '../assets/re.png'
import ht from '../assets/img.png'
import cs from '../assets/css.png'
import cpp from '../assets/c++.png'
import c from '../assets/c.png'
import no from '../assets/node1.png'
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
export default function Skills() {
  return (
    <div>
      <h2>Skills</h2>
      <div className="skills-wrapper">
        <div className="skill-count">
            <div>
          <div className="skl"><img src={js} /></div><p>Javascript</p></div>
          <div>
          <div className="skl"><img src={Py} /></div><p>Python</p></div>
          <div>
          <div className="skl"><img src={Re} /></div><p>React</p></div>
          <div>
          <div className="skl"><img src={ht} /></div><p>HTML</p></div>
          <div>
          <div className="skl"><img src={cs} /></div><p>CSS</p>
          </div>
          <div>
          <div className="skl"><img src={cpp} /></div><p>C++</p></div>
          <div>
          <div className="skl"><img src={c} /></div><p>C</p></div>
         
          <div>
          <div className="skl"><img src={no} /></div><p>Node.js</p></div>
          <div>
          <div className="skl"><img src={s1} /></div><p>Numpy</p>
          </div>
          <div>
          <div className="skl"><img src={s2} /></div><p>Matplotlib</p>
          </div>
  
        </div>
      </div>
    </div>
  )
}
