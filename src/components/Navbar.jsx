import React from 'react'

function navbar() {
  return (
    <nav className='h-14 w-[100%] flex justify-between items-center px-6'>

      <form>
        <label htmlFor="language">Language: </label>
        <select name="language" id="language" className=''>
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
        </select>
      </form>

      <button className='rounded-xl h-[50%]'>Mode</button>
    </nav>
  )
}

export default navbar