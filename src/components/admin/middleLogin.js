import React from 'react'
import LadySitting from '../../assets/ladySitting.png'
import Ellipse21 from '../../assets/Ellipse21.png'


const MiddleLoginSide = () => {
  return (
    <div className={'h-1/3 absolute top-1/2 right-1/2  z-0 overflow-clip'}>
      <img src={Ellipse21} alt='ellipse' className={' absolute h-1/2 ml-3  -bottom-2 -z-10'} />
      <img src={LadySitting} alt='lady-siiting' className={'h-full z-40'} />
      
    </div>
  )
}

export default MiddleLoginSide;
