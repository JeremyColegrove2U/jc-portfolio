import React from 'react'
import JResume from '../../../assets/files/JeremyColegroveResume.pdf'
import Skill from './skill'

// main component to render for the resume page
function Resume() {
  return (
    <section>
      <div className="content">
        <h1 className="text-lg block ">Skills</h1>
        {/* display each skill as a component with a percentage bar (just a fun effect, doesn't really give a lot of meaning to the skill) */}
        <Skill title="React JS / Javascript" progress="95%"/>
        <Skill title="C/C++" progress="90%"/>
        <Skill title="Java" progress="85%"/>
        <Skill title="Motorcycles" progress="70%"/>

        {/* display download link to my resume */}
        <a className="resume-link" href={JResume} download>Download Resume</a>

      </div>
    </section>
  )
}

export default Resume