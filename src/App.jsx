import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mix from './Components/Mix'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Base from './Pages/Base'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Base />} />
        {/* <Route path="/get-plots" element={<Form />} /> */}
      </Routes>
    </Router>
  )
}

export default App
