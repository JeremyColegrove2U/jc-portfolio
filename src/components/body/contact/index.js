import React, {useState} from 'react'

function Contact() {
  const [name, setName] = useState("")
  const [nameValid, setNameValid] = useState(true)

  const [email, setEmail] = useState("")
  const [emailValid, setEmailValid] = useState(true)

  const [message, setMessage] = useState("")
  const [messageValid, setMessageValid] = useState(true)



  function validate(text, validator, setValidator) {
    if (text !== "" && !validator) setValidator(true)
    else if (text === "" && validator) setValidator(false) 
  }


  return (
    <section>
      <h1>
        Contact Me!
      </h1>
      <div className="content contact-container">

        {/* display contact form */}
        <form className="contact-form">
          {/* display name field */}
          <label className="contact-label"  htmlFor="name" >Name</label>
          <input onBlur={()=>validate(name, nameValid, setNameValid)} className="contact-input" onChange={(e)=>setName(e.target.value)} placeholder='Name' id="name" type="text" required/>

          {/* display email field */}
          <label className="contact-label" htmlFor="email">Email</label>
          <input onBlur={()=>validate(email, emailValid, setEmailValid)} className="contact-input" onChange={(e)=>setEmail(e.target.value)} placeholder='Email' id="email" type="email" required/>

          {/* display message field */}
          <label className="contact-label" htmlFor="message">Message</label>
          <textarea onBlur={()=>validate(message, messageValid, setMessageValid)} className="contact-input" onChange={(e)=>setMessage(e.target.value)} placeholder='Message' id="message" required/>
          
          {/* Displays error messages if fields are blank */}
          
          {!nameValid && <p className="contact-notification">*Name is required</p>}
          {!emailValid && <p className="contact-notification">*Email is required</p>}
          {!messageValid && <p className="contact-notification">*Message is required</p>}

          {/* display submit button (currently just reloads page) */}
          <input className="contact-submit" type="submit" text="Submit"/>
        </form>
      </div>
    </section>
  )
}

export default Contact