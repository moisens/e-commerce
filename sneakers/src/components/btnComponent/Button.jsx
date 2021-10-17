const Button = ({ className='', type, text, ...otherProps }) => {
  return (
    <button
      className={className}
      type={type}
      otherProps={otherProps}
    >
      {text}
    </button>
  )
}

export default Button
