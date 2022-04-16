import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import React, {useState, useEffect} from 'react'
import AboutMe from './components/body/about';
import Portfolio from './components/body/portfolio';
import Contact from './components/body/contact';
import Resume from './components/body/resume';

// list of each of my pages for ease of use/access
const pages = [
  {
    name:'About Me',
    component:AboutMe,
  },
  {
    name:'Portfolio',
    component:Portfolio,
  },
  {
    name:'Contact',
    component:Contact,
  },
  {
    name:'Resume',
    component:Resume
  }
]



function App() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="App">
      {/* passes getters and setters for page selection */}
      <Header pages={pages} setSelected={setSelected} selected={selected} />

      {/* conditionally rendering each page depending on selection */}
      {pages.map((page, index)=>{
        if (index !== selected) return null
        return <page.component key={index}/>
      })}

      {/* render the footer with icon links */}
      <Footer/>
    </div>
  );
}

export default App;
