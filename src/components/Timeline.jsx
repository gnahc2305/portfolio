import React from "react";
import timeline from "../constants/timeline";
import TimelineItem from "./TimelineItem";
import { TypingText } from "./CustomTexts";
import { staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";

function Timeline({ mode, language }) {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20">
      <div className="w-full md:w-7/12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <TypingText
            title={language === "english" ? "Timeline" : "Línea de Tiempo"}
            textStyles={`text-center text-[40px] mb-20 ${
              mode === "light" ? "text-black" : "text-white"
            }`}
          />
        </motion.div>

        {timeline.map((item) => (
          <TimelineItem
            key={item.title}
            duration={item.duration}
            duracion={item.duracion}
            title={item.title}
            titulo={item.titulo}
            details={item.details}
            detalles={item.detalles}
            mode={mode}
            language={language}
          />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
