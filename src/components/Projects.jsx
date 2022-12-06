import React from "react";
import { motion } from "framer-motion";
import { TypingText } from "./CustomTexts";
import { staggerContainer } from "../utils/motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../constants";

function Projects() {
  return (
    <section className="mt-[120px] mb-[500px]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <TypingText title="Projects" textStyles="text-center text-[40px]" />

        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}


      </motion.div>
    </section>
  );
}

export default Projects;
