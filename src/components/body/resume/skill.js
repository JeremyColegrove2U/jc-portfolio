import React from 'react'

function Skill(props) {
  return (
    <>
        <p className="skill-label">{props.title}</p>
        <div className="skill-outside">
            <div className="skill-inside" style={{width:props.progress, background: 'linear-gradient(to right, rgb(020, 020, 055), rgb(055, 055, 055))'}}>
                
            </div>
        </div>
    </>
  )
}

export default Skill