import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className='resume-section'>
    <h2 className='section-heading'>Resume</h2>
      
    <div className="container">

      {/* Experience field */}
        <div className="field">
          <p>Experience</p>

          <div className="options">
            <h3 className="options-year">Jul-2021 - Aug-2022</h3>
            <h3 className="options-name">Endress + Hauser Flowtec (India) Pvt. Ltd. (MNC)</h3>
            <h3 className="options-role">Computer Assistant (Apprenticeship)</h3>
          </div>
        </div>

      {/* Skills field */}
        <div className="field">
          <p>Skill</p>

          <div className="options">
            <h3 className="options-name">
                {/* <li>React Js <span className='options-level'> 80%</span> </li>  */}
                <li>React JS</li>
                <li>Responsive Website</li>
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
            </h3>
          </div>
        </div>

      {/* Education field */}
        <div className="field">
          <p> <i className="fa-solid fa-graduation-cap"></i> Education</p>

          <div className="options">
            <h3 className="options-year">2022 - 2024</h3>
            <h3 className="options-name">Bachelor of Computer Science (BCS)</h3>
          </div>

          <div className="options">
            <h3 className="options-year">MARCH - 2022</h3>
            <h3 className="options-name">HSC (12th)</h3>
          </div>

          <div className="options">
            <h3 className="options-year">AUG - 2020</h3>
            <h3 className="options-name">Computer Operator and Programming Assistance (COPA)</h3>
          </div>

          <div className="options">
            <h3 className="options-year">MARCH - 2019</h3>
            <h3 className="options-name">SSC (10th)</h3>
          </div>
        </div>

        <div className='cv-field'>
          <a 
            href={`${process.env.PUBLIC_URL}/assets/Deepak Maher Resume.pdf`} 
            download="Deepak Maher Resume.pdf">
            <i className="fa-regular fa-file"></i> 
              Download CV
          </a> 
        </div>
        
      </div>
    </div>
  )
}
export default Resume
