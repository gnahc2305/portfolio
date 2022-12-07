import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, textVariant, slideIn } from "../utils/motion";
import { aboutEn, aboutEs } from "../constants";

function Profile({ language, mode }) {
  return (
    <section>
      <motion.div
        className="mt-[120px] md:justify-center flex flex-col md:flex-row items-center md:items-start"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
          <img src="/profile.png" alt="profile" className="h-[350px] w-[350px]" />
        </motion.div>

        <div className="max-w-[400px] xl:max-w-[600px] text-center md:text-start md:px-5">
          <motion.h1 variants={textVariant(1.1)} className={`text-[50px] ${mode === 'light' ? 'text-[#E40066]' : 'text-[#E40066]'}`}>
            Andres Chang
          </motion.h1>
          
          <motion.p variants={textVariant(1.5)} className={`px-1 md:px-0 text-[20px] ${mode === 'light' ? 'text-black' : 'text-white'}`}>
            {/* check for language and display it */}
            {language === 'english' ? aboutEn : aboutEs}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

export default Profile;
