import useFetch from "../../hooks/useFetch"

const Description = () => {
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
              <div key={id}>
                <h5>{company}</h5>
                <h2>{title}</h2>
                <p className='description-p'>{description}</p>
                <div className='product-prices'>
                  <p className='reduced-price'>$125.00</p>
                  <p className='reduction-percent'>50%</p>
                </div>
                <p className='original-price'>${price}</p>
              </div>
            )
          })}
      </>)}
    </>
  )
}

export default Description
