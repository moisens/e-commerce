import { useState } from 'react'
import './App.scss'
import Nav from './components/nav/Nav'
import Product from './components/product/Product'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



function App() {

  const [isCartActive, setIsCartActive] = useState(false);
  const [cart, setCart] = useState([]);
  const [prodNumber, setProdNumber] = useState(0)

  const activeCart = () => {
    setIsCartActive(!isCartActive);
  }

  //Add to cart functionality: Verify if an item is or 
  //not in the cart before adding it
  const addTocart = (product, prodNumber) => {
    const exist = cart.find(el => el.id === product.id);
    if (exist) {
      setCart(
        cart.map(el => (
          el.id === product.id ? { ...exist, qty: exist.qty + 1 } : el
        ))
      );
    } else {
      setCart([...cart, {...product, qty: 1} ]);
    }

    increaseProdNum(prodNumber)
  }

  const increaseProdNum = (prodNumber) => {
    setProdNumber(prodNumber => prodNumber + 1);
  }

  


  return (
    <Router>
      <Nav activeCart={activeCart} isCartActive={isCartActive} addTocart={addTocart} cart={cart} />
      <Route>
        <Product addTocart={addTocart} prodNumber={prodNumber} />
      </Route>
    </Router>
  )
}

export default App
