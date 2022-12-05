import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../utils/motion";

function Profile() {
  return (
    <section>
      <div className="mt-10 md:justify-center flex flex-col md:flex-row items-center md:items-start">
        <div>
          <img src="/profile.png" alt="profile" />
        </div>

        <div className="max-w-[400px] xl:max-w-[600px] text-center md:text-start md:px-5">
          <motion.h1 animate={textVariant(1.1)} className="text-[50px]">
            {/* <h1 className="text-[50px]">Andres Chang</h1> */}
            Andres Chang
          </motion.h1>
        
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            omnis necessitatibus doloremque beatae totam vel vitae consequatur
            non at, provident autem nostrum itaque fugit.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
