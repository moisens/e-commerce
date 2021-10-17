import { useState } from 'react'
import './App.scss'
import Nav from './components/nav/Nav'
import Product from './components/product/Product'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



function App() {

  const [isCartActive, setIsCartActive] = useState(false);

  const activeCart = () => {
    setIsCartActive(!isCartActive);
  }


  return (
    <Router>
      <Nav activeCart={activeCart} isCartActive={isCartActive} />
      <Route>
        <Product />
      </Route>
    </Router>
  )
}

export default App
