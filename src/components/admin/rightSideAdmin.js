import React, { useState } from 'react';
import { Radio, Button } from '@mui/material';
import { blue } from '@mui/material/colors';
import Vector from '../../assets/Vector.png'
import LoginForm from './loginForm';



const RightSideAdmin = ({bg}) => {

  let bgc = `bg-white`;
  let text = `black`;

  if (bg) {
    bgc = `bg-white`;
    text = `black`;
  }
  else {
    bgc = `bg-dark`;
    text = `white`;
  }

  return (
    <div className={`h-full py-16 ${bgc} w-[58%]  -z-0 `}>
      <img src={Vector} alt='vector image' className={'absolute top-0 right-0 -z-10'} />
      
      <LoginForm text={text} /> 
    </div>

  )
}

export default RightSideAdmin;
