import { useState } from 'react';
import { Navbar, Profile, Projects, StackInfo, Contact, Footer } from './components/index';


function App() {
  return (
    <div className=''>
      <Navbar />
      <Profile />
      <StackInfo />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
