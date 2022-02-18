import React, { useState, useEffect } from 'react';
import { Radio } from '@mui/material';
import { blue } from '@mui/material/colors';
import SimpleReactValidator from 'simple-react-validator';
import validator from 'validator';


const SkillDetails = ({ text, change, skillInfo, setSkillInfo }) => {

  let bg = 'bg-dark'

  if (text == 'black') {
    bg = `bg-white`;
    text = `black`;
  }
  else {
    bg = `bg-dark`;
    text = `white`;
  }

  const [selectedSkill, setSelectedSkill] = useState(skillInfo?.selectedSkill);
  const [selectedKnowledge, setSelectedKnowledge] = useState(skillInfo?.selectedKnowledge);
  const [challenge, setChallenge] = useState(skillInfo?.challenge);


  const [skillValid, setSkillValid] = useState('');
  const [knowledgeValid, setKnowledgeValid] = useState('');
  const [challengeValid, setChallengeValid] = useState('');
  
  useEffect(() => {
    console.log('validate')
  }, [skillValid, knowledgeValid, challengeValid ])

  const handleSkill = (event) => {
    setSelectedSkill(event.target.value);
    console.log(event.target.value);
  };

  const handleKnowledge = (event) => {
    setSelectedKnowledge(event.target.value);
    console.log(event.target.value);
  };


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

  const submitForm = () => {

    setSkillValid(!validator.isEmpty(selectedSkill))
    setKnowledgeValid(!validator.isEmpty(selectedKnowledge))
    setChallengeValid(!validator.isEmpty(challenge) && validator.isLength(challenge,{min:2, max: 200}))

    console.log(selectedSkill, selectedKnowledge, challenge)
    console.log(skillValid, knowledgeValid, challengeValid)

    setSkillInfo({selectedSkill, selectedKnowledge, challenge})

    if (skillValid && knowledgeValid && challengeValid) {
      change(4)
    }

  }
  

  return (
    <div className={`md:h-full ${bg} flex flex-col mx-auto z-0 text-${text} py-12 px-10 sm:px-16 md:py-6   lg:px-24 text-base lg:text-lg md:overflow-auto z-40`}>
      

      <div className={'text-orangee font-bold text-2xl my-4 md:mt-16 lg:mt-8'} >
        Skill Info
      </div>

      <div className={'flex justify-between my-4 lg:my-6 z-40'}>
        <div className={'flex flex-col w-full'}>
          <div className={'font-semibold text-sm lg:text-base'}>What technical skill are you most interested in? <span className={'text-red-600'} >*</span></div>
          <div className={'flex flex-col flex-wrap  -ml-3'}>

            <div className={'flex w-full flex-col my-1 md:flex-row'}>
              <div className={'flex items-center pr-10 md:w-96 lg:w-1/2 xl:w-96'}> <Radio {...controlSkill('Frontend Development')} /> Frontend Development </div>
              <div className={'flex items-center pr-10'}> <Radio  {...controlSkill('UI/UX')} /> UI/UX </div>
            </div>

            <div className={'flex w-full flex-col my-1 md:flex-row'}>
              <div className={'flex items-center pr-10 md:w-96 lg:w-1/2 xl:w-96'}> <Radio {...controlSkill('Backend Development')} /> Backend Development </div>
              <div className={'flex items-center pr-10'}> <Radio {...controlSkill('Data Science')} /> Data Science </div>
            </div>

            <div className={'flex w-full flex-col my-1 md:flex-row'}>
              <div className={'flex items-center pr-10 md:w-96 lg:w-1/2 xl:w-96'}> <Radio {...controlSkill('Mobile Application Development')} /> Mobile Application Development </div>
              <div className={'flex items-center pr-10'}> <Radio {...controlSkill('QA Testing')} /> QA Testing </div>
            </div>

            <div className={'flex w-full flex-col my-1 md:flex-row'}>
              <div className={'flex items-center pr-10 md:w-96 lg:w-1/2 xl:w-96'}> <Radio {...controlSkill('Technical Product Manager SCRUM Master')} /> Technical Product Manager SCRUM Master </div>
              <div className={'flex items-center pr-10'}> <Radio {...controlSkill('DevOps')} /> DevOps </div>
            </div>

            <div className={'flex w-full flex-col my-1 md:flex-row'}>
              <div className={'flex items-center pr-8'}> <Radio {...controlSkill('Others')} /> Others: </div>
              <div className={'w-full'}>
                <input type='text' placeholder='Name of other skill' className={'w-full bg-transparent text-base my-2 border-b-2 border-grey-700 hover:border-blue-500 focus:border-blue-500 outline-none'} />
              </div>
              
            </div>

          </div>
          {skillValid === '' ? '' : skillValid ? '' : <div className={`text-red-500 text-xs`}>Please select your skill </div>}
        </div>
      </div>

      <div className={'flex my-4 z-40'}>
        <div className={'flex flex-col w-full'}>
          <div className={'font-semibold text-sm lg:text-base'}>Do you have knowledge of selected field? <span className={'text-red-600'} >*</span></div>
          <div className={'flex flex-wrap -ml-3'}>
            <div className={'flex items-center pr-10'}> <Radio {...controlKnowledge('Yes')} /> Yes </div>
            <div className={'flex items-center pr-10'}> <Radio {...controlKnowledge('No')} /> No </div>
            <div className={'flex items-center pr-10'}> <Radio {...controlKnowledge('Still Learning')} /> Still Learning </div>
          </div>
          {knowledgeValid === '' ? '' : knowledgeValid ? '' : <div className={`text-red-500 text-xs`}>Please select your skill level </div>}
        </div>
      </div>      


      <div className={'flex my-4 z-40'}>
        <div className={'flex flex-col w-full'}>
          <div className={'font-semibold text-sm lg:text-base'}>What would you describe as most challenging in your selected field? <span className={'text-red-600'} >*</span></div>
          <div>
            <input type='text'defaultValue={skillInfo?.challenge} onChange={(e) => setChallenge(e.target.value)} className={'w-full bg-transparent text-base my-2 border-b-2 border-grey-700 hover:border-blue-500 focus:border-blue-500 outline-none'} />
          </div>
          {challengeValid === '' ? '' : challengeValid ? '' : <div className={`text-red-500 text-xs`}>Please state your challenges - Min:2, Max:200 </div>}
        </div>
      </div>



      <div className={'flex flex-col space-y-4 md:space-y-0 sm:w-1/2 mx-auto md:flex-row md:w-full font-bold text-center my-4 justify-around'}>
        <div className={`font-bold px-10 py-1 tracking-widest rounded-tr-md rounded-bl-md border-blue-600 border-2 ${text == 'black' ? 'text-dark' :  'text-white'} bg-transparent  hover:cursor-pointer`} onClick={() => change(2)}>
          Previous
        </div>

        <div className={'font-bold px-10 py-1 tracking-widest rounded-tr-md rounded-bl-md border-blue-600 border-2 text-white bg-blue-600  hover:cursor-pointer '} onClick={() => submitForm()}>
          Next
        </div>
      </div>


    </div>

  )
}

export default SkillDetails;