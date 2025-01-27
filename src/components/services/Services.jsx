
import { useRef } from 'react';
import Counter from './Counter';
import ServiceModelContainer from './models/ServiceModelContainer';
import './services.css'
import {motion, useInView} from 'motion/react'
import { useState } from 'react';

const services = [
  {
    id: 1,
    img: "/service1.png",
    title: "Web Development",
    counter: 35,
  },
  {
    id: 2,
    img: "/service2.png",
    title: "Product Design",
    counter: 23,
  },
  {
    id: 3,
    img: "/service3.png",
    title: "Branding",
    counter: 46,
  },
];

const textVariants = {
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
      duration:1,
    }
  }
}

const listVariants = {
  initial:{
    x:-100,
    opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChilren:0.5
    }
  }
}

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, {margin:'-200px'})
  const [currentServiceId, setCurrentServiceId] = useState(1);
  console.log("currentServiceId:",currentServiceId)
  return (
    <div className='services' ref={ref}>
      <div className="sSection left">
        <motion.h1 variants={textVariants}  animate={isInView ? 'animate' : 'initial'} className='sTitle'> How do I help ? </motion.h1>
       <motion.div   variants={listVariants} animate={isInView ? 'animate' : 'initial'}  className="serviceList">
        {services.map((item)=> (
           <motion.div variants={listVariants} className="service" key={item.id} onClick={()=>setCurrentServiceId(item.id)}>
            <div className="serviceIcon">
              <img src={item.img} alt=''/>
            </div>
            <div className="serviceInfo">
               <h2 className='sTitle'>{item.title}</h2>
               <h3 className='sCounter'>{item.counter} Projects</h3>
            </div>
           </motion.div>
        ))}

       </motion.div>
       <div className="counterList">
        <Counter from={0} to={104} text='Projects Completed'/>
        <Counter from={0} to={72} text='Happy Clients'/>
       </div>
  
      </div>
      <div className="sSection right">
        {currentServiceId === 1 ? 
           <ServiceModelContainer/> 
        : null // ekleyeceğim yeni modellere göre (telefon vb.) bu alan güncellenecek !
        }
      </div>
    </div>
  )
}

export default Services;