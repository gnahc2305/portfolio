import React from "react";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

function navbar() {
  function handleToggle() {}

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="h-14 w-[100%] flex justify-between items-center px-6"
    >
      <form>
        <label htmlFor="language">Language: </label>
        <select name="language" id="language" className="cursor-pointer">
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
        </select>
      </form>

      {/* <button className="rounded-xl h-[50%]">Mode</button> */}
      <input type="checkbox" onClick={handleToggle} className='h-[30px] w-[30px] rounded-3xl cursor-pointer' />
    </motion.nav>
  );
}

export default navbar;
