import { useState } from 'react'
import './App.scss'
import Nav from './components/nav/Nav'
import Product from './components/product/Product'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



function App() {

  return (
    <Router>
      <Nav />
      <Route exact path='/product/:id'>
        <Product />
      </Route>
    </Router>
  )
}

export default App
