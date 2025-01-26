import  './home.css'
import { motion } from "motion/react"
import Speech from './Speech';
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Shape1 from './Shape1';
import Shape2 from './Shape2';


const awardVariants ={
  initial:{
    x:-100,
    opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
     duration:2,
      staggerChildren:0.2
    }
  },
}

const followVariants ={
  initial:{
    y:-100,
    opacity:0
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
     duration:2,
      staggerChildren:0.2
    }
  },
}
const Home = () => {
  return (
    <div className='hero'>
      <div className="hSection left">
        {/* TITLE */}
        <motion.h1
         initial={{ y: -100, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ duration: 1 }}
         className="hTitle">
          Transforming Ideas <br/> <span> into Interactive Designs</span>
        </motion.h1>
        {/* AWARDS */}
        <motion.div className="awards" variants={awardVariants} initial='initial' animate='animate'>
          <motion.h2 variants={awardVariants} >Front-end Developer Sedanur Babir</motion.h2>
          <motion.p variants={awardVariants} >Focused on delivering pixel-perfect designs and optimized performance.</motion.p>
        <motion.div variants={awardVariants}  className='awardList'>
            <motion.img variants={awardVariants}  src='/award1.png' alt=''/>
            <motion.img variants={awardVariants} src='/award2.png' alt=''/>
            <motion.img variants={awardVariants} src='/award3.png' alt=''/>
        </motion.div>
        </motion.div>
        {/* SCROLL SVG */}
        <motion.a
          animate={{y:[0,5], opacity:[0,1,0]}}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: 'easeInOut'
          }}
          href="#services"
          className='scroll'
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <motion.path
              animate={{ y: [0, 5] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </motion.a>
      </div>
      <div className="hSection right">
        {/* FOLLOW */}
        <motion.div variants={followVariants} initial='initial' animate='animate' className="follow">
          <motion.a variants={followVariants}  href='https://github.com/SedanurBabir' >
          <img src='/github.png' alt=''/>
          </motion.a>
          <motion.a variants={followVariants} href='https://www.linkedin.com/in/seda-babir/' >
          <img src='/linkedln.png' alt=''/>
          </motion.a>
          <motion.a  variants={followVariants} href='/' >
          <img src='/instagram.png' alt=''/>
          </motion.a>
          <motion.div variants={followVariants} className="follow_text_container">
            <div className="follow_text">FOLLOW ME</div>
          </motion.div>
        </motion.div>
          <div className="bg2">
        {/* Small 3d shape */}
        <Canvas>
          <Suspense fallback="loading...">
            <Shape2 />
          </Suspense>
        </Canvas>
        </div>
        {/* BUBBLE */}
        <Speech/>
         {/* CONTACT BUTTON*/}
         <motion.a href='/#contact' className='contactLink'  animate={{x:[200,0],opacity:[0,1]}} transition={{duration:2}}>
         <motion.div className="contactButton" animate={{rotate:[0,360]}} transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
         }}>
          <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Hire Now •</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%">
                  Contact Me •
                </textPath>
              </text>
            </svg>
             <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
         </motion.div>
         </motion.a>
      </div>
       <div className="bg1">
        {/* Big 3d shape */}
        <Canvas>
          <Suspense fallback="loading...">
            <Shape1 />
          </Suspense>
        </Canvas>
        </div>
       

    </div>
  )
}

export default Home;