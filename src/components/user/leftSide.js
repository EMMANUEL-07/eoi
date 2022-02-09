import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/LOGO_SEGS.png';

const LeftSide = ({bgVal, bgChange}) => {
  return (
    <div className={`h-full p-16 bg-leftSide w-[42%] `}>
      <div className={'flex justify-center'}>
          <img src={Logo} alt='logo' className={'w-52'} onClick={() => bgChange(!bgVal)} />
      </div>

      <div className={'pt-32 pl-16 tracking-wider flex items-center font-extrabold text-4xl text-white'}>
        Want to be a part of my community? <br /> Don’t miss out and fill the form.
      </div>
    </div>
  )
}

export default LeftSide
