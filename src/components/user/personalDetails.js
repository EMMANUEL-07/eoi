import React, { useState, useEffect } from 'react';
import { Radio } from '@mui/material';
import { blue } from '@mui/material/colors';
import { stateData } from '../admin/dashboard/constants'
import validator from 'validator';

const PersonalDetails = ({ text, change, personalInfo, setPersonalInfo }) => {


  let bg = 'bg-dark'

  if (text === 'black') {
    bg = `bg-white`;
    text = `black`;
  }
  else {
    bg = `bg-dark`;
    text = `white`;
  }

  const [name, setName] = useState(personalInfo?.name);
  const [email, setEmail] = useState(personalInfo?.email);
  const [phone, setPhone] = useState(personalInfo?.phone);
  const [location, setLocation] = useState(personalInfo?.location);
  const [selectedGender, setSelectedGender] = useState(personalInfo?.gender);
  const [selectedQualification, setSelectedQualification] = useState(personalInfo?.education);

  const [nameValid, setNameValid] = useState('');
  const [emailValid, setEmailValid] = useState('');
  const [phoneValid, setPhoneValid] = useState('');
  const [locationValid, setLocationValid] = useState('');
  const [selectedGenderValid, setSelectedGendeValid] = useState('');
  const [selectedQualificationValid, setSelectedQualificationValid] = useState('');

  useEffect(() => {

    console.log('validating')

  }, [nameValid, emailValid, phoneValid, locationValid, selectedGenderValid, selectedQualificationValid])

  const handleGender = (event) => {
    setSelectedGender(event.target.value);
  };

  const handleQualification = (event) => {
    setSelectedQualification(event.target.value);
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

  const submitForm = () => {

    setNameValid(!validator.isEmpty(name) && validator.isLength(name, {min:2, max:50}))
    setEmailValid(!validator.isEmpty(email) && validator.isEmail(email))
    setPhoneValid(!validator.isEmpty(phone) && validator.isMobilePhone(phone))
    setLocationValid(!validator.isEmpty(location))
    setSelectedGendeValid(!validator.isEmpty(selectedGender))
    setSelectedQualificationValid(!validator.isEmpty(selectedQualification))

    setPersonalInfo({name, email, phone, location, gender: selectedGender, education: selectedQualification})


    if (nameValid && emailValid && phoneValid && locationValid && selectedGenderValid && selectedQualificationValid) {
      change(3)
    }

  }

  return (
    <div className={`md:h-full ${bg} flex flex-col mx-auto z-0 text-${text} py-12 px-10 sm:px-16   lg:px-28 text-base lg:text-lg  md:overflow-auto z-40`}>
      
      <div className={'text-orangee font-bold text-2xl my-4 md:mt-8'} >
        Personal Info
      </div>

      <div className={'flex flex-col md:flex-row  space-y-4 md:space-y-0 lg:space-x-4 justify-between md:my-6'}>
        <div className={'flex flex-col w-full'}>
          <div className={'font-semibold text-sm lg:text-base'}>Full Name <span className={'text-red-600'} >*</span></div>
          <div><input type='text' placeholder='John Doe' defaultValue={personalInfo.name} className={'w-full bg-transparent text-base my-2 border-b-2 border-grey-700 hover:border-blue-500 focus:border-blue-500 outline-none'} onChange={(e) => setName(validator.trim(e.target.value))} /></div>
          { nameValid === '' ? '' : nameValid ?  '' : <div className={`text-red-500 text-xs`}>Please input your fullname - Min:2, Max:50 </div>}
        </div>
      </div>

      <div className={'flex flex-col md:flex-row  space-y-4 md:space-y-0 lg:space-x-4 justify-between md:my-6'}>
        <div className={'flex flex-col md:w-60 '}>
          <div className={'font-semibold text-sm lg:text-base'}>Email Address <span className={'text-red-600'} >*</span></div>
          <div><input type='email' placeholder='johndoe@gmail.com'  defaultValue={personalInfo.email} className={'w-full bg-transparent text-base my-2 border-b-2 border-grey-700 hover:border-blue-500 focus:border-blue-500 outline-none'} onChange={(e) => setEmail(validator.trim(e.target.value))} /></div>
          {emailValid === '' ? '' : emailValid ? '' : <div className={`text-red-500 text-xs`}>Please input your email </div>}
        </div>
        <div className={'flex flex-col md:w-60 z-40'}>
          <div className={'font-semibold text-sm lg:text-base'}>Phone Number <span className={'text-red-600'} >*</span></div>
          <div><input type='tel' placeholder='+234'  defaultValue={personalInfo.phone} className={'w-full bg-transparent text-base my-2 border-b-2 border-grey-700 hover:border-blue-500 focus:border-blue-500 outline-none'} onChange={(e) => setPhone(validator.trim(e.target.value))} /></div>
          {phoneValid === '' ? '' : phoneValid ? '' : <div className={`text-red-500 text-xs`}>Please input your phone number </div>}
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
          {selectedGenderValid === '' ? '' : selectedGenderValid ? '' : <div className={`text-red-500 text-xs`}>Please select your gender </div>}
        </div>
      </div>

      <div className={'flex justify-between my-4 lg:my-6 z-40'}>
        <div className={'flex flex-col w-full'}>
          <div className={'font-semibold text-sm lg:text-base'}>Highest educational qualification?  <span className={'text-red-600'} >*</span></div>
          <div className={'flex flex-wrap -ml-3'}>
            <div className={'flex items-center pr-6'}> <Radio {...controlQualification('SSCE')} /> SSCE </div>
            <div className={'flex items-center pr-6'}> <Radio {...controlQualification('OND')} /> OND </div>
            <div className={'flex items-center pr-6'}> <Radio {...controlQualification('HND')} /> HND </div>
            <div className={'flex items-center pr-6'}> <Radio {...controlQualification('BSC')} /> BSC </div>
            <div className={'flex items-center pr-6'}> <Radio {...controlQualification('MSC')} /> MSC </div>
          </div>
          {selectedQualificationValid === '' ? '' : selectedQualificationValid ? '' : <div className={`text-red-500 text-xs`}>Please select your qualification </div>}
        </div>
      </div>

      <div className={'flex justify-between my-4 lg:my-6 w-full z-40'}>
        <div className={'flex flex-col w-full'}>
          <div className={'font-semibold text-sm lg:text-base'}>State of residence? (In Nigeria) <span className={'text-red-600'} >*</span></div>
          <div>
            <select defaultValue={personalInfo.location}  className={'bg-transparent text-white w-full my-2 border-b-2 border-white outline-none'} onChange={(e) => setLocation(validator.trim(e.target.value))}>
              <option value="" className={'text-dark bg-white'} >State</option>
              {stateData.map(e => <option key={e} value={e} className={'text-dark bg-white text-sm '} >{e}</option>)}
            </select>
          </div>
          {locationValid === '' ? '' : locationValid ? '' : <div className={`text-red-500 text-xs`}>Please select your state of residence </div> }
        </div>
      </div>


      <div className={'flex flex-col space-y-4 md:space-y-0 sm:w-1/2 mx-auto md:flex-row md:w-full font-bold text-center my-4 lg:my-6 justify-around'}>
        <div className={`font-bold px-10 py-1 tracking-widest rounded-tr-md rounded-bl-md border-blue-600 border-2 ${text === 'black' ? 'text-dark' : 'text-white'} bg-transparent  hover:cursor-pointer`} onClick={() => change(1)}>
          Previous
        </div>

        <div className={'font-bold px-10 py-1 tracking-widest rounded-tr-md rounded-bl-md border-blue-600 border-2 text-white bg-blue-600  hover:cursor-pointer hover:opacity-80'} onClick={() => submitForm()}>
          Next
        </div>
      </div>


    </div>

  )
}

export default PersonalDetails;