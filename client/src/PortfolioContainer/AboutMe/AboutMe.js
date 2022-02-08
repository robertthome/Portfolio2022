import React, { useEffect } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animation from '../../utilities/Animations'
import './AboutMe.css'

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return
    Animation.animations.fadeInScreen(props.id)
  }
  const fadeInSubription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

  const SCREEN_CONSTANTS = {
    description:
      'Front-end web developer with a passion for functionality and style. Looking for my first entry level job. ',
    highlights: {
      bullets: [
        'Front-end web and mobile development',
        'Interactive Front End as per the design',
        'React and Vue',
        'Typescript',
        'Node.js'
      ],
      heading: 'Here are a few Highlights'
    }
  }
  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ))
  }

  return (
    <div className="about-me-container screen-container" id={props.id || ''}>
      <div className="about-me-parent">
        <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
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
        </div>
      </div>
    </div>
  )
}
