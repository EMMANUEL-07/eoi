import React from 'react';
// import { Link } from 'react-router-dom';
import Logo from '../../../assets/LOGO_SEGS.png';

const LeftSideAdmin = () => {
  return (
    <div className={`h-full p-16 bg-leftSide w-[42%] `}>
      <div className={'flex justify-center'}>
        <img src={Logo} alt='logo' className={'w-52'}  />
      </div>
    </div>
  )
}

export default LeftSideAdmin;