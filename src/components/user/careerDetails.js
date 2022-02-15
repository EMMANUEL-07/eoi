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

  const [selectedKnowledge, setSelectedKnowledge] = useState('');
  const [selectedUnderstand, setSelectedUnderstand] = useState('');
  const [challenge, setChallenge] = useState('');
  const [pastProject, setPastProject] = useState('');
  const [gitHub, setGitHub] = useState('');
  const [whyJoin, setWhyJoin] = useState('');


  const handleKnowledge = (event) => {
    setSelectedKnowledge(event.target.value);
    console.log(event.target.value);
  };

  const handleUnderstand = (event) => {
    setSelectedUnderstand(event.target.value);
    console.log(event.target.value);
  };

  const controlKnowledge = (item) => ({
    checked: selectedKnowledge === item,
    onChange: handleKnowledge,
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
    <div className={`md:h-full ${bg} flex flex-col mx-auto z-0 text-${text} py-12 px-10 sm:px-16 md:py-6   lg:px-24 text-base lg:text-lg  text-justify md:overflow-auto z-40 `}>
      <div className={'flex justify-between my-6 z-40'}>
        <div className={'flex flex-col w-full'}>
          <div className={'font-semibold text-sm'}>Do you have knowledge of selected field? <span className={'text-red-600'} >*</span></div>
          <div className={'flex flex-wrap'}>
            <div className={'flex items-center pr-10'}> <Radio {...controlKnowledge('Yes')} /> Yes </div>
            <div className={'flex items-center pr-10'}> <Radio {...controlKnowledge('No')} /> No </div>
            <div className={'flex items-center pr-10'}> <Radio {...controlKnowledge('Still Learning')} /> Still Learning </div>
          </div>
        </div>
      </div>      

      <div className={'flex justify-between my-6 z-40'}>
        <div className={'flex flex-col w-full'}>
          <div className={'font-semibold text-sm'}>What would you describe as most challenging in your selected field? <span className={'text-red-600'} >*</span></div>
          <div><input type='text' onChange={(e) => setChallenge(e.target.value)} className={'w-full bg-transparent text-base my-2 border-b-2 border-grey-700 hover:border-blue-500 focus:border-blue-500 outline-none'} /></div>
        </div>
      </div>
      

      <div className={'flex justify-between my-6 z-40'}>
        <div className={'flex flex-col w-full'}>
          <div className={'font-semibold text-sm'}>Have you worked on any project in the past? Give details of the one you feel most impressed about?</div>
          <div><input type='text' onChange={(e) => setPastProject(e.target.value)} className={'w-full bg-transparent text-base my-2 border-b-2 border-grey-700 hover:border-blue-500 focus:border-blue-500 outline-none'} /></div>
        </div>
      </div>
      

      <div className={'flex justify-between my-6 z-40'}>
        <div className={'flex flex-col w-full'}>
          <div className={'font-semibold text-sm'}>Do you have a Github URL? Kindly drop the link </div>
          <div><input type='text'  onChange={(e) => setGitHub(e.target.value)} className={'w-full bg-transparent text-base my-2 border-b-2 border-grey-700 hover:border-blue-500 focus:border-blue-500 outline-none'} /></div>
        </div>
      </div>
      

      <div className={'flex justify-between my-6 z-40'}>
        <div className={'flex flex-col w-full'}>
          <div className={'font-semibold text-sm'}>Why do you want to join my network? <span className={'text-red-600'} >*</span></div>
          <div><input type='text'  onChange={(e) => setWhyJoin(e.target.value)} className={'w-full bg-transparent  text-base my-2 border-b-2 border-grey-700 hover:border-blue-500 focus:border-blue-500 outline-none'} /></div>
        </div>
      </div>

      <div className={'flex justify-between my-6 z-40'}>
        <div className={'flex flex-col w-full'}>
          <div className={'font-semibold text-sm'}>Understand that this is not a paid job. However, there is an opportunity to get worthy talents compensated or referred to be part of a paid projects to encourage and motivate from time to time? <span className={'text-red-600'} >*</span></div>
          <div className={'flex flex-wrap'}>
            <div className={'flex items-center pr-10'}> <Radio {...controlUnderstand('Yes')} /> Yes <span className={'hidden md:contents'}> , I understand </span> </div>
            <div className={'flex items-center pr-10'}> <Radio {...controlUnderstand('No')} /> No </div>
          </div>
        </div>
      </div>

      
      <div className={'flex flex-col space-y-4 md:space-y-0 sm:w-1/2 mx-auto md:flex-row md:w-full font-bold  justify-around'}>
        <div className={'font-bold px-10 py-1 tracking-widest rounded-tr-md rounded-bl-md border-blue-600 border-2 text-white bg-blue-600 hover:bg-white hover:text-blue-600'} onClick={() => change(2)}>
          Previous
        </div>

        <div className={'font-bold px-10 py-1 tracking-widest rounded-tr-md rounded-bl-md border-blue-600 border-2 text-white bg-blue-600 hover:bg-white hover:text-blue-600'} onClick={() => change(4)}>
          Submit
        </div>
      </div>


    </div>

  )
}

export default CareerDetails;
