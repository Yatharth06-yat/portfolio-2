import React from 'react'
import p1 from '../assets/p1.png'
import '../style/Project.css'
import p2 from '../assets/p2.png'
import p3 from '../assets/pro3.png'
import p4 from '../assets/pro4.png'
export default function Project() {
  return (
    <div>
      <h2>Project</h2>
      <div className='project-container'>
        <div className='project-grid'>
          <div className='project-item'>
            <img src={p1} alt="" />
            <div className='project-content'>
              <h3>Project 1</h3>
              <p className='pppp'>AI-Based Emergency Alert & Smart Ambulance System is an AI-powered healthcare platform that analyzes symptoms, voice input, and accident images to detect emergencies in real time. The system predicts risk levels and provides features like doctor alerts, ambulance dispatch, live tracking, and blood bank support to improve emergency response and coordination.</p>
              <a href="https://github.com/paliwalpriyanjal-hash/phynknight-hacksagon" className="project-btn">View Github Repo</a>
            </div>
          </div>

          <div className='project-item'>
            <img src={p2} alt="" />
            <div className='project-content'>
              <h3>Project 2</h3>
              <p className='pppp'>This portfolio project, built with React, showcases my skills, projects, and contact details with a modern responsive design.
              It features a clean UI, smooth navigation, and interactive elements like social links and a CV download option.</p>
              <a href="" className="project-btn">View Github Repo</a>
            </div>
          </div>

          <div className='project-item'>
            <img src={p3} alt="" />
            <div className='project-content'>
              <h3>Project 3</h3>
              <p className='pppp'>SwachhMap is an interactive platform that lets citizens report and track public cleanliness issues in real time by uploading images with location and category. Reports appear on a live map, enabling authorities to mark them as ‘cleaned’ and users to upvote urgent issues, fostering transparency, accountability, and community engagement.</p>
              <a href="https://github.com/Yatharth06-yat/swachhmap" className="project-btn">View Github Repo</a>
            </div>
          </div>

          <div className='project-item'>
            <img src={p4}alt="" />
            <div className='project-content'>
              <h3>Project 4</h3>
              <p className='pppp'>The IoT Edge website serves as a central hub for enthusiasts, students, and professionals interested in the Internet of Things (IoT). It provides resources, tutorials, and project showcases to help users learn, experiment, and build IoT solutions. Members can access interactive guides, real-time demos, and community discussions, fostering collaboration and knowledge sharing.</p>
              <a href="https://github.com/Yatharth06-yat/iot-edge-club" className="project-btn">View Github Repo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
