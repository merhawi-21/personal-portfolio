import React from 'react'
import classes from './skills.module.css'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import javascript from '../../assets/javascript.png'
import react from '../../assets/react.png'
import redux from '../../assets/redux.png'
import nodeJs from '../../assets/nodeJs.png'

const Skills = () => {

  
  return (
    <>
    <section id='skills' className={classes.container}>
      
          <span className={classes.skillTitle}>What I Can Do</span><br />
          <span className={classes.skillDescription}>Proficient in HTML, CSS, and JavaScript for creating responsive, user-friendly interfaces. Skilled in Node.js for backend development, React for dynamic UI building, and Redux for state management, ensuring seamless and efficient functionality across modern web applications.</span>
     
      <div className={classes.skillBars}>
        <div className={classes.skillBar}>
          <img src={html} alt="html logo" className={classes.skillBarImg}/>
          <div>
              <h2>Html</h2>
              <p>Proficient in HTML, creating structured, accessible, and semantic web pages while ensuring compatibility with modern web standards and practices.</p>
          </div>
        </div>
        <div className={classes.skillBar}>
          <img src={css} alt="css logo" className={classes.skillBarImg}/>
          <div>
              <h2>Css</h2>
              <p>Proficient in CSS for crafting responsive, visually appealing, and user-friendly interfaces, with a focus on clean, modern design.</p>
          </div>
        </div>
        <div className={classes.skillBar}>
          <img src={javascript} alt="javaScript logo" className={classes.skillBarImg}/>
          <div>
              <h2>JavaScript</h2>
              <p>Specializing in building responsive frontends with React and dynamic backends using Node.js and Express, ensuring seamless user experiences and efficient application performance.</p>
          </div>
        </div>
        <div className={classes.skillBar}>
          <img src={nodeJs} alt="Node.js logo" className={classes.skillBarImg}/>
          <div>
              <h2>Node.Js</h2>
              <p>Building robust backend APIs, integrating databases, and enhancing dynamic web applications. Skilled in crafting responsive, user-focused interfaces using modern frameworks and technologies.</p>
          </div>
        </div>
        <div className={classes.skillBar}>
          <img src={react} alt="React logo" className={classes.skillBarImg}/>
          <div>
              <h2>React</h2>
              <p>Building dynamic, user-friendly frontends. Experience with backend technologies like Node.js, and familiar with database management, API integration, and responsive web design.</p>
          </div>
        </div>
        <div className={classes.skillBar}>
          <img src={redux} alt="Redux logo" className={classes.skillBarImg}/>
          <div>
              <h2>Redux</h2>
              <p>Building dynamic, responsive web applications using React, Node.js, and Redux for efficient state management, ensuring seamless and scalable user experiences across both frontend and backend.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Skills