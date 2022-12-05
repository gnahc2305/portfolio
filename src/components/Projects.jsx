import React from "react";
import { motion } from "framer-motion";
import { TypingText } from "./CustomTexts";
import { staggerContainer } from "../utils/motion";

function Projects() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <TypingText title="| Projects |" textStyles="text-center" />
    </motion.div>
  );
}

export default Projects;
