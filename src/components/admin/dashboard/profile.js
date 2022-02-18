import React from 'react';
import Me from '../../../assets/EMMANUEL.jpg';
import { Avatar } from '@mui/material';

const Profile = ({ bgDash }) => {

  let bg = 'bg-dark'
  let txt = 'text-white'
  let reverse = 'bg-white text-dark'
  let brdr = 'border-dark'
  let brdr2 = 'border-grey-700'


  if (bgDash) {
    bg = 'bg-lightDash'
    txt = 'text-dark'
    reverse = 'bg-dark text-lightDash'
    brdr = 'border-lightDash'
    brdr2 = 'border-dark'
  }
  else {
    bg = 'bg-dark'
    txt = 'text-white'
    reverse = 'bg-white text-dark'
    brdr = 'border-dark'
    brdr2 = 'border-grey-700'
  }


  return (
    <div className={`flex flex-col ${bg} ${txt} px-8 lg:px-12 p-4 h-full overflow-auto`}>
      <div className={'py-4 flex items-center justify-center'}>
        <div className={'text-sm sm:text-lg  lg:text-2xl'}> Account Settings / &nbsp; </div>
        <div className={'text-xs sm:text-base text-orangee '}> Expression of Interest  </div>
      </div>

      <div className={'flex flex-col lg:flex-row lg:h-full border border-primary rounded-2xl md:rounded-l-2xl'}>

        <div className={`basis-1/4  flex flex-col  text-lg md:text-xl lg:text-2xl ${reverse} rounded-2xl`}>
          <div className={'flex flex-col w-full items-center'}>
            <div className={`lg:my-4 pt-2 flex flex-col items-center w-full  border-b-2 ${brdr}`} >
              <Avatar
                alt="Profile picture"
                src={Me}
                sx={{ width: 100, height: 100 }}
              />
              <div className={'font-bold py-4 text-xl'}> John Doe </div>
            </div>

            <div className={'flex flex-row lg:flex-col w-full  md:font-semibold lg:text-base'}>
              <div className={`lg:my-1 xl:my-3 w-full flex items-center justify-center lg:justify-start py-2 md:py-4 px-3 lg:px-12 border-r-2 lg:border-b-2 lg:border-r-0 ${brdr} hover:text-orangee `}>
                Profile
              </div>
              <div className={`lg:my-1 xl:my-3 w-full flex items-center justify-center lg:justify-start py-2 md:py-4 px-3 lg:px-12 border-r-2 lg:border-b-2 lg:border-r-0 ${brdr} hover:text-orangee `}>
                Theme
              </div>
              <div className={`lg:my-1 xl:my-3 w-full flex items-center justify-center lg:justify-start py-2 md:py-4 px-3 lg:px-12 lg:border-b-2 lg:border-r-0 ${brdr} hover:text-orangee `}>
                Notifications
              </div>
            </div>
          </div>

        </div>

        <div className={`basis-3/4 bg-transparent ${txt}`}>
          <div className={'flex flex-col md:flex-row justify-between my-0 md:my-4 xl:my-6 py-2 px-8 md:px-12'}>
            <div className={'flex flex-col w-full py-2 md:w-2/5'}>
              <div className={'font-semibold text-base'}>First Name </div>
              <div><input type='text' placeholder='John' className={`w-full bg-transparent text-base my-2 border-b-2 ${brdr2} hover:border-blue-500 focus:border-blue-500 outline-none`} /></div>
            </div>
            <div className={'flex flex-col w-full py-2 md:w-2/5'}>
              <div className={'font-semibold text-base'}>Last Name </div>
              <div><input type='text' placeholder='Doe' className={`w-full bg-transparent text-base my-2 border-b-2 ${brdr2} hover:border-blue-500 focus:border-blue-500 outline-none`} /></div>
            </div>
          </div>

          <div className={'flex  flex-col md:flex-row  justify-between my-0 md:my-4 xl:my-6 py-2 px-8 md:px-12  '}>
            <div className={'flex flex-col w-full py-2 md:w-2/5'}>
              <div className={'font-semibold text-base'}>Email Address </div>
              <div><input type='email' value='johndoe@gmail.com' disabled className={`w-full bg-transparent text-base my-2 border-b-2  ${brdr2}`} /></div>
            </div>
            <div className={'flex flex-col w-full py-2 md:w-2/5'}>
              <div className={'font-semibold text-base'}>Phone Number </div>
              <div><input type='tel' placeholder='+234' className={`w-full bg-transparent text-base my-2 border-b-2 ${brdr2} hover:border-blue-500 focus:border-blue-500 outline-none`} /></div>
            </div>
          </div>

          <div className={'flex  flex-col md:flex-row  justify-between my-0 md:my-4 xl:my-6 py-2 px-8 md:px-12  '}>
            <div className={'flex flex-col w-full py-2 md:w-2/5'}>
              <div className={'font-semibold text-base'}>Company </div>
              <div><input type='text' placeholder='Segsalerty' className={`w-full bg-transparent text-base my-2 border-b-2 ${brdr2} hover:border-blue-500 focus:border-blue-500 outline-none`} /></div>
            </div>
            <div className={'flex flex-col w-full py-2 md:w-2/5'}>
              <div className={'font-semibold text-base'}>Location </div>
              <div><input type='text' placeholder='Lagos' className={`w-full bg-transparent text-base my-2 border-b-2 ${brdr2} hover:border-blue-500 focus:border-blue-500 outline-none`} /></div>
            </div>
          </div>

          <div className={'flex  flex-col md:flex-row  justify-between my-0 md:my-4 xl:my-6 py-2 px-8 md:px-12  '}>
            <div className={'flex flex-col w-full py-2 md:w-2/5'}>
              <div className={'font-semibold text-base'}>New Password </div>
              <div><input type='password' placeholder='***********q%' className={`w-full bg-transparent text-base my-2 border-b-2 ${brdr2} hover:border-blue-500 focus:border-blue-500 outline-none`} /></div>
            </div>
            <div className={'flex flex-col w-full py-2 md:w-2/5'}>
              <div className={'font-semibold text-base'}>Confirm Password </div>
              <div><input type='password' placeholder='***********q%' className={`w-full bg-transparent text-base my-2 border-b-2 ${brdr2} hover:border-blue-500 focus:border-blue-500 outline-none`} /></div>
            </div>
          </div>

        </div>
      </div>

      <div className={'py-4 flex justify-center lg:justify-end'}>
        <div className={'flex flex-col md:flex-row w-1/2  md:w-3/4 font-bold justify-around space-y-4 md:space-y-0'}>
          <div className={`font-bold text-center px-6 md:px-10 py-1 tracking-widest rounded-tr-md rounded-bl-md border-blue-600 border-2 ${txt} bg-transparent hover:bg-white hover:text-blue-600`} >
            Cancel
          </div>

          <div className={'font-bold text-center px-6 md:px-10 py-1 tracking-widest rounded-tr-md rounded-bl-md border-blue-600 border-2 text-white bg-blue-600 hover:bg-white hover:text-blue-600'} >
            Update
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;
