import React from 'react'
import Github from '../../../assets/images/github_light.png'
import Link from '../../../assets/images/external_link.png'
function Project(props) {
  const {link, github, name, image, children} = props
  return (
    //   , url( ${image} ) // add this to below in case projects should contain an image as their background
    <div className="project" style={{backgroundImage:`linear-gradient(to bottom, rgba(145, 146, 152, 1), rgba(27, 1, 13, 0.7)), url( ${image} )`}}>
            <a className="project-link" href={link}>
                {name}
                <img className="project-link-img" src={Link} alt="link"/>
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