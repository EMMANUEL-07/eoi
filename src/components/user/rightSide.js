import React, { useState } from 'react';
import { Tooltip} from '@mui/material';
import PersonalDetails from './personalDetails';
import CareerDetails from './careerDetails';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs'
import FormIntro from './formIntro';
import FormEnd from './formEnd';
import SkillDetails from './skillDetails';



const RightSide = ({pd, setpd}) => {
  
  const [bg, setbg] = useState(false)
  const [personal, setPersonal] = useState({})
  const [skill, setSkill] = useState({})
  const [career, setCareer] = useState({})

  let bgc = `bg-dark`;
  let text = `white`;


  if (bg) {
    bgc = `bg-white`;
    text = `black`;
  }
  else {
    bgc = `bg-dark`;
    text = `white`;
  }

  return (
    <div className={`h-full ${bgc} py-6 lg:py-0 w-full lg:w-[58%] -z-0`}>
      
      <Tooltip title="Change theme">
      <div onClick={() => setbg(!bg)} className={`absolute top-0  right-0 ${pd === 5 ?  'lg:left-0  ' : 'lg:left-[42%]'} z-10 p-4`} >
        {bg ? <BsMoonStarsFill size='32' className='text-dark' /> : <BsSunFill size='36' className='text-yellow-500' />}
      </div>
      </Tooltip>
      
      {pd === 1 && <FormIntro text={text} change={setpd} /> } 
      {pd === 2 && <PersonalDetails text={text} change={setpd} personalInfo={personal} setPersonalInfo={setPersonal} /> } 
      {pd === 3 && <SkillDetails text={text} change={setpd}  skillInfo={skill} setSkillInfo={setSkill} /> } 
      {pd === 4 && <CareerDetails text={text} change={setpd} personalInfo={personal} skillInfo={skill} careerInfo={career} setCareerInfo={setCareer} /> } 
      {pd === 5 && <FormEnd text={text} /> } 

    </div>

  )
}

export default RightSide;
