import React from 'react';

import'../style/about.css';
 export  default function  About()  {
  return (
    <section className="about" id="about">
  <div className="about-container">
    <h2 className="section-title">About Me</h2>
    <div className="about-content-left">
    <p className="about-intro">
  Hi, I'm <strong>Yatharth Gupta</strong>, a passionate <strong>MERN Stack Developer</strong> who thrives on building scalable, responsive, and user-centric full-stack web applications.
</p>

<p>
  I specialize in <strong>MongoDB</strong>, <strong>Express.js</strong>, <strong>React.js</strong>, and <strong>Node.js</strong>. I enjoy developing complete web solutions — from designing dynamic frontend interfaces to building secure and efficient backend systems.
</p>

<p>
  My strengths include developing RESTful APIs, implementing authentication and authorization, managing application state efficiently, and designing optimized database schemas for real-world applications.
</p>

<h3 className="subheading">What Drives Me</h3>

<p>
  I believe great full-stack development is about connecting powerful backend logic with seamless frontend experiences. It’s not just about functionality—it’s about building scalable, secure, and impactful digital products.
</p>
    </div>
    <div className="about-content-right">
      <h3 className="subheading">Tech Stack</h3>
      <ul className="tech-stack">
        <li><strong>Languages:</strong> JavaScript, HTML5, CSS3, C ,C++(DSA),Python,Node.js</li>
        <li><strong>Frameworks/Libraries:</strong> React.js,Express.js<br></br>Numpy,Pandas, Matplotlib</li>
        <li><strong>Tools & Platforms:</strong> Git, GitHub,<br></br> VS Code</li>
        <li><strong>Other Interests:</strong> Web Animations, Responsive Design</li>
      </ul>

      <h3 className="subheading">Outside of Code</h3>
      <p>
        When I’m not coding, I’m often sketching UI ideas, reading about tech/startups, listening to podcasts, or learning new productivity tools.
      </p>
    </div>
  </div>
</section>
  );
};
