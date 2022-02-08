import React from 'react'
import Typical from 'react-typical'
import ScrollService from '../../../utilities/ScrollService'
import './Profile.css'

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="#">
                {/* change to github */}
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                {/* change to LinkedIn */}
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="#">
                {/* Email */}
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                {/* Resume ??? */}
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {' '}
              Hello, I'M <span className="highlighted-text">Robert</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {' '}
              <h1>
                {' '}
                <Typical
                  loop={Infinity}
                  steps={[
                    'Ethusiastic Dev 😎',
                    1000,
                    'Front-end Developer 💻',
                    1000,
                    'React Dev ⚡️',
                    1000,
                    'Another skill 🌸',
                    1000
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Front-end focused with back-end knowledge
              </span>
            </span>
          </div>

          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {' '}
              Hire Me{' '}
            </button>
            <a href="robresume.pdf" download="Robert robresume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  )
}
