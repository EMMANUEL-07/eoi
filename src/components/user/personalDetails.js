import React, { useState } from 'react';
import { Radio } from '@mui/material';
import { blue } from '@mui/material/colors';



const PersonalDetails = ({ text, change }) => {


  let bg = 'bg-dark'

  if (text == 'black') {
    bg = `bg-white`;
    text = `black`;
  }
  else {
    bg = `bg-dark`;
    text = `white`;
  }

  const [selectedGender, setSelectedGender] = useState('');
  const [selectedQualification, setSelectedQualification] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('');
  const [location, setLocation] = useState('');

  const handleGender = (event) => {
    setSelectedGender(event.target.value);
    console.log(event.target.value);
  };

  const handleQualification = (event) => {
    setSelectedQualification(event.target.value);
    console.log(event.target.value);
  };

  const handleSkill = (event) => {
    setSelectedSkill(event.target.value);
    console.log(event.target.value);
  };

  const controlGender = (item) => ({
    checked: selectedGender === item,
    onChange: handleGender,
    value: item,
    name: 'size-radio-button-demo',
    inputProps: { 'aria-label': item },
    sx: {
      color: blue[800],
      '&.Mui-checked': {
        color: blue[600],
      }
    }
  });

  const controlQualification = (item) => ({
    checked: selectedQualification === item,
    onChange: handleQualification,
    value: item,
    name: 'size-radio-button-demo',
    inputProps: { 'aria-label': item },
    sx: {
      color: blue[800],
      '&.Mui-checked': {
        color: blue[600],
      }
    }
  });

  const controlSkill = (item) => ({
    checked: selectedSkill === item,
    onChange: handleSkill,
    value: item,
    name: 'size-radio-button-demo',
    inputProps: { 'aria-label': item },
    sx: {
      color: blue[800],
      '&.Mui-checked': {
        color: blue[600],
      }
    }
  });


  return (
    <div className={`md:h-full ${bg} flex flex-col mx-auto z-0 text-${text} py-12 px-10 sm:px-16   lg:px-28 text-base lg:text-lg  text-justify md:overflow-auto z-40`}>
      <div className={'flex flex-col md:flex-row md:mt-16 space-y-4 md:space-y-0 lg:space-x-4 justify-between my-4 lg:my-6'}>
        <div className={'flex flex-col md:w-56 '}>
          <div className={'font-semibold text-sm lg:text-base'}>Email Address <span className={'text-red-600'} >*</span></div>
          <div><input type='email' placeholder='johndoe@gmail.com' required className={'w-full bg-transparent text-base my-2 border-b-2 border-grey-700 hover:border-blue-500 focus:border-blue-500 outline-none'} /></div>
        </div>
        <div className={'flex flex-col md:w-56 z-40'}>
          <div className={'font-semibold text-sm lg:text-base'}>Phone Number <span className={'text-red-600'} >*</span></div>
          <div><input type='tel' placeholder='+234' required className={'w-full bg-transparent text-base my-2 border-b-2 border-grey-700 hover:border-blue-500 focus:border-blue-500 outline-none'} /></div>
        </div>
      </div>

      <div className={'flex justify-between my-4 lg:my-6 z-40'}>
        <div className={'flex flex-col w-full'}>
          <div className={'font-semibold text-sm lg:text-base'}>Gender? <span className={'text-red-600'} >*</span></div>
          <div className={'flex flex-wrap -ml-3'}>
            <div className={'flex justify-start items-center pr-10'}> <Radio {...controlGender('Male')} /> Male </div>
            <div className={'flex items-center pr-10'}> <Radio {...controlGender('Female')} /> Female </div>
            <div className={'flex items-center pr-10'}> <Radio {...controlGender('Other')} /> Other </div>
          </div>
        </div>
      </div>

      <div className={'flex justify-between my-4 lg:my-6 z-40'}>
        <div className={'flex flex-col w-full'}>
          <div className={'font-semibold text-sm lg:text-base'}>Highest educational qualification <span className={'text-red-600'} >*</span></div>
          <div className={'flex flex-wrap -ml-3'}>
            <div className={'flex items-center pr-6'}> <Radio {...controlQualification('SSCE')} /> SSCE </div>
            <div className={'flex items-center pr-6'}> <Radio {...controlQualification('OND')} /> OND </div>
            <div className={'flex items-center pr-6'}> <Radio {...controlQualification('HND')} /> HND </div>
            <div className={'flex items-center pr-6'}> <Radio {...controlQualification('BSC')} /> BSC </div>
            <div className={'flex items-center pr-6'}> <Radio {...controlQualification('MSC')} /> MSC </div>
          </div>
        </div>
      </div>

      <div className={'flex justify-between my-4 lg:my-6 w-full z-40'}>
        <div className={'flex flex-col w-full'}>
          <div className={'font-semibold text-sm lg:text-base'}>What would you describe as the most challenging in your selected field? <span className={'text-red-600'} >*</span></div>
          <div><input type='text' placeholder='Lagos'required onChange={(e) => setLocation(e.target.value)} className={'w-full bg-transparent text-base my-2 border-b-2 border-grey-700 hover:border-blue-500 focus:border-blue-500 outline-none'} /></div>
        </div>
      </div>
    
      <div className={'flex flex-col space-y-4 md:space-y-0 sm:w-1/2 mx-auto md:flex-row md:w-full font-bold text-center my-4 lg:my-6 justify-around'}>
        <div className={`font-bold px-10 py-1 tracking-widest rounded-tr-md rounded-bl-md border-blue-600 border-2 ${text == 'black' ? 'text-dark' :  'text-white'} bg-transparent  hover:cursor-pointer`} onClick={() => change(1)}>
          Previous
        </div>

        <div className={'font-bold px-10 py-1 tracking-widest rounded-tr-md rounded-bl-md border-blue-600 border-2 text-white bg-blue-600  hover:cursor-pointer '} onClick={() => change(3)}>
          Next
        </div>
      </div>


    </div>

  )
}

export default PersonalDetails;