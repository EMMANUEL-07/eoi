import React from 'react';
import { Icon } from '@iconify/react';
import { Badge } from '@mui/material';
import CsvDownload from 'react-json-to-csv'
import { Tooltip } from '@mui/material';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs'


const Header = ({ bgDash, setBgDash, sel, dataExp }) => {  

  return (
    <div className={'flex justify-end px-12 font-bold bg-white'}>

      
      { sel ? 
      <CsvDownload
        data={dataExp}
        filename="Selected Resources"
        className={`flex font-bold px-8 py-2  my-2 tracking-widest rounded-tr-md rounded-bl-md text-white bg-blue-600 hover:bg-white hover:text-blue-600 hover:cursor-pointer`}
      >
        <Icon icon="bytesize:export" className={'text-xl md:mr-4'} /> <span className={'hidden md:block'}>Export </span>
      </CsvDownload> : '' }

      <div className={'flex items-center py-3 text-lg hover:cursor-pointer'}>
        <Badge className={'mx-4'} badgeContent='12' color='warning' >
          <Icon icon="carbon:notification" className={'mx-1 text-xl'} />
        </Badge>
        Notifications
      </div>

      <Tooltip title="Change theme">
        <div onClick={() => setBgDash(!bgDash)} className={'p-4'} >
          {bgDash ? <BsMoonStarsFill size='22' className='text-dark' /> : <BsSunFill size='22' className='text-yellow-500' />}
        </div>
      </Tooltip>
    </div>
  )
}

export default Header;