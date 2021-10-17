import './product.scss'
import plus from '../../../public/images/plus.svg'
import minus from '../../../public/images/minus.svg'
import iconcart from '../../../public/images/iconcart.svg'
import Imageproduct from './Imageproduct'
import Description from './Description'

const Product = () => {
  return (
    <header className='product-detail'>
      <Imageproduct />
      <section className='product-description'>
        <Description />
        
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
