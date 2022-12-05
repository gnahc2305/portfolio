import { motion } from "framer-motion";
import React from "react";
import { staggerContainer } from "../utils/motion";
import { skills } from "../constants";

function StackInfo() {
  return (
    <section>
      <motion.div variants={staggerContainer}>
        <h1 className="text-center mt-[120px] text-[40px]">My Skills</h1>

        <div className="flex justify-center mt-[50px] gap-5 flex-wrap px-5">
          {skills.map((skill) => (
            <>
              <div
                className="relative before:z-10 before:absolute before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:rounded-lg before:bg-gray-700 before:px-2 before:py-1.5 before:text-white before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:invisible hover:before:visible hover:after:visible"
                data-tip={skill.name}
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  key={skill.name}
                  className="h-[100px] w-[100px]"
                />
              </div>
            </>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default StackInfo;
