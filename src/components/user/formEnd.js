import React, { useState } from 'react';
import { Radio } from '@mui/material';
import { blue } from '@mui/material/colors';
import { FaRegSmileWink } from 'react-icons/fa';
import { Icon } from '@iconify/react';



const FormEnd = ({ text }) => {

  let color = 'text-orangee';
  let smiley = 'text-dark';

  if (text == 'black') {
    color = 'text-orangee';
    smiley = 'text-dark';
  }
  else {
    color = 'text-white';
    smiley = 'text-primary';
  }

  return (
    <div className={`h-full flex flex-col items-center py-20 px-36  mx-auto z-0 ${color}`}>
      <div> <Icon icon="dashicons:smiley" className={`text-[256px] ${smiley}`} />  </div>

      <div className={'text-4xl my-12 text-center font-bold tracking-wider '}>Well done. Form has been submitted successfully! </div>
    </div>

  )
}

export default FormEnd;