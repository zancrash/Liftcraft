import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ProgramPicker from './components/ProgramPicker'
import Explore from './components/Explore'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/program-picker" exact element={<ProgramPicker/>} />
        <Route path="/explore" exact element={<Explore/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
