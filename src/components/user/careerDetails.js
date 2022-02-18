import React, { useState } from 'react';
import { Radio } from '@mui/material';
import { blue } from '@mui/material/colors';
import validator from 'validator';
import axios from 'axios';


const CareerDetails = ({ text, change, personalInfo, skillInfo, careerInfo, setCareerInfo }) => {


  let bg = 'bg-dark'

  if (text == 'black') {
    bg = `bg-white`;
    text = `black`;
  }
  else {
    bg = `bg-dark`;
    text = `white`;
  }

  const [selectedUnderstand, setSelectedUnderstand] = useState(careerInfo?.selectedUnderstand);
  const [pastProject, setPastProject] = useState(careerInfo?.pastProject);
  const [career, setCareer] = useState(careerInfo?.career);
  const [gitHub, setGitHub] = useState(careerInfo?.gitHub);
  const [whyJoin, setWhyJoin] = useState(careerInfo?.whyJoin);

  const [understandValid, setUnderstandValid] = useState('');
  const [pastProjectValid, setPastProjectValid] = useState('');
  const [careerValid, setCareerValid] = useState('');
  const [gitHubValid, setGitHubValid] = useState('');
  const [whyJoinValid, setWhyJoinValid] = useState('');


  const handleUnderstand = (event) => {
    setSelectedUnderstand(event.target.value);
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


  const sendData = () => {
    axios.post("https://teaminnovation-endpoint.herokuapp.com/eoi-create/", {
      fullname: personalInfo.name,
      email: personalInfo.email,
      phone: personalInfo.phone,
      city: personalInfo.location,
      challenges: skillInfo.chanllenges,
      projects_details: pastProject,
      career_brief: career,
      github_url: gitHub,
      join_network: whyJoin,
      tnc: selectedUnderstand,
      gender: personalInfo.gender,
      education: personalInfo.education,
      skill: skillInfo.selectedSkill,
      knowledge: skillInfo.selectedKnowledge
    })
      .then((response) => {
        console.log('res', response);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }

  const submitForm = () => {

    setUnderstandValid(!validator.isEmpty(selectedUnderstand))
    setPastProjectValid(true)
    setCareerValid(!validator.isEmpty(career) && validator.isLength(career, { min: 2, max: 300 }))
    setGitHubValid(validator.isURL(gitHub))
    setWhyJoinValid(!validator.isEmpty(whyJoin) && validator.isLength(whyJoin, { min: 2, max: 200 }))

    setCareerInfo({pastProject, career, gitHub, whyJoin, selectedUnderstand})

    if (pastProjectValid && careerValid && gitHubValid && whyJoinValid && understandValid) {
      sendData()
      change(5)
    }

  }


  return (
    <div className={`md:h-full ${bg} flex flex-col mx-auto z-0 text-${text} py-12 px-10 sm:px-16    lg:px-24 text-base lg:text-lg  text-justify md:overflow-auto z-40 `}>

      <div className={'text-orangee font-bold text-2xl my-4 md:mt-16 lg:mt-8'} >
        Career Info
      </div>

      <div className={'flex justify-between my-4 lg:my-6 z-40'}>
        <div className={'flex flex-col w-full'}>
          <div className={'font-semibold text-sm lg:text-base'}>Have you worked on any project in the past? Give details of the one you feel most impressed about?</div>
          <div>
            <input type='text' defaultValue={careerInfo?.pastProject} onChange={(e) => setPastProject(e.target.value)} className={'w-full bg-transparent text-base my-2 border-b-2 border-grey-700 hover:border-blue-500 focus:border-blue-500 outline-none'} />
          </div>
          {pastProjectValid === '' ? '' : pastProjectValid ? '' : <div className={`text-red-500 text-xs`}>Please enter details of you impressive projects</div>}
        </div>
      </div>

      <div className={'flex justify-between my-4 lg:my-6 z-40'}>
        <div className={'flex flex-col w-full'}>
          <div className={'font-semibold text-sm lg:text-base'}>Write a brief about your tech career journey, give details about your challenges along the way? <span className={'text-red-600'} >*</span></div>
          <div>
            <input type='text' defaultValue={careerInfo?.career} onChange={(e) => setCareer(e.target.value)} className={'w-full bg-transparent text-base my-2 border-b-2 border-grey-700 hover:border-blue-500 focus:border-blue-500 outline-none'} />
          </div>
          {careerValid === '' ? '' : careerValid ? '' : <div className={`text-red-500 text-xs`}>Please enter details of your career journey </div>}
        </div>
      </div>


      <div className={'flex justify-between my-4 lg:my-6 z-40'}>
        <div className={'flex flex-col w-full'}>
          <div className={'font-semibold text-sm lg:text-base'}>Do you have a Github URL? Kindly drop the link </div>
          <div>
            <input type='text' defaultValue={careerInfo?.gitHub} onChange={(e) => setGitHub(e.target.value)} className={'w-full bg-transparent text-base my-2 border-b-2 border-grey-700 hover:border-blue-500 focus:border-blue-500 outline-none'} />
          </div>
          {gitHubValid === '' ? '' : gitHubValid ? '' : <div className={`text-red-500 text-xs`}>Please enter your valid GitHub url </div>}
        </div>
      </div>


      <div className={'flex justify-between my-4 lg:my-6 z-40'}>
        <div className={'flex flex-col w-full'}>
          <div className={'font-semibold text-sm lg:text-base'}>Why do you want to join my network? <span className={'text-red-600'} >*</span></div>
          <div>
            <input type='text' defaultValue={careerInfo?.whyJoin} onChange={(e) => setWhyJoin(e.target.value)} className={'w-full bg-transparent  text-base my-2 border-b-2 border-grey-700 hover:border-blue-500 focus:border-blue-500 outline-none'} />
          </div>
          {whyJoinValid === '' ? '' : whyJoinValid ? '' : <div className={`text-red-500 text-xs`}>Please enter reason you want to join. </div>}
        </div>
      </div>

      <div className={'flex justify-between my-4 lg:my-6 z-40'}>
        <div className={'flex flex-col w-full'}>
          <div className={'font-semibold text-sm lg:text-base'}>Understand that this is not a paid job. However, there is an opportunity to get worthy talents compensated or referred to be part of a paid projects to encourage and motivate from time to time? <span className={'text-red-600'} >*</span></div>
          <div className={'flex flex-wrap'}>
            <div className={'flex items-center pr-10'}> <Radio {...controlUnderstand('Yes')} /> Yes <span className={'hidden md:contents'}> , I understand </span> </div>
            <div className={'flex items-center pr-10'}> <Radio {...controlUnderstand('No')} /> No </div>
          </div>
          {understandValid === '' ? '' : understandValid ? '' : <div className={`text-red-500 text-xs`}>Please state your understanding </div>}
        </div>

      </div>

      <div className={'flex flex-col space-y-4 md:space-y-0 sm:w-1/2 mx-auto md:flex-row md:w-full font-bold text-center my-4 lg:my-4 justify-around'}>
        <div className={`font-bold px-10 py-1 tracking-widest rounded-tr-md rounded-bl-md border-blue-600 border-2 ${text == 'black' ? 'text-dark' : 'text-white'} bg-transparent hover:cursor-pointer`} onClick={() => change(3)}>
          Previous
        </div>

        <div className={'font-bold px-10 py-1 tracking-widest rounded-tr-md rounded-bl-md border-blue-600 border-2 text-white bg-blue-600  hover:cursor-pointer'} onClick={() => submitForm()}>
          Submit
        </div>
      </div>


    </div>

  )
}

export default CareerDetails;
