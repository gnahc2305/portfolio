import { motion } from 'framer-motion'
import React from 'react';
import { staggerContainer } from '../utils/motion';
import { skills } from '../constants';

function StackInfo() {
  return (
    <section>
        <motion.div variants={staggerContainer}>
            <h1 className='text-center mt-[120px] text-[40px]'>My Skills</h1>

            <div className='flex justify-center mt-[50px] gap-5 flex-wrap'>
                {skills.map((skill) => (
                    <img src={skill.img} alt={skill.name} className='h-[100px] w-[100px] hover:' />
                ))}
            </div>
        </motion.div>
    </section>
  )
}

export default StackInfo