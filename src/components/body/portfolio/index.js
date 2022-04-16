import React from 'react'
import Project from './project'

import P1Img from '../../../assets/images/project1.jpg'
import P2Img from '../../../assets/images/project2.jpg'
import P3Img from '../../../assets/images/project3.jpg'
import P4Img from '../../../assets/images/project4.jpg'
import P5Img from '../../../assets/images/project5.jpg'
import P6Img from '../../../assets/images/project6.png'

function Portfolio() {
  return (
    <section>
      
      <div className="content">
        <h1>
          My Portfolio
        </h1>
        <div className="project-container">
          <Project name="js-parse-xml" github="https://github.com/JeremyMColegrove/js-parse-xml" link="https://www.npmjs.com/package/js-parse-xml" image={P1Img} >
            A fast, well-formed XML parser for Node.JS
          </Project>
          <Project name="Mantis Password Protector" github="https://github.com/JeremyMColegrove/mantis-password-protector" link="https://github.com/JeremyMColegrove/mantis-password-protector" image={P2Img} >
            A windows application password protector with industrial strength encryption using React and Electron
          </Project>
          <Project name="Skunk Chess Bot" github="https://github.com/JeremyMColegrove/skunk_chess_bot" link="https://github.com/JeremyMColegrove/skunk_chess_bot" image={P3Img} >
            A UCI compatible chess bot ranked ~2200. Written in C++
          </Project>
          <Project name="PyParser" github="https://github.com/JeremyMColegrove/PyParser" link="https://github.com/JeremyMColegrove/PyParser" image={P4Img} >
            An equation/graphing parser in python with support for dynamic variables and logical operators and more
          </Project>
          <Project name="Sudoku Solver" github="https://github.com/JeremyMColegrove/SudokuSolver" link="https://github.com/JeremyMColegrove/SudokuSolver" image={P5Img} >
            A Java based multithreaded sudoku solver/creator with support for remote server starting and stopping
          </Project>
          <Project name="Aho Corasik" github="https://github.com/JeremyMColegrove/AhoCorasik" link="https://github.com/JeremyMColegrove/AhoCorasik" image={P6Img} >
            An demonstration of the aho corasik algorithm in Java
          </Project>

        
        </div>
      </div>
    </section>
  )
}

export default Portfolio