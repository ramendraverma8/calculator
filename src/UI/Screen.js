import { Textfit } from "react-textfit";
import './Screen.css'

import React from 'react'

const Screen = (props) => {
  return (
    <div className="screen">
    <Textfit>{props.value}</Textfit>
    <Textfit >{props.ans}</Textfit>
    </div>
  )
}

export default Screen;