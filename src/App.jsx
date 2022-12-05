import { useState } from 'react';
import { Navbar, Profile, Projects, StackInfo } from './components/index';


function App() {
  return (
    <div className=''>
      <Navbar />
      <Profile />
      <StackInfo />
      {/* <Projects /> */}
    </div>
  )
}

export default App
