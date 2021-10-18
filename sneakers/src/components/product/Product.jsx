import './product.scss'
import plus from '../../../public/images/plus.svg'
import minus from '../../../public/images/minus.svg'
import iconcart from '../../../public/images/iconcart.svg'
import Imageproduct from './Imageproduct'
import Description from './Description'

const Product = ({ addTocart, removeProduct, prodNumber }) => {
  return (
    <header className='product-detail'>
      <Imageproduct />
      <section className='product-description'>
        <Description 
          addTocart={addTocart}
          removeProduct={removeProduct}
          prodNumber={prodNumber} 

        />
      </section>
    </header>
  )
}

export default Product