import useFetch from '../../hooks/useFetch'

const Imageproduct = () => {
  const { error, status, datas } = useFetch('../../../public/data/data.json');

  if (status === 'pending') return <h2>Loading...</h2>;
  if (status === 'rejected') throw error;

  return (
    <>
      {status === 'resolved' && (
        <section className='product-image'>
          <div className='primary-image'>BIG IMG</div>
          <div className='product-images-container'>
            {datas.map(item => {
              const { images } = item;
              return (
                images.map(picture => (
                  <div className=''  key={picture.id}>
                    <img className='' src={picture.image} alt={picture.name} title={picture.name}/>
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
