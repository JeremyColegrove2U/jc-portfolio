import React from 'react'
import Github from '../../../assets/images/github_light.png'
import Link from '../../../assets/images/external_link.png'


// the component for each project in my portfolio
function Project(props) {
  const {link, github, name, image, children} = props
  return (
    <div className="project" style={{backgroundImage:`linear-gradient(to bottom, rgba(145, 146, 152, 1), rgba(27, 1, 13, 0.7)), url( ${image} )`}}>
            
            {/* display the project name and link icon */}
            <a className="project-link" href={link}>
                {name}
                <img className="project-link-img" src={Link} alt="link"/>
            </a>

            {/* display the project description */}
            <p>
                {children}
            </p>

            {/* display the project github link */}
            <a href={github}>
                <img src={Github} alt="github link" className="project-image"/>
            </a>
    </div>
  )
}

export default Project