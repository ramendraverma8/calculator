import React from 'react'
import ButtonContainer from '../UI/Button_Container'
import Button from './Button'
import './ButtonValue.css'

const values = ["C", "+-", "%", "/", 7, 8, 9, "x", 4, 5, 6, "-", 1, 2, 3, "+", 0, ".", "="]



const ButtonValue = (props) => {


    
  return (
    <ButtonContainer>
        {
        values.map((btn,i) => {
            return(
                <Button key ={i} className={btn=== "=" ? 'equals' : ''}  onClick={props.onClick}>{btn}</Button>)
        })
    }
    </ButtonContainer>
  )
}

export default ButtonValue