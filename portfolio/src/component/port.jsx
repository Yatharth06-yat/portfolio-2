import React, { useState } from 'react';
import '../style/port.css';
import Certificate from './Certificate';
import Project from './Project';
import Skills from './Skills';

export default function Port() {
  const [page, setPage] = useState('skills');

  return (
    <section className='port' id='portfolio'>
      <div className='kk'>
        <h1>Portfolio Showcase</h1>
        <div className='buttonp'>
        <button onClick={() => setPage('skills')}>Skills</button>
          <button onClick={() => setPage('certificate')}>Certificate</button>
          <button onClick={() => setPage('project')}>Project</button>
        
        </div>

        <div className="content">
          {page === 'project' && <Project />}
          {page === 'certificate' && <Certificate />}
          {page === 'skills' && <Skills />}
        </div>
      </div>
    </section>
  );
}
