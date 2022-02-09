import React, { useState } from 'react';
import { Radio } from '@mui/material';
import { blue } from '@mui/material/colors';



const PersonalDetails = ({text, change}) => {


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
    <div className={`h-full py-12 px-36  mx-auto z-0 text-${text}`}>
      <div className={'flex justify-between my-6'}>
        <div className={'flex flex-col w-56'}>
          <div className={'font-semibold text-sm'}>Email Address <span className={'text-red-600'} >*</span></div>
          <div><input type='email' placeholder='johndoe@gmail.com' className={'w-full bg-transparent text-base my-2 border-b-2 border-grey-700 hover:border-blue-500 focus:border-blue-500 outline-none'} /></div>
        </div>
        <div className={'flex flex-col w-56'}>
          <div className={'font-semibold text-sm'}>Phone Number <span className={'text-red-600'} >*</span></div>
          <div><input type='tel' placeholder='+234' className={'w-full bg-transparent text-base my-2 border-b-2 border-grey-700 hover:border-blue-500 focus:border-blue-500 outline-none'} /></div>
        </div>
      </div>

      <div className={'flex justify-between my-6'}>
        <div className={'flex flex-col w-full'}>
          <div className={'font-semibold text-sm'}>Gender? <span className={'text-red-600'} >*</span></div>
          <div className={'flex'}>
            <div className={'flex items-center pr-10'}> <Radio {...controlGender('Male')} /> Male </div>
            <div className={'flex items-center pr-10'}> <Radio {...controlGender('Female')} /> Female </div>
            <div className={'flex items-center pr-10'}> <Radio {...controlGender('Other')} /> Other </div>
          </div>
        </div>
      </div>

      <div className={'flex justify-between my-6'}>
        <div className={'flex flex-col w-full'}>
          <div className={'font-semibold text-sm'}>Highest educational qualification <span className={'text-red-600'} >*</span></div>
          <div className={'flex'}>
            <div className={'flex items-center pr-6'}> <Radio {...controlQualification('SSCE')} /> SSCE </div>
            <div className={'flex items-center pr-6'}> <Radio {...controlQualification('OND')} /> OND </div>
            <div className={'flex items-center pr-6'}> <Radio {...controlQualification('HND')} /> HND </div>
            <div className={'flex items-center pr-6'}> <Radio {...controlQualification('BSC')} /> BSC </div>
            <div className={'flex items-center pr-6'}> <Radio {...controlQualification('MSC')} /> MSC </div>
          </div>
        </div>
      </div>

      <div className={'flex justify-between my-6'}>
        <div className={'flex flex-col w-full'}>
          <div className={'font-semibold text-sm'}>State of residence (In Nigeria) <span className={'text-red-600'} >*</span></div>
          <div><input type='text' placeholder='Lagos' onChange={(e) => setLocation(e.target.value)} className={'w-full bg-transparent text-base my-2 border-b-2 border-grey-700 hover:border-blue-500 focus:border-blue-500 outline-none'} /></div>
        </div>
      </div>

      <div className={'flex justify-between my-6'}>
        <div className={'flex flex-col w-full'}>
          <div className={'font-semibold text-sm'}>What technical skill are you most interested in? <span className={'text-red-600'} >*</span></div>
          <div className={'flex flex-wrap'}>
            <div className={'flex items-center pr-10'}> <Radio {...controlSkill('UI/UX')} /> UI/UX </div>
            <div className={'flex items-center pr-10'}> <Radio {...controlSkill('Frontend Development')} /> Frontend Development </div>
            <div className={'flex items-center pr-10'}> <Radio {...controlSkill('QA Testing')} /> QA Testing </div>
            <div className={'flex items-center pr-10'}> <Radio {...controlSkill('Data Science')} /> Data Science </div>
            <div className={'flex items-center pr-10'}> <Radio {...controlSkill('Backend Development')} /> Backend Development </div>
            <div className={'flex items-center pr-10'}> <Radio {...controlSkill('Mobile Application Development')} /> Mobile Application Development </div>
            <div className={'flex items-center pr-10'}> <Radio {...controlSkill('DevOps')} /> DevOps </div>
            <div className={'flex items-center pr-10'}> <Radio {...controlSkill('Technical Product Manager SCRUM Master')} /> Technical Product Manager SCRUM Master </div>
            <div className={'flex items-center pr-10'}> <Radio {...controlSkill('Others')} /> Others </div>
          </div>
        </div>
      </div>

      <div className={'flex justify-center my-10 font-bold px-36 '}>
        <div className={'font-bold px-10 py-2 tracking-widest rounded-tr-md rounded-bl-md text-white bg-blue-600 hover:bg-blue-800'} onClick={() => change(false)}>
          Next
        </div>
      </div>

    </div>

  )
}

export default PersonalDetails;