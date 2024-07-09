import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div className="h-screen w-full" style={{ backgroundColor: `${color}` }}>
      <div className="fixed bottom-12 flex flex-wrap items-center justify-center w-full  py-4">
        <div className="border border-black rounded-xl p-2 flex flex-row justify-center items-center gap-4 bg-white">
          <button
            onClick={() => setColor("violet")}
            style={{ backgroundColor: `violet` }}
            className="border border-black p-2 rounded-lg text-white"
          >
            VIOLET
          </button>
          <button
            onClick={() => setColor("indigo")}
            style={{ backgroundColor: `indigo` }}
            className="border border-black p-2 rounded-lg text-white"
          >
            INDIGO
          </button>
          <button
            onClick={() => setColor("blue")}
            style={{ backgroundColor: `blue` }}
            className="border border-black p-2 rounded-lg text-white"
          >
            BLUE
          </button>
          <button
            onClick={() => setColor("green")}
            style={{ backgroundColor: `green` }}
            className="border border-black p-2 rounded-lg text-white"
          >
            GREEN
          </button>
          <button
            onClick={() => setColor("yellow")}
            style={{ backgroundColor: `yellow` }}
            className="border border-black p-2 rounded-lg text-black"
          >
            YELLOW
          </button>
          <button
            onClick={() => setColor("orange")}
            style={{ backgroundColor: `orange` }}
            className="border border-black p-2 rounded-lg text-white"
          >
            ORANGE
          </button>
          <button
            onClick={() => setColor("red")}
            style={{ backgroundColor: `red` }}
            className="border border-black p-2 rounded-lg text-white"
          >
            RED
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
