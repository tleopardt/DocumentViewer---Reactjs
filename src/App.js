import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import MainAdmin from './Redux/component/MainAdmin'

const App = () => (
  <Routes>
    <Route path="/*" element={<MainAdmin />} />
  </Routes>
)

export default App
