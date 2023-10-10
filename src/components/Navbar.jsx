import { React } from "react";
import { sun, moon } from "../constants";

function navbar({ setLanguage, setMode, mode }) {
  function handleLanguage(e) {
    setLanguage(e.target.value);
    localStorage.setItem("language", e.target.value);
  }

  function handleMode(e) {
    mode === "light" ? setMode("dark") : setMode("light");
    localStorage.setItem("theme", mode === "light" ? "dark" : "light");
  }

  return (
    <div className="h-14 w-[100%] flex justify-between items-center px-6">
      <form>
        <select
          onChange={handleLanguage}
          name="language"
          id="language"
          className="cursor-pointer p-[10px] rounded-sm focus:outline-none"
        >
          <option value="0" className="hidden">
            Language:{" "}
          </option>
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
        </select>
      </form>

      <button
        type="button"
        onClick={handleMode}
        className={`h-[40px] w-[40px] rounded-xl p-1.5 cursor-pointer ${
          mode === "light" ? "bg-violet-500" : "bg-yellow-400"
        }`} // fixed top-3.5 right-10
      >
        {mode === "light" ? moon : sun}
      </button>
    </div>
  );
}

export default navbar;
