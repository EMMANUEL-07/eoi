import React from 'react'
import LadySitting from '../../assets/ladySitting.png'
import Ellipse21 from '../../assets/Ellipse21.png'


const MiddleSide = ({pd}) => {
  return (

    <div className={`h-1/4 md:h-1/3 absolute bottom-1/3 right-0 lg:bottom-0 lg:right-1/2 overflow-clip z-10 ${ pd == 1 || pd == 4 ? 'hidden' : '' }`}>
      <img src={Ellipse21} alt='ellipse' className={' absolute h-1/2 ml-3 -bottom-2 -z-10'} />
      <img src={LadySitting} alt='lady-siiting' className={'h-full z-30'} />
      
    </div>
  )
}

export default MiddleSide;
