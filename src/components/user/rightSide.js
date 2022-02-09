import React, { useState } from 'react';
import { Radio, Button } from '@mui/material';
import { blue } from '@mui/material/colors';
import PersonalDetails from './personalDetails';
import Vector from '../../assets/Vector.png'
import CareerDetails from './careerDetails';



const RightSide = ({bg}) => {

  const [pd, setpd] = useState(true)

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
    <div className={`h-full ${bgc} w-[58%]  -z-0 `}>

      <img src={Vector} alt='vector image' className={'absolute top-0 right-0 -z-10'} />

      {pd ? <PersonalDetails text={text} change={setpd} /> : <CareerDetails text={text} change={setpd} />}

    </div>

  )
}

export default RightSide;
