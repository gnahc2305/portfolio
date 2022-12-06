import { React } from "react";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import { sun, moon } from "../constants";

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

      <button
        type="button"
        onClick={handleMode}
        className={`h-[40px] w-[40px] rounded-xl p-1.5 cursor-pointer ${mode === 'light' ? 'bg-violet-500' : 'bg-yellow-400' }`} // fixed top-3.5 right-10
      >
        {mode === 'light' ? moon : sun}
      </button>
    </motion.div>
  );
}

export default navbar;
