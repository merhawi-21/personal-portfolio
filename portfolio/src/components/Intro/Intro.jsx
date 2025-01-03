import React from 'react'
import classes from './intro.module.css'
import bg from '../../assets/bg.png'
import {Link} from 'react-scroll'
const Intro = () => {
  return (
    <section id='intro' className={classes.intro}>
      <div className={classes.introContent}>
        <span className={classes.hello}
        >Hello,</span>
        <span className={classes.introText}>I'm <span className={classes.introName}>Merhawi</span><br />Full-stack Developer</span>
        <p className={classes.introParagraph}>
          A passionate and skilled full-stack developer <br /> with expertise in crafting dynamic web applications. <br /> Proficient in front-end and back-end technologies,<br /> adept at problem-solving, and dedicated to delivering <br />innovative solutions that enhance user experiences <br />and drive business success. </p>
        <Link to='contact' spy={true} offset={-50} smooth={true} duration={500}><button className={classes.btn}>Hire me</button></Link>


        
        
      </div>
        <img src={bg} alt="profile image" className={classes.bg}/>
    
    </section>
  )
}

export default Intro