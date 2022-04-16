import React from 'react';


//  component for navigation links which are passed down as props
// prop drilling is not ideal, in the future might want to use a store
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