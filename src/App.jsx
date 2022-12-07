import { useEffect } from 'react';
import { useState } from 'react';
import { Navbar, Profile, Projects, StackInfo, Contact, Footer } from './components/index';


function App() {
  const [language, setLanguage] = useState("english");
  const [mode, setMode] = useState('light');

  useEffect(() => {
    // console.log(localStorage.getItem('mode'));
    setMode(localStorage.getItem('theme'))
    setLanguage(localStorage.getItem('language'));
  }, [mode])

  return (
    <div className={`${mode === 'light' ? 'bg-white' : 'bg-[#083C5D]'} max-w-full`}>
      <Navbar setLanguage={setLanguage} setMode={setMode} mode={mode} />
      <Profile language={language} mode={mode} />
      <StackInfo language={language} mode={mode} />
      <Projects mode={mode} language={language} />
      <Contact mode={mode} language={language} />
      <Footer mode={mode} />
    </div>
  )
}

export default App
