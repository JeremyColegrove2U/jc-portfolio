import React from 'react'
import Project from './project'

import NPM from '../../../assets/images/npm.jpg'

function Portfolio() {
  return (
    <section>
      <div className="content">
      <Project name="js-parse-xml" github="https://github.com/JeremyMColegrove/js-parse-xml" link="https://www.npmjs.com/package/js-parse-xml" image={NPM} ></Project>
      </div>
    </section>
  )
}

export default Portfolio