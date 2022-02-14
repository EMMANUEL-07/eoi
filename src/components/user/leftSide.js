import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/LOGO_SEGS.png';

const LeftSide = () => {
  return (
    <div className={`h-full p-16 bg-leftSide w-[42%] `}>
      <div className={'flex justify-center'}>
        <Link to='/login'>
          <img src={Logo} alt='logo' className={'w-52'} />
        </Link>
      </div>

      <div className={'pt-32 pl-16 tracking-wider flex items-center font-extrabold text-4xl text-white'}>
        Kindly fill the form with the right information and a team member will reach out to you within 3 days.
      </div>
    </div>
  )
}

export default LeftSide
