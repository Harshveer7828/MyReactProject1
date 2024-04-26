import { useState } from 'react'
import './App.css'

function App() {
  let [time, setTime] = useState(new Date().toLocaleTimeString());
  let [day, setDay] = useState(new Date().toDateString())

    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 100);

  return (
    <>
      <div className="container flex items-center justify-center">
        <div className="center bg-white-900 h-[13rem] w-[13rem] rounded-full border-2 border-zinc-700 flex-col flex items-center justify-center text-2xl shadow-lg shadow-cyan-500/50">
          <h1 className="text-white font-bold font-['montserrat']">{time}</h1>
          <h3 className="text-white">{day}</h3>
        </div>
      </div>
    </>
  )
}

export default App
