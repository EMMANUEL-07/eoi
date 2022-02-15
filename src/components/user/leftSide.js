import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/LOGO_SEGS.png';
import BoyWelcome from '../../assets/boyWelcome.png';
import GirlThumbUp from '../../assets/girlThumbUp.png';

const LeftSide = ({pd}) => {

  return (
    <div className={`h-2/3 lg:h-full flex flex-col px-12 lg:px-20 p-20 bg-leftSide w-full lg:w-[42%] `}>
      <div className={'flex justify-center  z-40'}>
        <Link to='/login'>
          <img src={Logo} alt='logo' className={'w-52'} />
        </Link>
      </div>

      <div className={'flex items-center h-full my-8 lg:my-16  py-auto px-auto font-extrabold text-xl sm:text-3xl xl:text-4xl text-white z-40 tracking-wider '}>
        { pd == 1 &&  <img src={BoyWelcome} alt='logo' className={'h-full w-full md:h-4/5 md:w-3/5 lg:h-full lg:w-full mx-auto'} /> }
        {pd == 2 && 'Kindly fill the form with the right information and a team member will reach out to you within 3 days.'}
        {pd == 3 && 'Kindly fill the form with the right information and a team member will reach out to you within 3 days.'}
        {pd == 4 && <img src={GirlThumbUp} alt='logo' className={'h-full w-full md:h-4/5 md:w-3/5 lg:h-full lg:w-full mx-auto'} /> }
        
      </div>
    </div>
  )
}

export default LeftSide
