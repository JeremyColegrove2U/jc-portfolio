import React from 'react'
import Profile from '../../../assets/images/profile.jpg'
function AboutMe() {
  return (
    <section>
      
      <img src={Profile} alt="Profile image" className="profile-img"/>
      <div className="content">
        <p>
          Hey there! I'm Jeremy. I'm currently pursuing a degree in Computer Science from the University of Minnesota. I previously obtained my AA degree in Businesses Administration from Rasmussen College. I started coding when I was about 10 years old, since then I have released over ten mobile apps, launched a task management company with my colleagues, and developed a passion for algorithms and data structures. My favorite language is C/C++, I like to ride motorcycles, and I own some Dogecoin!
        </p>
      </div>
    </section>
  )
}

export default AboutMe