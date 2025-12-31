import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function handleclick(){
    alert("button clicked")
  }
 
  return (
    <>
     <div>
      <h1 className='title'>wellcome to the react</h1>
      <h2>learing some this </h2>
      <button onClick={handleclick}>click</button>
     </div>
    </>
  )
}

export default App
