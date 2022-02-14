import React from 'react'
import HumanStanding from '../../../assets/humanStanding.png';
import SlantedPhone from '../../../assets/slantedPhone.png';


const MiddleSide = () => {
  return (
    <div className={'h-2/3 absolute top-[30%] left-[20%] right-1/2 z-0'}>
      <img src={HumanStanding} alt='humanStanding' className={'absolute h-5/6 z-40'} />
      <img src={SlantedPhone} alt='slantedPhone' className={'absolute w-full h-full -z-10 ml-8 -top-24'} />
      
    </div>
  )
}

export default MiddleSide;
