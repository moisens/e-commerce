import { useState } from "react";
import "./App.scss";
import Nav from "./components/nav/Nav";
import Product from "./components/product/Product";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [isCartActive, setIsCartActive] = useState(false);
  const [cart, setCart] = useState([]);
  const [prodNumber, setProdNumber] = useState(0);

  const activeCart = () => {
    setIsCartActive(!isCartActive);
  };

  //Add to cart functionality: Verify if an item is or
  //not in the cart before adding it. If exist only increase the quantity
  //If not add it on cart.
  const addTocart = (product, prodNumber) => {
    const exist = cart.find((el) => el.id === product.id);
    if (exist) {
      setCart(
        cart.map((el) =>
          el.id === product.id ? { ...exist, qty: exist.qty + 1 } : el
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }

    increaseProdNum(prodNumber);
  };

  //delete and decrease product from cart if the product exist
  const removeProduct = (product) => {
    const exist = cart.find((el) => el.id === product.id);
    if (exist.qty === 1) {
      setCart(cart.filter((el) => el.id !== product.id));
    } else {
      setCart(
        cart.map((el) =>
          el.id === product.id ? { ...exist, qty: exist.qty - 1 } : el
        )
      );
    }

    decreaseProductNum(prodNumber);
  };

  const deletePermentally = (product) => {
    setCart(cart.filter((el) => el.id !== product.id));
    setProdNumber(0);
  }


  const increaseProdNum = (prodNumber) => {
    setProdNumber((prodNumber) => prodNumber + 1);
  };

  const decreaseProductNum = (prodNumber) => {
    setProdNumber((prodNumber) => prodNumber - 1);
  };

  return (
    <Router>
      <Nav
        activeCart={activeCart}
        isCartActive={isCartActive}
        cart={cart}
        prodNumber={prodNumber}
        removeProduct={removeProduct}
        deletePermentally={deletePermentally}
      />
      <Route>
        <Product
          addTocart={addTocart}
          prodNumber={prodNumber}
          removeProduct={removeProduct}
        />
      </Route>
    </Router>
  );
}

export default App;
