import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, textVariant, slideIn } from "../utils/motion";

function Profile() {
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
          <motion.h1 variants={textVariant(1.1)} className="text-[50px]">
            Andres Chang
          </motion.h1>

          <motion.p variants={textVariant(1.5)} className='px-1 md:px-0'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            omnis necessitatibus doloremque beatae totam vel vitae consequatur
            non at, provident autem nostrum itaque fugit.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

export default Profile;
