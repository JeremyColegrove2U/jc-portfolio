import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import React, {useState, useEffect} from 'react'
import AboutMe from './components/body/about';
import Portfolio from './components/body/portfolio';
import Contact from './components/body/contact';
import Resume from './components/body/resume';


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
      <Header pages={pages} setSelected={setSelected} selected={selected}>

      </Header>
      {pages.map((page, index)=>{
        if (index !== selected) return null

        return <page.component key={index}/>
      })}
      <Footer>

      </Footer>
    </div>
  );
}

export default App;
