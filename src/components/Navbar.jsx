import { React } from "react";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

function navbar({ setLanguage, setMode, mode }) {
  function handleLanguage(e) {
    setLanguage(e.target.value);
  }

  function handleMode(e) {
    mode === "light" ? setMode("dark") : setMode("light");
  }

  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="h-14 w-[100%] flex justify-between items-center px-6"
    >
      <form>
        <label
          htmlFor="language"
          className={mode === "light" ? "text-black" : "text-white"}
        >
          Language:{" "}
        </label>
        <select
          onChange={handleLanguage}
          name="language"
          id="language"
          className="cursor-pointer"
        >
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
        </select>
      </form>

      <input
        type="checkbox"
        onClick={handleMode}
        className="h-[30px] w-[30px] rounded-3xl cursor-pointer" // fixed top-3.5 right-10
      />
    </motion.div>
  );
}

export default navbar;
