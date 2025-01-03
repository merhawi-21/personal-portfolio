import React, {useState} from 'react'
import {Link} from 'react-scroll'
import classes from './navbar.module.css'
import logo from '../../assets/logo.png'
import contactImage from '../../assets/images123.png'
import menu from '../../assets/menu.png'

const NavBar = () => {

  const [showMenu,setShowMenu] = useState(false)
  return (
    <nav className={classes.navbar}>
      <Link to='intro' spy={true} offset={-50} smooth={true} duration={500}><img src={logo} alt="logo" className={classes.logo}/></Link>
      
      <div className={classes.desktopmenu}>
        <Link activeClass={classes.active} to='intro' spy={true} offset={-50} smooth={true} duration={500} className={classes.menuListItem} >Home</Link>
        <Link activeClass={classes.active} to='skills' spy={true} offset={-50} smooth={true} duration={500} className={classes.menuListItem} >About</Link>
        <Link activeClass={classes.active} to='profile' spy={true} offset={-50} smooth={true} duration={500} className={classes.menuListItem} >Portfolio</Link>
        {/* <Link activeClass={classes.active} to='intro' spy={true} offset={-100} smooth={true} duration={500} className={classes.menuListItem} >Clients</Link> */}
         
      </div>
      <button className={classes.menubtn} onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
      }}>
          <img src={contactImage} alt="contact icon" className={classes.menuIcon} />Contact Me
      </button>
      
      <img src={menu} alt="Menu" className={classes.mobMenu} onClick={()=>{setShowMenu(!showMenu)}}/>

      <div className={classes.navMenu} style={{display: showMenu? 'flex':'none'}}>
        <Link activeClass={classes.active} to='intro' spy={true} offset={-50} smooth={true} duration={500} className={classes.listItem} onClick={()=>{
          setShowMenu(false)
        }}>Home</Link>
        <Link activeClass={classes.active} to='skills' spy={true} offset={-50} smooth={true} duration={500} className={classes.listItem} onClick={()=>{
          setShowMenu(false)
        }}>About</Link>
        <Link activeClass={classes.active} to='profile' spy={true} offset={-50} smooth={true} duration={500} className={classes.listItem} onClick={()=>{
          setShowMenu(false)
        }}>Portfolio</Link>
        {/* <Link activeClass={classes.active} to='intro' spy={true} offset={-100} smooth={true} duration={500} className={classes.listItem} >Clients</Link> */}
        <Link activeClass={classes.active} to='contact' spy={true} offset={-50} smooth={true} duration={500} className={classes.listItem}  onClick={()=>{
          setShowMenu(false)
        }}>Contact</Link>
         
      </div>
    </nav>
  )
}

export default NavBar