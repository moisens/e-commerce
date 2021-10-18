import useFetch from "../../hooks/useFetch"
import plus from '../../../public/images/plus.svg'
import minus from '../../../public/images/minus.svg'
import iconcart from '../../../public/images/iconcart.svg'
import { useState } from "react"
import { Button, BtnImg } from '../btnComponent/Button'



const Description = ({ addTocart, removeProduct, prodNumber }) => {
  const { error, datas, status } = useFetch('../../../public/data/data.json');
  const [disabled, setDisabled] = useState(false);

  if (status === 'pending') return <h2>Loading...</h2>
  if (status === 'rejected') throw error;

  return (
    <>
      {status === 'resolved' && (
      <>
          {datas.map(product => {
            const { id, company, title, price, description } = product;
            return (
              <div key={id}>
                <div>
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
                  <Button />
                    <button className='fas' onClick={() => {addTocart(product, prodNumber)}}><img src={plus} alt="plus" /></button>
                    <p className='add'>{prodNumber}</p>
                    <button className='fas' disabled={prodNumber <= 0 ? true : disabled} onClick={() => {removeProduct(product, prodNumber)}}><img src={minus} alt="minus" className='fas'/></button>
                  </div>
                  <Button 
                    type='button' 
                    className='cart-btn'
                    text='Add To Cart' 
                    onClick={() => {addTocart(product)}} 

                  />
                  
                </div>
              </div>
            )
          })}
      </>)}
    </>
  )
}

export default Description
