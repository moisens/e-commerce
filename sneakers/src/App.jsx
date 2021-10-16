import { useState } from 'react'
import './App.scss'
import Nav from './components/nav/Nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



function App() {

  return (
    <Router>
      <Nav />
    </Router>
  )
}

export default App
