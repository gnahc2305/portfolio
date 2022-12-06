import React from "react";
import { motion } from "framer-motion";
import { TypingText } from "./CustomTexts";
import { staggerContainer } from "../utils/motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../constants";

function Projects() {
  return (
    <section className="mt-[120px]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <TypingText title="Projects" textStyles="text-center text-[40px]" />

        {projects.map((project) => (
          <div key={project.title} className=''>
            <ProjectCard key={project.title} project={project} />
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
