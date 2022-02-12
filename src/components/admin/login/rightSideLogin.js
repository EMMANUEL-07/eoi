import React, { useState } from 'react';
import { Tooltip } from '@mui/material';
import Vector from '../../../assets/Vector.png'
import LoginForm from './loginForm';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs'



const RightSideAdmin = () => {

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
    <div className={`h-full py-16 ${bgc} w-[58%]  -z-0 `}>
      <Tooltip title="Change theme">
        <div onClick={() => setbg(!bg)} className={'absolute top-0 left-[42%] z-10 p-4'} >
          {bg ? <BsMoonStarsFill size='32' className='text-dark' /> : <BsSunFill size='36' className='text-yellow-500' />}
        </div>
      </Tooltip>

      <img src={Vector} alt='vector' className={'absolute top-0 right-0 -z-10'} />

      <LoginForm text={text} />
    </div>

  )
}

export default RightSideAdmin;
