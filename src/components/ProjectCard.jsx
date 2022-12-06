import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, textVariant, slideIn } from "../utils/motion";

function ProjectCard({
  project: { title, gif, description, stack, code, live, direction },
}) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`mt-[150px] flex flex-col items-center md:items-start md:flex-row justify-center ${direction}`}
    >
      <motion.div variants={slideIn(direction === '' ? 'left' : 'right', "tween", 0.2, 1)}>
        <img
          src={gif}
          alt={title}
          className="h-[250px] w-[350px] md:h-[300px] md:w-[450px] lg:h-[500] lg:w-[600px]"
        />
      </motion.div>

      <div className="w-[400px] max-w-[400px] px-10 pt-6 md:pt-0 md:px-5">
        <h1 className="text-[30px]">{title}</h1>
        <p className="pt-[20px] text-[20px]">{description}</p>
        <p className="pt-[20px] text-[18px]">
          {stack.map((item) => (
            <span className="mx-1 p-1 border-2 border-stone-900 rounded-md">
              {item}
            </span>
          ))}
        </p>

        <div className="mt-[50px]">
          <a href={code} className="px-2 text-[20px]">
            <button className="text-white bg-blue-700 p-3 rounded-2xl hover:bg-blue-900">
              Repository
            </button>
          </a>
          <a href={live} className="px-5 text-[20px]">
            <button className="text-white bg-blue-700 p-3 rounded-2xl hover:bg-blue-900">
              Live
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
