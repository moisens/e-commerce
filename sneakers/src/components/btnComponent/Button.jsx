export const Button = ({ className='', type, text, ...otherProps }) => {
  return (
    <button
      className={className}
      type={type}
      {...otherProps}
    >
      {text}
    </button>
  )
}


export const BtnImg = ({ className='', type, img, src, alt, text, ...otherProps }) => {
  return (
    <button
      className={className}
      type={type}
      
    >
      <img src={src} alt={alt} />
      {text}
    </button>
  )

}
