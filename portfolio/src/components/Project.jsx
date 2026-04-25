import React, { useState } from 'react'
import p1 from '../assets/p1.png'
import '../style/Project.css'
import p2 from '../assets/p2.png'
import p3 from '../assets/pro3.png'
import p4 from '../assets/pro4.png'

const projects = [
  {
    img: p1,
    title: 'AI Emergency Alert & Ambulance System',
    desc: 'AI-powered healthcare platform that analyzes symptoms, voice input, and accident images to detect emergencies in real time. Features doctor alerts, ambulance dispatch, live tracking, and blood bank support.',
    github: 'https://github.com/paliwalpriyanjal-hash/phynknight-hacksagon',
    video: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_1',
  },
  {
    img: p2,
    title: 'React Portfolio',
    desc: 'This portfolio project, built with React, showcases my skills, projects, and contact details with a modern responsive design. Features clean UI, smooth navigation, social links and a CV download option.',
    github: 'https://github.com/Yatharth06-yat/portfolio-2',
    video: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_2',
  },
  {
    img: p3,
    title: 'SwachhMap',
    desc: 'Interactive platform that lets citizens report and track public cleanliness issues in real time by uploading images with location and category. Reports appear on a live map with upvoting for urgent issues.',
    github: 'https://github.com/Yatharth06-yat/swachhmap',
    video: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_3',
  },
  {
    img: p4,
    title: 'IoT Edge Club',
    desc: 'Central hub for IoT enthusiasts, students, and professionals. Provides resources, tutorials, and project showcases with interactive guides, real-time demos, and community discussions.',
    github: 'https://github.com/Yatharth06-yat/iot-edge-club',
    video: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_4',
  },
]

export default function Project() {
  const [openVideo, setOpenVideo] = useState(Array(projects.length).fill(false))

  const toggleVideo = (index) => {
    setOpenVideo(prev => prev.map((val, i) => i === index ? !val : val))
  }

  return (
    <div>
      <h2>Project</h2>
      <div className='project-container'>
        <div className='project-grid'>
          {projects.map((project, index) => (
            <div className='project-item' key={index}>

              {/* Image / Video Toggle Area */}
              <div className='project-media'>
                {openVideo[index] ? (
                  <iframe
                    className='project-video'
                    src={project.video}
                    title={project.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <img src={project.img} alt={project.title} />
                )}
              </div>

              <div className='project-content'>
                <h3>{project.title}</h3>
                <p className='pppp'>{project.desc}</p>
                <div className='project-actions'>
                  <a href={project.github} className="project-btn" target="_blank" rel="noopener noreferrer">
                    View Github
                  </a>
                  <button
                    className={`demo-btn ${openVideo[index] ? 'active' : ''}`}
                    onClick={() => toggleVideo(index)}
                  >
                    {openVideo[index] ? '✕ Close Video' : '▶ Watch Demo'}
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
