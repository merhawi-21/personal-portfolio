

import React from 'react';
import classes from './works.module.css';
import amazonImg from '../../assets/amazon.png';
import netflixImg from '../../assets/netflix.png';
import evangadiImg from '../../assets/evangadi.png';
import profileImg from '../../assets/profile.png';
import resumeFile from '../../assets/resume.pdf'; // import the resume file



const Works = () => {
  return (
    <section id='profile' className={classes.works}>
        <h2 className={classes.worksTitle}>My Profile</h2>
        <span className={classes.workDescription}>
          I specialize in creating dynamic web applications using React, Node.js, and Redux. I focus on building responsive, user-friendly interfaces and efficient backend solutions, ensuring scalable and seamless user experiences across both front and back ends.
        </span><br /><br />

        <div className={classes.Products}>

          <a href='https://amazon123-clone.netlify.app/' target='_blank'>
            <img src={amazonImg} alt="" className={classes.productsImg} /> 
          </a>

          <a href='https://merhawi-21.github.io/New-Netflix-Clone/' target='_blank'>
            <img src={netflixImg} alt="" className={classes.productsImg} />
          </a>

          <a href='https://evangadi-forum12.netlify.app/' target='_blank'>
            <img src={evangadiImg} alt="" className={classes.productsImg} /> 
          </a>

          <a href='https://merhawi-21.github.io/personal-portfolio/' target='_blank'>
            <img src={profileImg} alt="" className={classes.productsImg} /> 
          </a>
          
        </div>

        {/* Button for downloading the resume */}
        <a href={resumeFile} download>
          <button className={classes.productsBtn}>Download Resume</button>
        </a>
    </section>
  );
}

export default Works;
