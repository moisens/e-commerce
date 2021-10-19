import { useState } from 'react';
import useFetch from '../../hooks/useFetch'

const Imageproduct = () => {
  const { error, status, datas } = useFetch('../../../public/data/data.json');

  const [mainImage, setMainImage] = useState('/images/product1.jpg')


  if (status === 'pending') return <h2>Loading...</h2>;
  if (status === 'rejected') throw error;

  return (
    <>
      {status === 'resolved' && (
        <section className='product-image'>
          <div className='primary-image'>
            <img src={mainImage} alt="ddd" />
          </div>
          <div className='product-images-container'>
            {datas.map(item => {
              const { images } = item;
              return (
                images.map((picture,index) => (
                  <div className=''  key={picture.id}>
                  {/* {console.log(index, picture)} */}
                    <img 
                      className='' 
                      src={picture.image} 
                      alt={picture.name} 
                      title={picture.name}
                      onClick={() => setMainImage(picture.image)}

                    />
                  </div>
                ))
              )
            })}
          </div>
        </section>
      )}
    </>
  )
}

export default Imageproduct;
