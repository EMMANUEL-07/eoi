import React from 'react';




const FormEnd = ({ text }) => {

  let color = 'text-orangee';
  let bg = 'bg-dark'


  if (text === 'black') {
    color = 'text-orangee';
    bg = `bg-white`;
  }
  else {
    color = 'text-white';
    bg = `bg-dark`;
  }

  return (
    <div className={`md:h-full ${bg} flex flex-col mx-auto z-0 ${color} py-12 px-16 md:py-6 lg:px-24 text-base lg:text-lg items-center justify-center text-justify overflow-auto z-0 `}>
      <div className={'text-4xl my-12 text-center font-bold tracking-wider z-40 '}>Well done. Form has been submitted successfully! </div>
    </div>

  )
}

export default FormEnd;