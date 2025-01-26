import { TypeAnimation } from 'react-type-animation';
import { motion } from "motion/react"
const Speech = () => {
  return (
    <motion.div className="bubble_container"
     animate={{opacity:[0,1]}}
     transition={{duration:1}}
    >
        <div className="bubble">
          <TypeAnimation
          sequence={[
            'Building Responsive Websites with Passion ✌🏻',
            1000,
            'Specialist in React & Angular Frameworks ✌🏻',
            1000,
            'Your Next Front-end Developer Partner ✌🏻' ,
            1000,
            'Let’s Build Something Amazing Together.. 👩🏻‍💻',
            1000
             ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
          />
        </div>
        <img src="/man.png" alt="" />
    </motion.div>
  )
}

export default Speech;