import React, { useState } from 'react';
import { Tooltip} from '@mui/material';
import PersonalDetails from './personalDetails';
import Vector from '../../assets/Vector.png'
import CareerDetails from './careerDetails';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs'
import FormIntro from './formIntro';
import FormEnd from './formEnd';



const RightSide = () => {

  const [pd, setpd] = useState(1)
  const [bg, setbg] = useState(true)

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
    <div className={`h-full ${bgc} w-[58%] -z-0`}>
      
      <Tooltip title="Change theme">
      <div onClick={() => setbg(!bg)} className={'absolute top-0 left-[42%] z-10 p-4'} >
        {bg ? <BsMoonStarsFill size='32' className='text-dark' /> : <BsSunFill size='36' className='text-yellow-500' />}
      </div>
      </Tooltip>
      
      <img src={Vector} alt='vector' className={'absolute top-0 right-0 -z-10'} />
      
      {pd === 1 && <FormIntro text={text} change={setpd} /> } 
      {pd === 2 && <PersonalDetails text={text} change={setpd} /> } 
      {pd === 3 && <CareerDetails text={text} change={setpd} /> } 
      {pd === 4 && <FormEnd text={text} /> } 

    </div>

  )
}

export default RightSide;
