import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Container } from './components/Container'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/todo" element={<Container />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

// HI this comment 
export default App
