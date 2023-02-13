import React from 'react'
import './Button_Container.css'
const ButtonContainer = (props) => {
  return (
    <div className='buttoncontainer'>{props.children}</div>
  )
}

export default ButtonContainer