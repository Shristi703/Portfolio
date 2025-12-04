import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Skills from './components/Skills'  
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App













