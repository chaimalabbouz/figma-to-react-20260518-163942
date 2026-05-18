import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Frontpage from './pages/Frontpage'
import Work from './pages/Work'
import WorkSingle from './pages/WorkSingle'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/frontpage" element={<Frontpage />} />
        <Route path="/work" element={<Work />} />
        <Route path="/worksingle" element={<WorkSingle />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
