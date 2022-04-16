import React from 'react'
import JResume from '../../../assets/files/JeremyColegroveResume.pdf'
import Skill from './skill'
function Resume() {
  return (
    <section>
      <div className="content">
        <h1 className="text-lg block ">Skills</h1>
        <Skill title="React JS / Javascript" progress="95%"/>
        <Skill title="C/C++" progress="90%"/>
        <Skill title="Java" progress="85%"/>
        <Skill title="Motorcycles" progress="70%"/>
        <a className="resume-link" href={JResume} download>Download Resume</a>

      </div>
    </section>
  )
}

export default Resume