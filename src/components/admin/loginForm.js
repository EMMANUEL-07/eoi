import React from 'react'
import { GrFacebook } from 'react-icons/gr'
import { FcGoogle } from 'react-icons/fc'


const LoginForm = ({ text }) => {
  return (
    <div className={`h-full px-40  mx-auto z-0 text-${text} w-full`}>
      <div className={'text-3xl mb-10 font-bold text-center'}>Login to your Dashboard</div>
      
      <div className={'flex items-center text-3xl my-8 bg-white py-3 px-12 text-black border-4 border-white hover:cursor-pointer hover:scale-105'}>
        <div className={'basis-1/5'} ><GrFacebook color='#277DFF' size='40' /></div>
        <div className={'basis-4/5'}>Sign in with Facebook</div>
      </div>
      
      <div className={'flex items-center text-3xl my-8 border-2 py-4 px-12 bg-transparent hover:cursor-pointer hover:scale-105'}>
        <div className={'basis-1/5'} ><FcGoogle size='40' /> </div>
        <div className={'basis-4/5'}>Sign in with Google </div>
      </div>
      
      <div className={'flex items-center text-xl my-4 w-full'}>
        <div className={'w-full border-b-2 border-white'}></div>
        <div className={'px-4'}>or</div>
        <div className={'w-full border-b-2 border-white'}></div>
      </div>
      
      <div className={'my-6 items-start w-full'}>
        <div className={'font-semibold text-lg py-3'}>Email <span className={'text-red-600'} >*</span></div>
        <div><input type='email' placeholder='johndoe@gmail.com' className={'w-full bg-transparent outline-none border-b-2 border-white hover:border-blue-500 focus:border-blue-500 '} /></div>
      </div>
      
      <div className={'my-6 items-start w-full'}>
        <div className={'font-semibold text-lg py-3'}>Password <span className={'text-red-600'} >*</span></div>
        <div><input type='password' placeholder='*******88' className={'w-full bg-transparent outline-none border-b-2 border-white hover:border-blue-500 focus:border-blue-500 '} /></div>
      </div>
      
      <div className={'flex justify-center mt-10 font-bold px-36 '}>
        <div className={'font-bold px-10 py-2 tracking-widest rounded-tr-md rounded-bl-md text-white bg-blue-600 hover:bg-white hover:text-blue-600'}>
          Login
        </div>
      </div>
    </div>
  )
}

export default LoginForm
