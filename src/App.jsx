import { useEffect } from "react";
import { useState } from "react";
import {
  Navbar,
  Profile,
  Projects,
  StackInfo,
  Contact,
  Footer,
  Timeline,
} from "./components/index";

function App() {
  const [language, setLanguage] = useState(null);
  const [mode, setMode] = useState(null);

  useEffect(() => {
    // if there is no local storage, set it to english and lightmode
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light");
    } else {
      setMode(localStorage.getItem("theme"));
    }

    if (localStorage.getItem("language") === null) {
      localStorage.setItem("language", "english");
    } else {
      setLanguage(localStorage.getItem("language"));
    }
  }, [mode]);

  return (
    <div
      className={`${mode === "light" ? "bg-white" : "bg-[#272c2e]"} max-w-full`}
    >
      <Navbar setLanguage={setLanguage} setMode={setMode} mode={mode} />
      <Profile language={language} mode={mode} />
      <StackInfo language={language} mode={mode} />
      <Projects mode={mode} language={language} />
      <Timeline mode={mode} language={language} />
      <Contact mode={mode} language={language} />
      <Footer mode={mode} />
    </div>
  );
}

export default App;
