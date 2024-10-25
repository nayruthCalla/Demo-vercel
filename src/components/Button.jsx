import { useState } from 'react'

const Button = () => {
    const [isActive,setIsActive] = useState(false);

    const toggleButton = ()=>{
        setIsActive(!isActive);
    }



  return (
    <button className={`px-5 py-2.5 text-white cursor-pointer rounded-md
      ${isActive?'bg-green-500':'bg-red-500'}
    `} onClick={toggleButton}>
        {isActive?'active':'inactive'}
    </button>
  )
}

export default Button