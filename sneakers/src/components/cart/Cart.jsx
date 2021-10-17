import './cart.scss'
import effacer from '../../../public/images/effacer.svg'
import Button from '../btnComponent/Button';


const Cart = () => {
  return (
    <div className='cart-container'>
      <header>
        <h2 className='cart-title'>Cart</h2>
        <hr className='cart-hr' />
      </header>
      <section>
        <div className='cart-message'><p>Your Cart is empty.</p></div>
        <div className='added-product'>
          <div className='cart-image'>
            <img src="" alt="" />
          </div>
          <div className='cart-descript'>
            <p>Fall limited edition</p>
            <p>$125.00 <span className='article-of-number'> x 3</span> <span className='cart-prices'>$375.00</span> </p>
          </div>
          <div className='cart-delete'>
            <img src={effacer} alt="delete-cart" />
          </div>
        </div>
        <Button type='button' className='checkout-btn' text='Checkout' />
      </section>
    </div>
  )
}

export default Cart