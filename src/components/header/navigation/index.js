import React from 'react';



function Navigation(props) {
  const {pages, selected, setSelected} = props
  return (
    <div>
      <ul>
        {pages.map((page, index)=>{
          return <span onClick={()=>setSelected(index)} key={index} className={`${selected===index?'selected':'links'}`}>
              {page.name}
          </span>
        })}
      </ul>
    </div>
  )
}

export default Navigation;