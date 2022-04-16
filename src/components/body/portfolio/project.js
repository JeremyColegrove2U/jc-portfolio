import React from 'react'
import Github from '../../../assets/images/github.png'
function Project(props) {
  const {link, github, name, image} = props
  return (
    <div className="project" style={{backgroundImage:`linear-gradient(to bottom, rgba(245, 246, 252, 1), rgba(57, 11, 23, 0.7)), url( ${image} )`}}>
            <a href={link}>
                {name}
            </a>
            <a href={github}>
                <img src={Github} alt="github link" className="project-image"/>
            </a>
    </div>
  )
}

export default Project