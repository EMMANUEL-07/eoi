import React, { useState } from 'react';
import { Radio, Button } from '@mui/material';
import { blue } from '@mui/material/colors';
import PersonalDetails from './personalDetails';
import Vector from '../../assets/Vector.png'
import CareerDetails from './careerDetails';



const RightSide = (props) => {


  return (
    <div className={`h-full bg-${props.bg} w-[58%]  -z-0 `}>

      <img src={Vector} alt='vector image' className={'absolute top-0 right-0 -z-10'} />



      <PersonalDetails text={props.text} />
      {/* <CareerDetails text={props.text} /> */}




    </div>

  )
}

export default RightSide;
