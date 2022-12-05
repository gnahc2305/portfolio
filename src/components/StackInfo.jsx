import { motion } from "framer-motion";
import React from "react";
import { skills, toolTipStyles } from "../constants";
import { staggerContainer, textVariant, fadeIn } from "../utils/motion";

function StackInfo() {
  return (
    <section>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.h1
          variants={textVariant(1.5)}
          className="text-center mt-[120px] text-[40px]"
        >
          My Skills
        </motion.h1>

        <div className="flex justify-center mt-[50px] gap-5 flex-wrap px-5">
          {skills.map((skill, index) => (
          <>
            <motion.div
              variants={fadeIn("left", "spring", 1, index * 0.95)}
              className={toolTipStyles}
              data-tip={skill.name}
            >
              <img
                src={skill.img}
                alt={skill.name}
                key={skill.name}
                className="h-[100px] w-[100px]"
              />
            </motion.div>
          </>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default StackInfo;
