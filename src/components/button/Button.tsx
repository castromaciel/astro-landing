import { useState } from 'react';
import { toast } from 'react-toastify';

const Button = () => {
  const [isSubscribe, setIsSubscribe] = useState(false)

  const handleClick = () => {
    toast('So easy click', {
      autoClose: 2000,
      type: 'success'
    })
    setIsSubscribe(!isSubscribe)
  }

  return (
    <button onClick={handleClick}>
      {
        isSubscribe
          ? 'Desuscribirse'
          : 'Suscribirse'
      }
    </button>
  )
}

export default Button