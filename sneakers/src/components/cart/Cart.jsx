import "./cart.scss";
import effacer from "../../../public/images/effacer.svg";
import { Button } from "../btnComponent/Button";

const Cart = ({ isCartActive, cart, deletePermentally }) => {
  const totalPrice = cart.reduce(
    (prevVal, currentVal) => prevVal + currentVal.qty * currentVal.price,
    0
  );

  return (
    <div
      className={isCartActive ? "cart-container isActive" : "cart-container"}
    >
      <header>
        <h2 className="cart-title">Cart</h2>
        <hr className="cart-hr" />
      </header>
      <section>
        <div
          className={
            cart.length === 0 ? "cart-message isVisible" : "cart-message"
          }
        >
          <p>Your Cart is empty.</p>
        </div>
        {cart.map((prod) => (
          <div className="added-product" key={prod.id}>
            <div className="cart-image">
              <img src={prod.image} alt="" />
            </div>
            <div className="cart-descript">
              <p>{prod.title}</p>
              <p>
                ${prod.price - (prod.price * 50) / 100}
                <span className="article-of-number"> x {prod.qty}</span>
                <span className="cart-prices">
                  {" "}
                  ${totalPrice - (totalPrice * 50) / 100}.00
                </span>
              </p>
            </div>
            <div
              className="cart-delete"
              onClick={() => {
                deletePermentally(prod);
              }}
            >
              <img src={effacer} alt="delete-cart" />
            </div>
          </div>
        ))}
        {cart.length === 1 && (
          <Button type="button" className="checkout-btn" text="Checkout" />
        )}
      </section>
    </div>
  );
};

export default Cart;
