import React from 'react';
import LinkedIn from '../../assets/images/linkedin.png'
import Github from '../../assets/images/github.png'
import Facebook from '../../assets/images/facebook.png'

// this is a footer component which contains links to various social media pages
function Footer() {
  return (
    <footer>
        <a href="https://www.linkedin.com/in/jcoleg/">
            <img src={LinkedIn} alt="Linked In" className="footer-url-image"/>
        </a>
        <a href="https://github.com/JeremyColegrove2U">
            <img src={Github} alt="Twitter" className="footer-url-image"/>
        </a>
        <a href="https://www.facebook.com/jeremy.colegrove">
            <img src={Facebook} alt="Linked In" className="footer-url-image"/>
        </a>
    </footer>
  )
}

export default Footer;