import { useState } from 'react';
import { Navbar, Profile, Projects, StackInfo, Contact } from './components/index';


function App() {
  return (
    <div className=''>
      <Navbar />
      <Profile />
      <StackInfo />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
