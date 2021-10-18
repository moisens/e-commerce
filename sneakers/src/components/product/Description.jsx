import useFetch from "../../hooks/useFetch"
import plus from '../../../public/images/plus.svg'
import minus from '../../../public/images/minus.svg'
import iconcart from '../../../public/images/iconcart.svg'
import Imageproduct from './Imageproduct'
import { useState } from "react"



const Description = ({ addTocart, prodNumber }) => {
  const { error, datas, status } = useFetch('../../../public/data/data.json');

  if (status === 'pending') return <h2>Loading...</h2>
  if (status === 'rejected') throw error;

  

  return (
    <>
      {status === 'resolved' && (
      <>
          {datas.map(product => {
            const { id, company, title, price, description } = product;
            return (
              <>
                <div key={id}>
                  <h5>{company}</h5>
                  <h2>{title}</h2>
                  <p className='description-p'>{description}</p>
                  <div className='product-prices'>
                    <p className='reduced-price'>${price - (price * 50 / 100)}.00</p>
                    <p className='reduction-percent'>50%</p>
                  </div>
                  <p className='original-price'>${price}.00</p>
                </div>
                <div className='increase-addto'>
                  <div className='increase-nbr-prosuct'>
                    <div className='fas' onClick={() => {addTocart(product, prodNumber)}}><img src={plus} alt="plus" /></div>
                    <p className='add'>{prodNumber}</p>
                    <div className='fas'><img src={minus} alt="minus" className='fas'/></div>
                  </div>
                  <div className='cart-btn' onClick={() => {addTocart(product)}}>
                    <img src={iconcart} alt="icon-cart" />
                    <p>Add to cart</p>
                  </div>
                </div>
              </>
            )
          })}
      </>)}
    </>
  )
}

export default Description
