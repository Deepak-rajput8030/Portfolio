import React from 'react'
import './Intro.css'
import bg from './../../assets/Profile_Img.jpg';

// #FF6500

function Intro() {
  return (
    <section className='profile-section'>
  
      <div className='profile-text'>
        <span>Hello,</span>
        <h1>I AM Deepak Maher</h1> 
        <p>
          I am a creative and passionate web developer. With a commitment to continuous learning, I strive to build 
          engaging and responsive websites that offer seamless user experiences.
        </p>

        <div className="social-icons">

              <a className='logo' href='https://www.linkedin.com/in/8030deepakrajput'>
                <i className="fa-brands fa-linkedin"></i>
              </a>

              <a className='logo' href='https://github.com/Deepak-rajput8030'>
                <i className="fa-brands fa-github"></i>
              </a>

              <a className='logo' href='https://x.com/D_Rajput_8030'>
                <i className="fa-brands fa-twitter"></i>
              </a>
              
              <a className='logo' href='https://www.instagram.com/deepak_rajput_8030/'>
                <i className="fa-brands fa-instagram"></i>
              </a>

          </div>
          
      </div>
      <div className='profile-image'>
        <img src={bg} alt='profile_img'></img>
      </div>
    </section>
  )
}

export default Intro
