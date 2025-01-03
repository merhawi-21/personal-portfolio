import React, { useRef } from 'react'
import classes from './contact.module.css'
import github from '../../assets/github.png'
import linkedIn from '../../assets/linkedIn.png'
import emailjs from '@emailjs/browser'

const ContactMe = () => {

  const form = useRef()

  const sendEmail = (e)=> {
    e.preventDefault();


     // Get values from the form
     const { your_name, your_email, your_message } = form.current;

     // Validation for required fields
     if (!your_name.value || !your_email.value || !your_message.value) {
       alert('Please fill out all required fields: Name, Email, and Message.');
       return; // Stop form submission if any required field is empty
     }

     
    emailjs.sendForm('service_t9tunte','template_z9smy2i',form.current, 'vcYKYvAI5HYZiXQLn')
                    .then((result) => {
                        console.log("Message sent",result.text);
                        e.target.reset();
                        alert('Sent !')
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
  }

  

  return (
    <section id='contactPage' className={classes.contactPage}>
        {/* <div id='client' className={classes.clients}>
            <h1 className={classes.contactPageTitle}>My Clients</h1>
            <p className={classes.clientDesc}>Describe herabout clents</p>
            <div className={classes.clientImgs}>
              <img src="" alt="" className={classes.clientImg}/>
            </div>
        </div> */}

        <div id='contact' className={classes.contactPage}>
          <h1 className={classes.contactMeTitle}>Contact Me</h1>
          <span className={classes.contactDesc}>Please fill out the form below to discuss any work opportunities. </span>
          <form action="post" ref={form} className={classes.contactForm} onSubmit={sendEmail}>
            <input type="text" className={classes.name} placeholder='Your name' name='your_name'/>
            <input type="text" className={classes.email} placeholder='Your email' name='your_email' />
            <textarea type='text' name="your_message" rows='5' placeholder='Your message' className={classes.message}></textarea>
            <button type='submit' value='Send' className={classes.submitBtn}>Submit</button>
          </form>
          <div className={classes.links}>
                
                <a href="https://www.linkedin.com/in/merhawi-ainealem-667876344/" target='_blank'>
                <img src={linkedIn} alt="LinkedIn" className={classes.link} />
                </a>

                <a href="https://github.com/merhawi-21" target="_blank" >
                <img src={github} alt="GitHub" className={classes.link} />
                </a>
                
                
            </div>
        </div>
    </section>
  )
}

export default ContactMe