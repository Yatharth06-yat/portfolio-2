import React from 'react';
import '../style/Front.css';
import yatharth from '../assets/imageee.jpeg'
import cv from '../assets/yatharth2.pdf';
import { FaGithub, FaLinkedin,FaInstagram ,FaTwitter} from "react-icons/fa";

export default function Front() {
const Dcv =()=>{
  const link = document.createElement("a");
  link.href = cv; 
  link.download = "Yatharth_Gupta_CV.pdf";
  link.click();
}
  return (
    <>
      <section className='front' id='home'>
        <div className="home">
          <div className="home-left">
            <h1>Hi, I'm <span>Yatharth Gupta </span></h1>
            <h2>and I'm <span className="highlight">MERN Developer</span>
            </h2>
            <p>
            I’m a passionate MERN Stack Developer focused on building responsive and user-friendly web applications using MongoDB, Express.js, React.js, and Node.js. I enjoy creating scalable full-stack solutions with clean architecture and maintainable code. My expertise includes RESTful API development, authentication, database design, and state management. I prioritize performance optimization and seamless user experience in every project I build. I am constantly learning and improving to develop impactful, real-world digital products.
            </p>
            <span className='sicons'>
              <ul className="ll">
              <li>
          <a href="https://github.com/Yatharth06-yat" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </li>
                <li> <a href="https://linkedin.com/in/yatharth-gupta-525b40306/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a></li>
          <li> <a href="https://www.instagram.com/the_yatharth_056/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a></li>
          <li> <a href="https://x.com/home" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a></li>
              </ul>

            </span>
            <button className='btn'onClick={Dcv}> Downlod CV </button>
          </div>

          <div className="home-right">
            <div className="image-container">
              <img src={yatharth} alt="Profile" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
