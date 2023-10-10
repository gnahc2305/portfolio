import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, slideIn } from "../utils/motion";

function ProjectCard({
  project: { title, gif, description, description_es, stack, code, live, direction },
  mode, language
}) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`mt-[150px] flex flex-col items-center md:items-start md:flex-row justify-center ${direction}`}
    >
      
      <motion.div
      // the animation changes depending of the flex direction, 
        variants={slideIn(direction === "" ? "left" : "right", "tween", 0.2, 1)}
      >
        <img
          src={gif}
          alt={title}
          className="h-[250px] w-[350px] md:h-[300px] md:w-[450px] lg:h-[500] lg:w-[600px]"
        />
      </motion.div>

      <motion.div
        variants={slideIn(direction === "" ? "left" : "right", "tween", 0.2, 1)}
        className={`w-[400px] max-w-[400px] px-10 pt-6 md:pt-0 md:px-5 ${mode === 'light' ? 'text-black' : 'text-white'}`}
      >
        <h1 className="text-[30px]">{title}</h1>
        <p className="pt-[20px] text-[20px]">{language === 'english' ? `${description}` : `${description_es}`}</p>
        <p className="pt-[20px] text-[18px]">
          {stack.map((item) => (
            <span
              key={item}
              className="mx-1 p-1 border-2 border-stone-900 rounded-md"
            >
              {item}
            </span>
          ))}
        </p>

        <div className="mt-[50px] flex">
          <a href={code} className="px-2 text-[20px]" target="_blank">
            <img src="/github.png" alt="repo" className="h-[40px] w-[40px] text-white" />
          </a>
          <a href={live} className="px-5 text-[20px]" target="_blank">
            <img src="/link.png" alt="repo" className="h-[40px] w-[40px]" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectCard;
