import React from 'react';
import { GoCheck } from 'react-icons/go'



const FormIntro = ({ text, change }) => {

  let bg = 'bg-dark'

  if (text == 'black') {
    bg = `bg-white`;
    text = `black`;
  }
  else {
    bg = `bg-dark`;
    text = `white`;
  }

  return (
    <div className={`md:h-full ${bg} flex flex-col mx-auto z-0 text-${text} py-12 md:py-6 px-10 sm:px-16 lg:px-24 text-base lg:text-lg  text-justify md:overflow-auto z-40 `}>

      <div className={'my-4 z-40'}>
        <span className={' text-orangee font-bold'}>Hello dear,</span> <br /><br />
        Nice to meet you. If you made it to this point, it shows you have an interest in founding your tech roots. Congratulations, you are in the right place.
      </div>

      <div className={'my-4 z-40'}>
        My name is Segun Mustapha, the founder of Segsalerty Resources. Over the years, I have helped tach talents climax in their individual fields through proper guidance and mentorship.
      </div>

      <div className={'my-4 z-40'}>
        <div className={'text-orangee py-2'}> Our mission is to: </div>
        <div className={'flex '}>
          <GoCheck className='text-tick' size='32px' />
          <div className={'px-4 text-lg'}>Identify, mentor, and upskill obscure talents while aligning them with their skill sets and goals </div>
        </div>
        <div className={'flex z-40'}>
          <GoCheck className='text-tick' size='28px' />
          <div className={'px-4 text-lg'}>To deploy and situate engineers in a recognized spot in tech  global ecosystem </div>
        </div>
        <div className={'flex z-40'}>
          <GoCheck className='text-tick' size='28px' />
          <div className={'px-4 text-lg'}>To streamline and hasten recruitment process of talents </div>
        </div>

      </div>

      <div className={'my-4'}>
        Do you want to be a member of a communtiy where like minds attract and discuss? Easy access to resources and information on available job opportunities? And most importantly build a lasting work relationship with professionals and experts in diverse tech fields? Then...
      </div>

      <div className={'flex w-full justify-center font-bold '}>
        <div className={'mx-auto font-bold px-10 py-1 tracking-widest rounded-tr-md rounded-bl-md border-blue-600 border-2 text-white bg-blue-600  hover:cursor-pointer'} onClick={() => change(2)}>
          Next
        </div>
      </div>

    </div>

  )
}

export default FormIntro;