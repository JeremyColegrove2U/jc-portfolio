import React from 'react'
import Github from '../../../assets/images/github_light.png'
function Project(props) {
  const {link, github, name, children} = props
  return (
    //   , url( ${image} ) // add this to below in case projects should contain an image as their background
    <div className="project" style={{backgroundImage:`linear-gradient(to bottom, rgba(245, 246, 252, 1), rgba(57, 11, 23, 0.7))`}}>
            <a className="project-link" href={link}>
                {name}
            </a>
            <p>
                {children}
            </p>
            <a href={github}>
                <img src={Github} alt="github link" className="project-image"/>
            </a>
    </div>
  )
}

export default Project