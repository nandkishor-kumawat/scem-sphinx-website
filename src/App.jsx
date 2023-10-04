import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom/dist'
import Events from './components/Events'
import AboutUs from './components/AboutUs'
import Schedule from './components/Schedule'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App