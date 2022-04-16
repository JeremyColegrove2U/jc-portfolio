import React from 'react';
import Navigation from './navigation';

// main header component which renders my name (desktop only) and the navigation links
function Header(props) {
  // deconstruct props
  const {pages, setSelected, selected} = props

  return (
    <header>
        {/* my name in upper left of the header bar */}
        <h1 className="desktop-only">
            Jeremy Colegrove
        </h1>

        {/* links to different pages */}
        <Navigation pages={pages} setSelected={setSelected} selected={selected}/>
    </header>
  )
}

export default Header;