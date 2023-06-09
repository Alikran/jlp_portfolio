import React, { useState } from 'react'
import './Header.scss';
import {easeInOut, motion} from 'framer-motion';
import {images} from '../../constants';
import {AppWrap} from '../../wrapper';

const scaleVariants = {
  whileInView:{
    scale:[0,1],
    opacity:[0,1],
    transition:{
      duration:2,
      ease: easeInOut
    }
  }
};

const Header = () => {
  const [rotate, setRotate] = useState(false);
  
  function handleClick() {
    setRotate(true);
    setTimeout(() => {
      setRotate(false);
    }, 1000); // Set the timeout to match the duration of the animation
  }

  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{x:[-100,0], opacity: [0,1]}}
        transition = {{duration: 2}}
        className = 'app_header-info'
      >

        <div className='app__header-badge'>
          <div className='badge-cmp  app__flex'>
            <span>
              <img src = {images.handwave} alt = 'wave_gif'></img>
            </span>
            <div style = {{marginLeft: 20}}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Jorge Perez</h1>
            </div>
          </div>
          <div className= 'tag-cmp app__flex'>
            <p className='p-text'> Software Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
         whileInView={{opacity: [0,1]}}
         transition = {{duration: 3, delayChildren: 4}}
         className = 'app__header-img'
      >
        <img src={images.profile} alt = 'profile_bg'
        className={`rotate-on-click${rotate ? ' rotating' : ''}`}
        onClick={handleClick}
        />
        <motion.img
          whileInView={{scale: [0,1]}}
          transition = {{duration: 2, ease: 'easeInOut'}}
          src={images.circle}
          alt='profile_circle'
          className = 'overlay_circle'
        />
      </motion.div>

      <motion.div
        variant = {scaleVariants}
        whileInView = {scaleVariants.whileInView}
        className = 'app__header-circles'
        >
          {[images.java, images.react,images.javascript,images.sql].map((circle,index) => (
              <div className= 'circle-cmp app__flex' key = {'circle-${index}'}>
                <img src = {circle} alt = 'profile_bg'
                className={`rotate-on-click${rotate ? ' rotating' : ''}`}
                onClick={handleClick}
                />
              </div>
          ))}
      </motion.div>
    </div>
  )
};

export default AppWrap(Header,'home');