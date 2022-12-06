import { useState } from 'react';
import { Navbar, Profile, Projects, StackInfo, Contact, Footer } from './components/index';


function App() {
  const [language, setLanguage] = useState("english");

  return (
    <div className=''>
      <Navbar setLanguage={setLanguage} />
      <Profile language={language} />
      <StackInfo />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
