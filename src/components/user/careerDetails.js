import React, { useState } from 'react';
import { Radio } from '@mui/material';
import { blue } from '@mui/material/colors';



const CareerDetails = ({text, change}) => {


  let bg = 'bg-dark'

  if (text == 'black') {
    bg = `bg-white`;
    text = `black`;
  }
  else {
    bg = `bg-dark`;
    text = `white`;
  }
  
  const [selectedUnderstand, setSelectedUnderstand] = useState('');
  const [pastProject, setPastProject] = useState('');
  const [gitHub, setGitHub] = useState('');
  const [whyJoin, setWhyJoin] = useState('');


  const handleUnderstand = (event) => {
    setSelectedUnderstand(event.target.value);
    console.log(event.target.value);
  };


  const controlUnderstand = (item) => ({
    checked: selectedUnderstand === item,
    onChange: handleUnderstand,
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
    <div className={`md:h-full ${bg} flex flex-col mx-auto z-0 text-${text} py-12 px-10 sm:px-16    lg:px-24 text-base lg:text-lg  text-justify md:overflow-auto z-40 `}>
      
      <div className={'flex justify-between my-4 lg:my-6 z-40 md:mt-16'}>
        <div className={'flex flex-col w-full'}>
          <div className={'font-semibold text-sm lg:text-base'}>Have you worked on any project in the past? Give details of the one you feel most impressed about?</div>
          <div><input type='text' required onChange={(e) => setPastProject(e.target.value)} className={'w-full bg-transparent text-base my-2 border-b-2 border-grey-700 hover:border-blue-500 focus:border-blue-500 outline-none'} /></div>
        </div>
      </div>
      

      <div className={'flex justify-between my-4 lg:my-6 z-40'}>
        <div className={'flex flex-col w-full'}>
          <div className={'font-semibold text-sm lg:text-base'}>Do you have a Github URL? Kindly drop the link </div>
          <div><input type='text' required onChange={(e) => setGitHub(e.target.value)} className={'w-full bg-transparent text-base my-2 border-b-2 border-grey-700 hover:border-blue-500 focus:border-blue-500 outline-none'} /></div>
        </div>
      </div>
      

      <div className={'flex justify-between my-4 lg:my-6 z-40'}>
        <div className={'flex flex-col w-full'}>
          <div className={'font-semibold text-sm lg:text-base'}>Why do you want to join my network? <span className={'text-red-600'} >*</span></div>
          <div><input type='text' required onChange={(e) => setWhyJoin(e.target.value)} className={'w-full bg-transparent  text-base my-2 border-b-2 border-grey-700 hover:border-blue-500 focus:border-blue-500 outline-none'} /></div>
        </div>
      </div>

      <div className={'flex justify-between my-4 lg:my-6 z-40'}>
        <div className={'flex flex-col w-full'}>
          <div className={'font-semibold text-sm lg:text-base'}>Understand that this is not a paid job. However, there is an opportunity to get worthy talents compensated or referred to be part of a paid projects to encourage and motivate from time to time? <span className={'text-red-600'} >*</span></div>
          <div className={'flex flex-wrap'}>
            <div className={'flex items-center pr-10'}> <Radio {...controlUnderstand('Yes')} /> Yes <span className={'hidden md:contents'}> , I understand </span> </div>
            <div className={'flex items-center pr-10'}> <Radio {...controlUnderstand('No')} /> No </div>
          </div>
        </div>
      </div>

      <div className={'flex flex-col space-y-4 md:space-y-0 sm:w-1/2 mx-auto md:flex-row md:w-full font-bold text-center my-4 lg:my-4 justify-around'}>
        <div className={`font-bold px-10 py-1 tracking-widest rounded-tr-md rounded-bl-md border-blue-600 border-2 ${text == 'black' ? 'text-dark' :  'text-white'} bg-transparent hover:cursor-pointer`} onClick={() => change(3)}>
          Previous
        </div>

        <div className={'font-bold px-10 py-1 tracking-widest rounded-tr-md rounded-bl-md border-blue-600 border-2 text-white bg-blue-600  hover:cursor-pointer'} onClick={() => change(5)}>
          Submit
        </div>
      </div>


    </div>

  )
}

export default CareerDetails;
