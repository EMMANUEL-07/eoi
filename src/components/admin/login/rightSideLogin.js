import React, { useState } from 'react';
import { Tooltip } from '@mui/material';
import Vector from '../../../assets/Vector.png'
import LoginForm from './loginForm';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs'



const RightSideAdmin = () => {

  const [bg, setbg] = useState(false)

  let bgc = `bg-dark`;
  let text = `white`;


  if (bg) {
    bgc = `bg-white`;
    text = `black`;
  }
  else {
    bgc = `bg-dark`;
    text = `white`;
  }

  return (
    <div className={`lg:h-full py-16 ${bgc} w-full lg:w-[58%] z-0 `}>
      <Tooltip title="Change theme">
        <div onClick={() => setbg(!bg)} className={'absolute top-0 right-0 lg:left-[42%] z-10 p-4'} >
          {bg ? <BsMoonStarsFill size='32' className='text-dark' /> : <BsSunFill size='36' className='text-yellow-500' />}
        </div>
      </Tooltip>

      {/* <img src={Vector} alt='vector' className={'absolute top-0 right-0 -z-10'} /> */}

      <LoginForm text={text} />
    </div>

  )
}

export default RightSideAdmin;
