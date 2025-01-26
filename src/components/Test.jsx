import {motion} from 'motion/react';

const shapeVariants = {
  initialRec:{
    x:-100,
    opacity:0
  },
  animateRec:{
    x:0,
    opacity:1,
    transition:{
      duration:2,
      ease:'easeInOut'
    }
  },
   initialCirc:{
    y:-100,
    opacity:0
  },
  animateCirc:{
    y:0,
    opacity:1,
    transition:{
      duration:3,
      ease:'easeInOut'
    }
  }
}

const listVariants={
  initial:{
    x:-100,
    y:-100,
    opacity:0
  },
  animate:{
    x:0,
    y:0,
    opacity:1,
    transition:{
      duration:3,
      staggerChildren:1,
    }
  },
   

}
const Test = () => {
  return (
    <section style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      {/* Rectangle Example */}
      <motion.div 
      variants={shapeVariants}
      initial="initialRec"
      animate="animateRec"
      style={{width:300, height:300,background:'red'}}
      
      >
      </motion.div>
      {/* Circle Example */}
      <motion.div 
      variants={shapeVariants}
      initial="initialCirc"
      animate="animateCirc"
      style={{width:300, height:300,background:'blue', borderRadius:'50%'}}
      
      >
      </motion.div>
      {/* Text Example */}
      <motion.ul variants={listVariants} initial='initial' animate='animate' >
        <motion.li variants={listVariants}>Javascript</motion.li>
        <motion.li variants={listVariants}>React</motion.li>
        <motion.li variants={listVariants}>Next.js</motion.li>
      </motion.ul>
    </section>
  )
}

export default Test;