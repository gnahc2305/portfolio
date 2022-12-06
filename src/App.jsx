import { useState } from 'react';
import { Navbar, Profile, Projects, StackInfo, Contact, Footer } from './components/index';


function App() {
  const [language, setLanguage] = useState("english");
  const [mode, setMode] = useState('light');

  return (
    <div className={`${mode === 'light' ? 'bg-white' : 'bg-slate-800'} max-w-full`}>
      <Navbar setLanguage={setLanguage} setMode={setMode} mode={mode} />
      <Profile language={language} mode={mode} />
      <StackInfo language={language} mode={mode} />
      <Projects mode={mode} />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
