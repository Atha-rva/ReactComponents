import React from 'react'
import { RadioBtn } from '.'

const comapnies = [
    "Adobe",
    "Google",
    "Microsoft",
    "TCS",
    "Cognizant",
];

const RadioComponent = () => {
  return (
    <div>
      <RadioBtn ZGlobalLabel='Companies' Zlabel={comapnies}/>
    </div>
  )
}

export default RadioComponent
