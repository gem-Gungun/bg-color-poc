import React from 'react'
import { useState } from 'react'

function App() {
  const [color,setColor]=useState("yellow");
  console.log("running.......")
  return (
    <div className='w-full h-screen duration-2000'
    style={{background: color}}> 
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-xl'>
        <button  onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "red"}}>Red</button>
          <button  onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "green"}}>Green</button>
          <button  onClick={() => setColor("cyan")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "cyan"}}>Cyan</button>
          <button  onClick={() => setColor("grey")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "grey"}}>grey</button>
          <button  onClick={() => setColor("pink")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "pink"}}>pink</button>
      </div>
    </div>
    
      
    </div>
  )
}

export default App
