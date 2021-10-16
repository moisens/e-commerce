import './product.scss'
import plus from '../../images/plus.svg'
import minus from '../../images/minus.svg'
import iconcart from '../../images/iconcart.svg'


const Product = () => {
  return (
    <header className='product-detail'>
      <section className='product-image'>
        <div className='primary-image'>BIG IMG</div>
        <div className='product-images-container'>
          <div className='active-img'>IMG1</div>
          <div>IMG2</div>
          <div>IMG3</div>
          <div>IMG4</div>
        </div>
      </section>
      <section className='product-description'>
        <h5>SNEAKERS COMPANY</h5>
        <h2>Fall Limited Edition Sneakers</h2>
        <p className='description-p'>
        These low-profile sneakers are your perfect casual wear companion. Featuring a 
        durable rubber outer sole, they’ll withstand everything the weather can offer.
        </p>
        <div className='product-prices'>
          <p className='reduced-price'>$125.00</p>
          <p className='reduction-percent'>50%</p>
        </div>
        <p className='original-price'>$250.00</p>
        <div className='increase-addto'>
          <div className='increase-nbr-prosuct'>
            <div className='fas'><img src={plus} alt="plus" /></div>
            <p className='add'>3</p>
            <div className='fas'><img src={minus} alt="minus" className='fas'/></div>
          </div>
          <div className='cart-btn'>
            <img src={iconcart} alt="icon-cart" />
            <p>Add to cart</p>
          </div>
        </div>
      </section>
    </header>
  )
}

export default Product
