import React, { useState } from 'react';
import { Tooltip} from '@mui/material';
import PersonalDetails from './personalDetails';
import Vector from '../../assets/Vector.png'
// import Vector2 from '../../assets/Vector2.png'
import CareerDetails from './careerDetails';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs'
import FormIntro from './formIntro';
import FormEnd from './formEnd';



const RightSide = ({pd, setpd}) => {

  
  const [bg, setbg] = useState(false)

  let bgc = `bg-dark`;
  let text = `white`;

  let vector = ''

  if(pd == 4){
    vector = 'lg:left-0 lg:z-10 lg:rotator'
  }
  else {
    vector = ''
  }

  if (bg) {
    bgc = `bg-white`;
    text = `black`;
  }
  else {
    bgc = `bg-dark`;
    text = `white`;
  }

  return (
    <div className={`h-full ${bgc} py-6 lg:py-0 w-full lg:w-[58%] -z-0`}>
      
      <Tooltip title="Change theme">
      <div onClick={() => setbg(!bg)} className={`absolute top-0 ${pd == 4 ?  'lg:right-[42%]' : 'lg:left-[42%]'} z-10 p-4`} >
        {bg ? <BsMoonStarsFill size='32' className='text-dark' /> : <BsSunFill size='36' className='text-yellow-500' />}
      </div>
      </Tooltip>
      
      <img src={Vector} alt='vector' className={`absolute top-0 right-0 -z-10 ${vector}`} />
      
      {pd === 1 && <FormIntro text={text} change={setpd} /> } 
      {pd === 2 && <PersonalDetails text={text} change={setpd} /> } 
      {pd === 3 && <CareerDetails text={text} change={setpd} /> } 
      {pd === 4 && <FormEnd text={text} /> } 

    </div>

  )
}

export default RightSide;
