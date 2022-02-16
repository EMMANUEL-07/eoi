import React from 'react'
import HumanStanding from '../../../assets/humanStanding.png';
import SlantedPhone from '../../../assets/slantedPhone.png';


const MiddleSide = () => {
  return (
    <div className={'h-1/3 lg:h-1/2 xl:h-2/3  absolute bottom-[30%] md:bottom-[36%] lg:top-1/3  left-[30%] lg:left-[15%] right-[20%] lg:right-[36%] xl:right-[40%] z-0'}>
      <img src={HumanStanding} alt='humanStanding' className={'absolute h-5/6 md:h-full z-40'} />
      <img src={SlantedPhone} alt='slantedPhone' className={'absolute w-full h-full -z-10 ml-8 md:ml-0 -top-24 lg:-top-20'} />
      
    </div>
  )
}

export default MiddleSide;
