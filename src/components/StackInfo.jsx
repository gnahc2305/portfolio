import { motion } from "framer-motion";
import React from "react";
import { skills, toolTipStyles } from "../constants";
import { staggerContainer, textVariant, fadeIn } from "../utils/motion";

function StackInfo({language}) {
  return (
    <section>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.h1
          variants={textVariant(1.4)}
          className="text-center mt-[120px] text-[40px]"
        >
          {language === 'english' ? 'My Skills' : 'Mis Habilidades'}
        </motion.h1>

        <div className="flex justify-center mt-[50px] gap-5 flex-wrap px-5">
          {skills.map((skill, index) => (
            <div key={skill.name}>
              <motion.div
                variants={fadeIn("left", "spring", index * 0.4, 0.75)}
                className={toolTipStyles}
                data-tip={skill.name}
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="h-[100px] w-[100px]"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default StackInfo;
