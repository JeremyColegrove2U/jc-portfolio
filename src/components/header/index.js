import React from 'react';
import Navigation from './navigation';

function Header(props) {
  // deconstruct props
  const {pages, setSelected, selected} = props

  return (
    <header>
        <h1 className="desktop-only">
            Jeremy Colegrove
        </h1>

        {/* links to different pages */}
        <Navigation pages={pages} setSelected={setSelected} selected={selected}/>
    </header>
  )
}

export default Header;