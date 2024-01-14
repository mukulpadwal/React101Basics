import { useState } from "react"


function App() {
  const [color, setColor] = useState('violet');

  // One of the approaches
  // const handleClick = (event) => {
  //   setColor(event.target.value)
  // }

  return (
    <>
      <div className={`h-screen w-full duration-1000`} style={{backgroundColor: color}}>
        <div className="fixed bottom-10 inset-x-0 flex flex-wrap justify-center items-center mx-4">
          <div className="bg-white px-3 py-2 rounded-3xl flex flex-wrap gap-4">
            <button 
              className="px-4 py-1 rounded-full text-white outline-none font-bold" 
              style={{backgroundColor: 'violet'}} 
              onClick={() => setColor('violet')}>
                VIOLET
            </button>
            <button 
              className="px-4 py-1 rounded-full text-white outline-none font-bold" 
              style={{backgroundColor: 'indigo'}} 
              onClick={() => setColor('indigo')}>
                INDIGO
            </button>
            <button 
              className="px-4 py-1 rounded-full text-white outline-none font-bold" 
              style={{backgroundColor: 'blue'}} 
              onClick={() => setColor('blue')}>
                BLUE
            </button>
            <button 
              className="px-4 py-1 rounded-full text-white outline-none font-bold" 
              style={{backgroundColor: 'green'}} 
              onClick={() => setColor('green')}>
                GREEN
            </button>
            <button 
              className="px-4 py-1 rounded-full text-white outline-none font-bold" 
              style={{backgroundColor: 'yellow'}} 
              onClick={() => setColor('yellow')}>
                YELLOW
            </button>
            <button 
              className="px-4 py-1 rounded-full text-white outline-none font-bold" 
              style={{backgroundColor: 'orange'}} 
              onClick={() => setColor('orange')}>
                ORANGE
            </button>
            <button 
              className="px-4 py-1 rounded-full text-white outline-none font-bold" 
              style={{backgroundColor: 'red'}} 
              onClick={() => setColor('red')}>
                RED
            </button>
            <button 
              className="px-4 py-1 rounded-full text-black outline-4 font-bold" 
              style={{backgroundColor: 'white'}} 
              onClick={() => setColor('white')}>
                WHITE
            </button>
            <button 
              className="px-4 py-1 rounded-full text-white outline-none font-bold" 
              style={{backgroundColor: 'black'}} 
              onClick={() => setColor('black')}>
                BLACK
            </button>
          </div>
        </div>
        {/* <div className="place-self-center bg-white w-fit absolute sm:bottom-10 border border-black rounded-xl p-2 flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded" value='violet' onClick={handleClick}>Violet</button>
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded" value='indigo' onClick={handleClick}>Indigo</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" value='blue' onClick={handleClick}>Blue</button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" value='green' onClick={handleClick}>Green</button>
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" value='yellow' onClick={handleClick}>Yellow</button>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" value='orange' onClick={handleClick}>Orange</button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" value='red' onClick={handleClick}>Red</button>
        </div> */}
      </div>
    </>
  )
}

export default App
