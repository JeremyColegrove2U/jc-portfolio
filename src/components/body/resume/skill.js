import React from 'react'

// component to render for each skill in the resume page
function Skill(props) {
  return (
    <>
    {/* the label */}
        <p className="skill-label">{props.title}</p>
        {/* the outside bar */}
        <div className="skill-outside">
          {/* the inner progress bar */}
            <div className="skill-inside" style={{width:props.progress, background: 'linear-gradient(to right, rgb(020, 020, 055), rgb(055, 055, 055))'}}>
                
            </div>
        </div>
    </>
  )
}

export default Skill