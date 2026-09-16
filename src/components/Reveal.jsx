import React from 'react';
import { motion } from 'framer-motion';
export default function Reveal({children,className='',delay=0,once=true}){return <motion.div className={className} initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{once,amount:.12}} transition={{duration:.65,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>}
